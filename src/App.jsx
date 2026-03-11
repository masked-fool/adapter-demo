import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">我的应用</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </header>

      <main className="pb-16">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-8">
          <div className="text-white">
            <p className="text-sm opacity-90 mb-1">欢迎回来</p>
            <h2 className="text-2xl font-bold mb-2">用户名</h2>
            <p className="text-sm opacity-80">今日收益 +128.50</p>
          </div>
        </section>

        <section className="px-4 py-4">
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: '💰', label: '充值' },
              { icon: '📦', label: '订单' },
              { icon: '❤️', label: '收藏' },
              { icon: '⚙️', label: '设置' },
            ].map((item, index) => (
              <button key={index} className="flex flex-col items-center py-2">
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-xs text-gray-600">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="px-4 py-2">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-gray-900">热门推荐</h3>
              <span className="text-xs text-blue-500">查看全部</span>
            </div>
            <div className="space-y-3">
              {[
                { title: '商品名称 A', desc: '这是商品的简要描述', price: '¥99.00' },
                { title: '商品名称 B', desc: '这是商品的简要描述', price: '¥199.00' },
                { title: '商品名称 C', desc: '这是商品的简要描述', price: '¥299.00' },
              ].map((item, index) => (
                <div key={index} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg shrink-0"></div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                    <p className="text-xs text-gray-500 truncate">{item.desc}</p>
                    <p className="text-sm font-semibold text-red-500 mt-1">{item.price}</p>
                  </div>
                  <button className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-full ml-2">
                    购买
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-2">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-3">公告信息</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-red-500 text-xs bg-red-50 px-1.5 py-0.5 rounded mr-2">重要</span>
                <span className="text-sm text-gray-600">系统升级维护通知</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-xs bg-blue-50 px-1.5 py-0.5 rounded mr-2">公告</span>
                <span className="text-sm text-gray-600">新功能上线，欢迎体验</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-4 py-2">
          {[
            { id: 'home', icon: '🏠', label: '首页' },
            { id: 'discover', icon: '🔍', label: '发现' },
            { id: 'message', icon: '💬', label: '消息' },
            { id: 'profile', icon: '👤', label: '我的' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-1 ${
                activeTab === item.id ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs mt-0.5">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default App
