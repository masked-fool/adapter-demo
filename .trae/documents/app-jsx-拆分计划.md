# App.jsx 拆分为横竖版页面计划

## 需求分析
- 保持现有功能结构
- 根据断点自动切换横竖版布局
- 竖版：移动端优先，垂直滚动布局
- 横版：桌面端，侧边栏+主内容区布局

## 断点定义
- **mobile**: < 768px (md 断点以下)
- **desktop**: >= 768px (md 断点及以上)

## 文件结构规划

```
src/
├── layouts/
│   ├── PortraitLayout.jsx    # 竖版布局（移动端）
│   ├── LandscapeLayout.jsx   # 横版布局（桌面端）
│   └── PageLayout.jsx        # 主布局容器，根据断点切换
├── components/
│   └── DeviceInfo.jsx        # 保持现有
├── pages/
│   ├── HomePage.jsx          # 首页内容组件
│   ├── content/
│   │   ├── HeroSection.jsx       # Hero 横幅
│   │   ├── QuickActions.jsx      # 4个快捷操作
│   │   ├── HotProducts.jsx       # 热门推荐卡片
│   │   ├── Announcements.jsx     # 公告信息卡片
│   │   ├── QuickLinks.jsx        # 快捷入口卡片
│   │   └── BottomNav.jsx         # 底部导航
│   └── PurchaseModal.jsx     # 购买弹窗
└── App.jsx                    # 简化为路由逻辑
```

## 实现步骤

### 步骤 1：创建布局组件
- [ ] `src/layouts/PageLayout.jsx` - 主布局容器
  - 使用 `useMediaQuery` 检测断点
  - md 以下渲染 PortraitLayout
  - md 及以上渲染 LandscapeLayout

- [ ] `src/layouts/PortraitLayout.jsx` - 竖版布局
  - 全屏垂直布局
  - 顶部 Header
  - 可滚动 Main 内容
  - 固定底部导航

- [ ] `src/layouts/LandscapeLayout.jsx` - 横版布局
  - 左侧固定侧边栏（包含导航）
  - 右侧主内容区
  - Header 集成在内容区顶部

### 步骤 2：提取内容组件
- [ ] `src/pages/HomePage.jsx` - 首页容器
- [ ] `src/pages/content/HeroSection.jsx` - Hero 横幅
- [ ] `src/pages/content/QuickActions.jsx` - 4个快捷操作
- [ ] `src/pages/content/HotProducts.jsx` - 热门推荐
- [ ] `src/pages/content/Announcements.jsx` - 公告信息
- [ ] `src/pages/content/QuickLinks.jsx` - 快捷入口
- [ ] `src/pages/content/BottomNav.jsx` - 底部导航
- [ ] `src/pages/PurchaseModal.jsx` - 购买弹窗

### 步骤 3：更新 App.jsx
- [ ] 简化 App.jsx，保留核心状态管理
- [ ] 集成 PageLayout
- [ ] 保留测试页面跳转逻辑

### 步骤 4：确保功能完整性
- [ ] 购买弹窗功能正常
- [ ] 底部导航切换功能
- [ ] 响应式样式完整保留
- [ ] DeviceInfo 组件正常工作

## 布局差异对比

| 特性 | 竖版 (Portrait) | 横版 (Landscape) |
|------|----------------|------------------|
| 导航位置 | 底部固定 | 左侧固定侧边栏 |
| Header | 顶部固定 | 内容区顶部 |
| 内容布局 | 单列垂直滚动 | 多列网格布局 |
| 快捷入口 | 隐藏（xl 显示） | 始终显示 |
| 弹窗居中 | 垂直水平居中 | 水平居中偏上 |

## 断点响应式策略
- PortraitLayout: 移动端样式为主（px, md 适配）
- LandscapeLayout: 桌面端样式为主（md 适配）
