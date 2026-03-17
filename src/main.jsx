import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initAdaptiveCSS } from './utils/cssLoader.js'
import App from './App.jsx'

// 初始化自适应 CSS 加载器
// 根据根元素字体大小动态加载对应的 CSS 文件
initAdaptiveCSS({
  watch: true,
  onChange: (rootValue, fontSize) => {
    console.log(`🔄 CSS 版本已切换: rootValue = ${rootValue}, 根字体大小 = ${fontSize}px`)
  }
}).then(() => {
  // CSS 加载完成后再渲染应用
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
