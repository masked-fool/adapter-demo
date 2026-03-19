/**
 * Vite 插件：多份 CSS 生成
 * 在开发模式下动态生成 rootValue 从 8 到 16 的多份 CSS 文件
 */

import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rootValue 范围配置
const ROOT_VALUE_MIN = 8;
const ROOT_VALUE_MAX = 16;

// 缓存已处理的 CSS
const cssCache = new Map();

/**
 * 创建 postcss-pxtorem 插件配置
 */
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

/**
 * 处理 CSS 并生成指定 rootValue 的版本
 */
async function processCSS(css, rootValue) {
  const cacheKey = `${rootValue}-${css.length}`;
  if (cssCache.has(cacheKey)) {
    return cssCache.get(cacheKey);
  }

  const result = await postcss([
    tailwindcss(),
    autoprefixer(),
    createPxToRemPlugin(rootValue),
  ]).process(css, {
    from: undefined,
  });

  cssCache.set(cacheKey, result.css);
  return result.css;
}

/**
 * Vite 插件主函数
 */
export function multiCSSPlugin() {
  return {
    name: "vite-plugin-multi-css",

    // 中间件模式，拦截 CSS 请求
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url;

        // 检查是否是请求多份 CSS
        const match = url.match(/\/css\/index\.rem-(\d+)\.css/);
        if (match) {
          const rootValue = parseInt(match[1], 10);

          // 验证 rootValue 范围
          if (rootValue < ROOT_VALUE_MIN || rootValue > ROOT_VALUE_MAX) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
          }

          try {
            // 读取源 CSS 文件
            const sourcePath = path.resolve(__dirname, "../src/index.css");
            const sourceCSS = fs.readFileSync(sourcePath, "utf-8");

            // 处理并返回
            const processedCSS = await processCSS(sourceCSS, rootValue);

            res.setHeader("Content-Type", "text/css");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.end(processedCSS);
            return;
          } catch (err) {
            console.error(`处理 CSS 失败 (rootValue=${rootValue}):`, err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
          }
        }

        // 处理 manifest 请求
        if (url === "/css-manifest.json") {
          const manifest = {
            versions: {},
            defaultRootValue: 8,
          };

          for (let i = ROOT_VALUE_MIN; i <= ROOT_VALUE_MAX; i++) {
            manifest.versions[i] = {
              file: `css/index.rem-${i}.css`,
              rootValue: i,
            };
          }

          res.setHeader("Content-Type", "application/json");
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.end(JSON.stringify(manifest, null, 2));
          return;
        }

        next();
      });
    },

    // 构建时的钩子
    buildEnd() {
      // 清空缓存
      cssCache.clear();
    },
  };
}

export default multiCSSPlugin;
