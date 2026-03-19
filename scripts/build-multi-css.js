/**
 * 多份 CSS 构建脚本
 * 生成 rootValue 从 8 到 16 的多份 CSS 文件
 * 用于运行时根据根元素字体大小动态加载
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// rootValue 范围配置
const ROOT_VALUE_MIN = 8;
const ROOT_VALUE_MAX = 16;

// 读取源 CSS 文件
async function readSourceCSS() {
  const cssPath = path.join(rootDir, "src", "index.css");
  return fs.readFileSync(cssPath, "utf-8");
}

// 创建 postcss-pxtorem 插件配置
function createPxToRemPlugin(rootValue) {
  return pxtorem({
    rootValue,
    unitPrecision: 5,
    propList: ["*"],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
  });
}

// 处理 CSS 并生成指定 rootValue 的版本
async function processCSS(css, rootValue) {
  const result = await postcss([
    tailwindcss(),
    autoprefixer(),
    createPxToRemPlugin(rootValue),
  ]).process(css, {
    from: path.join(rootDir, "src", "index.css"),
  });
  return result.css;
}

// 确保目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 主函数
async function buildMultiCSS() {
  console.log("🚀 开始构建多份 CSS...");

  const sourceCSS = await readSourceCSS();
  const outputDir = path.join(rootDir, "public", "css");
  ensureDir(outputDir);

  // 生成 manifest 文件
  const manifest = {
    versions: {},
    defaultRootValue: ROOT_VALUE_MAX,
  };

  // 生成 rootValue 从 8 到 16 的 CSS 文件
  for (
    let rootValue = ROOT_VALUE_MIN;
    rootValue <= ROOT_VALUE_MAX;
    rootValue++
  ) {
    console.log(`📦 处理 rootValue = ${rootValue}...`);

    const processedCSS = await processCSS(sourceCSS, rootValue);
    const filename = `index.rem-${rootValue}.css`;
    const outputPath = path.join(outputDir, filename);

    fs.writeFileSync(outputPath, processedCSS);

    manifest.versions[rootValue] = {
      file: `css/${filename}`,
      rootValue,
    };

    console.log(`✅ 生成: ${filename}`);
  }

  // 写入 manifest
  const manifestPath = path.join(rootDir, "public", "css-manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`📝 生成 manifest: css-manifest.json`);

  console.log("🎉 构建完成!");
  console.log(`📁 输出目录: ${outputDir}`);
  console.log(`📊 共生成 ${ROOT_VALUE_MAX - ROOT_VALUE_MIN + 1} 份 CSS 文件`);
}

// 执行构建
buildMultiCSS().catch((err) => {
  console.error("❌ 构建失败:", err);
  process.exit(1);
});
