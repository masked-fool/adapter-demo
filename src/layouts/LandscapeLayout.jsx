import { useState, useEffect } from "react";
import HomePage from "../pages/HomePage";
import PurchaseModal from "../pages/PurchaseModal";
import SideNav from "./SideNav";

function LandscapeLayout({
  activeTab,
  onTabChange,
  showModal,
  selectedProduct,
  onBuyClick,
  onCloseModal,
  products,
}) {
  return (
    <div className="h-screen flex">
      <SideNav activeTab={activeTab} onTabChange={onTabChange} />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <main className="flex-1 overflow-y-auto pb-[16px] md:pb-[20px] xl:pb-[24px]">
          <HomePage
            activeTab={activeTab}
            onTabChange={onTabChange}
            onBuyClick={onBuyClick}
            products={products}
          />
        </main>
      </div>
      <PurchaseModal
        showModal={showModal}
        selectedProduct={selectedProduct}
        onClose={onCloseModal}
      />
    </div>
  );
}

export default LandscapeLayout;
