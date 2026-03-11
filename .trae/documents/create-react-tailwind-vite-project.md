# React + Tailwind + Vite 项目创建计划

## 目标
创建一个 React + Tailwind 项目，使用 Vite 作为构建工具，只展示一个首页。

## 实施步骤

### 1. 初始化 Vite + React 项目
- 使用 `npm create vite@latest . -- --template react` 命令在当前目录创建 React 项目
- 安装基础依赖

### 2. 配置 Tailwind CSS
- 安装 Tailwind CSS 相关依赖：`npm install -D tailwindcss postcss autoprefixer`
- 初始化 Tailwind 配置：`npx tailwindcss init -p`
- 配置 `tailwind.config.js` 文件，添加 content 路径
- 在 `src/index.css` 中添加 Tailwind 指令

### 3. 创建首页组件
- 修改 `src/App.jsx`，创建一个简单的首页组件
- 添加基本的首页内容和样式

### 4. 验证项目
- 运行 `npm run dev` 启动开发服务器
- 确认项目能够正常构建和运行

## 技术栈
- React 18+
- Vite 5+
- Tailwind CSS 3+
