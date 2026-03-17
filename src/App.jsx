import { useState, useRef, useEffect } from "react";
import TestPage from "./TestPage";
import DeviceInfo from "./components/DeviceInfo";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef(null);

  const handleBuyClick = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  if (currentPage === "test") {
    return <TestPage />;
  }

  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm flex-shrink-0">
          <div className="px-[16px] py-[12px] md:px-[24px] md:py-[16px] xl:px-[40px] xl:py-[20px] flex items-center justify-between">
            <h1 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold text-gray-900">
              我的应用
            </h1>
            <div className="flex items-center gap-[8px]">
              <button
                onClick={() => setCurrentPage("test")}
                className="px-[12px] py-[6px] text-[12px] bg-blue-100 text-blue-600 rounded-[12px] hover:bg-blue-200"
              >
                测试页面
              </button>
              <button className="p-[8px] md:p-[10px] xl:p-[12px] rounded-[12px] hover:bg-gray-100">
                <svg
                  className="w-[20px] md:w-[22px] xl:w-[24px] h-[20px] md:h-[22px] xl:h-[24px] text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-[16px] md:pb-[20px] xl:pb-[24px]">
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-[16px] py-[32px] md:px-[24px] md:py-[40px] xl:px-[60px] xl:py-[60px]">
            <div className="text-white">
              <p className="text-[14px] md:text-[16px] xl:text-[18px] opacity-90 mb-[4px]">
                欢迎回来
              </p>
              <h2 className="text-[24px] md:text-[28px] xl:text-[36px] font-bold mb-[8px] xl:mb-[12px]">
                用户名
              </h2>
              <p className="text-[14px] md:text-[16px] xl:text-[20px] opacity-80">
                今日收益 +128.50
              </p>
            </div>
          </section>

          <section className="px-[16px] py-[16px] md:px-[24px] md:py-[24px] xl:px-[40px] xl:py-[32px]">
            <div className="grid grid-cols-4 gap-[16px] md:gap-[20px] xl:gap-[32px]">
              {[
                { icon: "💰", label: "充值" },
                { icon: "📦", label: "订单" },
                { icon: "❤️", label: "收藏" },
                { icon: "⚙️", label: "设置" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center py-[8px] md:py-[12px] xl:py-[16px]"
                >
                  <span className="text-[24px] md:text-[28px] xl:text-[36px] mb-[4px] xl:mb-[8px]">
                    {item.icon}
                  </span>
                  <span className="text-[12px] md:text-[14px] xl:text-[16px] text-gray-600">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <div className="px-[16px] md:px-[24px] xl:px-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px] md:gap-[20px] xl:gap-[24px]">
              <section className="py-[8px] md:py-[12px] xl:py-[16px]">
                <div className="bg-white rounded-2xl p-[16px] md:p-[20px] xl:p-[24px] shadow-sm">
                  <div className="flex items-center justify-between mb-[12px] md:mb-[16px] xl:mb-[20px]">
                    <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-gray-900">
                      热门推荐
                    </h3>
                    <span className="text-[12px] md:text-[14px] xl:text-[16px] text-blue-500">
                      查看全部
                    </span>
                  </div>
                  <div className="space-y-[12px] md:space-y-[16px] xl:space-y-[20px]">
                    {[
                      {
                        title: "商品名称 A",
                        desc: "这是商品的简要描述",
                        price: "¥99.00",
                      },
                      {
                        title: "商品名称 B",
                        desc: "这是商品的简要描述",
                        price: "¥199.00",
                      },
                      {
                        title: "商品名称 C",
                        desc: "这是商品的简要描述",
                        price: "¥299.00",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-[8px] md:p-[12px] xl:p-[16px] rounded-lg hover:bg-gray-50"
                      >
                        <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] xl:w-[80px] xl:h-[80px] bg-gray-200 rounded-lg flex-shrink-0"></div>
                        <div className="ml-[12px] md:ml-[16px] xl:ml-[20px] flex-1 min-w-0">
                          <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium text-gray-900 truncate">
                            {item.title}
                          </p>
                          <p className="text-[12px] md:text-[14px] xl:text-[16px] text-gray-500 truncate">
                            {item.desc}
                          </p>
                          <p className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-red-500 mt-[4px]">
                            {item.price}
                          </p>
                        </div>
                        <button
                          onClick={(e) => handleBuyClick(e, item)}
                          className="px-[12px] py-[6px] md:px-[14px] md:py-[8px] xl:px-[16px] xl:py-[10px] bg-blue-500 text-white text-[12px] md:text-[14px] xl:text-[16px] rounded-[12px] ml-[8px] md:ml-[12px] xl:ml-[16px]"
                        >
                          购买
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="py-[8px] md:py-[12px] xl:py-[16px]">
                <div className="bg-white rounded-2xl p-[16px] md:p-[20px] xl:p-[24px] shadow-sm">
                  <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-gray-900 mb-[12px] md:mb-[16px] xl:mb-[20px]">
                    公告信息
                  </h3>
                  <div className="space-y-[8px] md:space-y-[12px] xl:space-y-[16px]">
                    <div className="flex items-start">
                      <span className="text-red-500 text-[12px] md:text-[14px] xl:text-[16px] bg-red-50 px-[6px] py-[2px] md:px-[8px] md:py-[4px] xl:px-[10px] xl:py-[6px] rounded mr-[8px] md:mr-[12px] xl:mr-[16px]">
                        重要
                      </span>
                      <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-600">
                        系统升级维护通知
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 text-[12px] md:text-[14px] xl:text-[16px] bg-blue-50 px-[6px] py-[2px] md:px-[8px] md:py-[4px] xl:px-[10px] xl:py-[6px] rounded mr-[8px] md:mr-[12px] xl:mr-[16px]">
                        公告
                      </span>
                      <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-600">
                        新功能上线，欢迎体验
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-[8px] md:py-[12px] xl:py-[16px] hidden xl:block">
                <div className="bg-white rounded-2xl p-[16px] md:p-[20px] xl:p-[24px] shadow-sm">
                  <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-gray-900 mb-[12px] md:mb-[16px] xl:mb-[20px]">
                    快捷入口
                  </h3>
                  <div className="grid grid-cols-2 gap-[12px] md:gap-[16px] xl:gap-[20px]">
                    {["我的订单", "优惠券", "积分商城", "联系客服"].map(
                      (item, index) => (
                        <button
                          key={index}
                          className="p-[12px] md:p-[16px] xl:p-[20px] bg-gray-50 rounded-lg text-[14px] md:text-[16px] xl:text-[18px] text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <nav className="flex-shrink-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-4 py-[8px] md:py-[10px] xl:py-[12px]">
          {[
            { id: "home", icon: "🏠", label: "首页" },
            { id: "discover", icon: "🔍", label: "发现" },
            { id: "message", icon: "💬", label: "消息" },
            { id: "profile", icon: "👤", label: "我的" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-[4px] ${
                activeTab === item.id ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <span className="text-[18px] md:text-[20px] xl:text-[24px]">
                {item.icon}
              </span>
              <span className="text-[12px] md:text-[14px] xl:text-[16px] mt-[2px]">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
      <DeviceInfo />
      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-2xl w-[280px] md:w-[360px] xl:w-[440px] p-[20px] md:p-[24px] xl:p-[32px] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-[16px] md:mb-[20px] xl:mb-[24px]">
              <h3 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold text-gray-900">
                确认购买
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-[4px] md:p-[6px] xl:p-[8px] rounded-[12px] hover:bg-gray-100"
              >
                <svg
                  className="w-[20px] md:w-[22px] xl:w-[24px] h-[20px] md:h-[22px] xl:h-[24px] text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center p-[12px] md:p-[16px] xl:p-[20px] bg-gray-50 rounded-xl mb-[16px] md:mb-[20px] xl:mb-[24px]">
              <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] xl:w-[88px] xl:h-[88px] bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="ml-[12px] md:ml-[16px] xl:ml-[20px] flex-1 min-w-0">
                <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium text-gray-900 truncate">
                  {selectedProduct.title}
                </p>
                <p className="text-[12px] md:text-[14px] xl:text-[16px] text-gray-500 truncate">
                  {selectedProduct.desc}
                </p>
                <p className="text-[16px] md:text-[18px] xl:text-[22px] font-bold text-red-500 mt-[4px]">
                  {selectedProduct.price}
                </p>
              </div>
            </div>

            <div className="space-y-[12px] md:space-y-[14px] xl:space-y-[16px]">
              <div className="flex items-center justify-between">
                <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-600">
                  购买数量
                </span>
                <div className="flex items-center">
                  <button className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] xl:w-[36px] xl:h-[36px] bg-gray-100 rounded-lg flex items-center justify-center text-[16px] md:text-[18px] xl:text-[20px]">
                    -
                  </button>
                  <span className="mx-[12px] md:mx-[16px] xl:mx-[20px] text-[14px] md:text-[16px] xl:text-[18px]">
                    1
                  </span>
                  <button className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] xl:w-[36px] xl:h-[36px] bg-gray-100 rounded-lg flex items-center justify-center text-[16px] md:text-[18px] xl:text-[20px]">
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-600">
                  配送方式
                </span>
                <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-900">
                  快递包邮
                </span>
              </div>
            </div>

            <div className="flex gap-[12px] md:gap-[16px] xl:gap-[20px] mt-[20px] md:mt-[24px] xl:mt-[32px]">
              <button
                onClick={handleCloseModal}
                className="flex-1 py-[10px] md:py-[12px] xl:py-[14px] border border-gray-300 rounded-xl text-[14px] md:text-[16px] xl:text-[18px] text-gray-700 hover:bg-gray-50"
              >
                取消
              </button>
              <button className="flex-1 py-[10px] md:py-[12px] xl:py-[14px] bg-blue-500 rounded-xl text-white text-[14px] md:text-[16px] xl:text-[18px] font-medium hover:bg-blue-600">
                确认购买
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
