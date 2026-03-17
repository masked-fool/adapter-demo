/**
 * CSS 动态加载器
 * 根据根元素字体大小动态加载对应的 CSS 文件
 */

// CSS 版本缓存
let CSS_VERSIONS = null;

/**
 * 从 manifest.json 获取 CSS 版本列表
 * @returns {Promise<number[]>} 版本号数组
 */
async function fetchVersionsFromManifest() {
  if (CSS_VERSIONS) {
    return CSS_VERSIONS;
  }

  try {
    const res = await fetch("/css-manifest.json");
    const manifest = await res.json();
    CSS_VERSIONS = Object.keys(manifest.versions)
      .map(Number)
      .sort((a, b) => a - b);
    console.log(`📋 从 manifest.json 加载 CSS 版本:`, CSS_VERSIONS);
    return CSS_VERSIONS;
  } catch (err) {
    console.warn("⚠️ 无法读取 manifest.json，使用默认版本", err);
    CSS_VERSIONS = [8, 9, 10, 11, 12, 13, 14, 15, 16];
    return CSS_VERSIONS;
  }
}

// 当前加载的 CSS 链接元素
let currentLinkElement = null;
let currentRootValue = null;

/**
 * 获取根元素的字体大小
 * @returns {number} 根元素字体大小（像素值）
 */
export function getRootFontSize() {
  const rootStyle = getComputedStyle(document.documentElement);
  return parseFloat(rootStyle.fontSize);
}

/**
 * 根据根元素字体大小选择最接近的 CSS 版本
 * @param {number} rootFontSize - 根元素字体大小
 * @returns {Promise<number>} 最接近的 rootValue
 */
export async function selectBestRootValue(rootFontSize) {
  const versions = await fetchVersionsFromManifest();

  // 找到最接近的 rootValue
  let closestValue = versions[0];
  let minDiff = Math.abs(rootFontSize - closestValue);

  for (const value of versions) {
    const diff = Math.abs(rootFontSize - value);
    if (diff < minDiff) {
      minDiff = diff;
      closestValue = value;
    }
  }

  return closestValue;
}

/**
 * 动态加载指定版本的 CSS
 * @param {number} rootValue - CSS 版本的 rootValue
 * @returns {Promise<void>}
 */
export async function loadCSSByVersion(rootValue) {
  // 如果已经加载了相同版本，跳过
  if (currentRootValue === rootValue && currentLinkElement) {
    return;
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/index.rem-${rootValue}.css`;

    link.onload = () => {
      // 移除旧的 CSS
      if (currentLinkElement && currentLinkElement !== link) {
        currentLinkElement.remove();
      }
      currentLinkElement = link;
      currentRootValue = rootValue;
      console.log(`✅ CSS 已加载: rootValue = ${rootValue}`);
      resolve();
    };

    link.onerror = () => {
      reject(new Error(`加载 CSS 失败: rootValue = ${rootValue}`));
    };

    document.head.appendChild(link);
  });
}

/**
 * 根据当前根元素字体大小自动加载合适的 CSS
 * @returns {Promise<number>} 返回加载的 CSS 版本 rootValue
 */
export async function loadAdaptiveCSS() {
  const rootFontSize = getRootFontSize();
  const bestRootValue = await selectBestRootValue(rootFontSize);

  console.log(
    `📐 根元素字体大小: ${rootFontSize}px, 选择 CSS 版本: rootValue = ${bestRootValue}`
  );

  await loadCSSByVersion(bestRootValue);
  return bestRootValue;
}

/**
 * 监听根元素字体大小变化，自动切换 CSS
 * @param {Function} onChange - CSS 版本变化时的回调函数
 * @returns {Function} 取消监听的函数
 */
export function watchRootFontSizeChange(onChange) {
  let lastRootValue = null;

  const checkAndLoad = async () => {
    const rootFontSize = getRootFontSize();
    const newRootValue = await selectBestRootValue(rootFontSize);

    if (newRootValue !== lastRootValue) {
      lastRootValue = newRootValue;
      await loadCSSByVersion(newRootValue);
      onChange?.(newRootValue, rootFontSize);
    }
  };

  // 初始加载
  checkAndLoad();

  // 使用 ResizeObserver 监听根元素变化
  const resizeObserver = new ResizeObserver(() => {
    checkAndLoad();
  });

  resizeObserver.observe(document.documentElement);

  // 返回取消监听函数
  return () => {
    resizeObserver.disconnect();
  };
}

/**
 * 初始化自适应 CSS 加载器
 * @param {Object} options - 配置选项
 * @param {boolean} options.watch - 是否监听变化
 * @param {Function} options.onChange - 变化回调
 * @returns {Promise<number|Function>} 返回初始 rootValue 或取消监听函数
 */
export async function initAdaptiveCSS(options = {}) {
  const { watch = false, onChange } = options;

  if (watch) {
    return new Promise((resolve) => {
      const unsubscribe = watchRootFontSizeChange((rootValue, fontSize) => {
        onChange?.(rootValue, fontSize);
      });
      resolve(unsubscribe);
    });
  }

  return loadAdaptiveCSS();
}

export default {
  getRootFontSize,
  selectBestRootValue,
  loadCSSByVersion,
  loadAdaptiveCSS,
  watchRootFontSizeChange,
  initAdaptiveCSS,
};
