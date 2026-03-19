import { useState } from "react";
import HomePage from "../pages/HomePage";
import PurchaseModal from "../pages/PurchaseModal";

function PortraitLayout({
  activeTab,
  onTabChange,
  showModal,
  selectedProduct,
  onBuyClick,
  onCloseModal,
  products,
  onTestPageClick,
}) {
  return (
    <div className="h-screen flex flex-col relative">
      <header className="bg-white shadow-sm flex-shrink-0">
        <div className="px-[16px] py-[12px] md:px-[24px] md:py-[16px] xl:px-[40px] xl:py-[20px] flex items-center justify-between">
          <h1 className="text-[18px] md:text-[20px] xl:text-[24px] font-bold text-gray-900">
            我的应用
          </h1>
          <div className="flex items-center gap-[8px]">
            <button
              onClick={onTestPageClick}
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
        <HomePage
          activeTab={activeTab}
          onTabChange={onTabChange}
          onBuyClick={onBuyClick}
          products={products}
        />
      </main>

      <PurchaseModal
        showModal={showModal}
        selectedProduct={selectedProduct}
        onClose={onCloseModal}
      />
    </div>
  );
}

export default PortraitLayout;
