import { useState, useEffect } from "react";
import PortraitLayout from "./PortraitLayout";
import LandscapeLayout from "./LandscapeLayout";
import DeviceInfo from "../components/DeviceInfo";
import {
  isGameCenter as isGameCenterFn,
  isLdqApp as isLdqAppFn,
  isSdk as isSdkFn,
} from "@cz/web-clients-sdk";

function PageLayout({
  activeTab,
  onTabChange,
  showModal,
  selectedProduct,
  onBuyClick,
  onCloseModal,
  onTestPageClick,
  products,
}) {
  const getContainerWidth = () => {
    return Math.max(
      document.documentElement.clientWidth,
      document.body.clientWidth,
      window.innerWidth
    );
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? getContainerWidth() : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getContainerWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isGameCenter = isGameCenterFn();
  const isLdqApp = isLdqAppFn();
  const isSdk = isSdkFn();

  let shouldUseLandscape;
  if (isGameCenter && !isLdqApp && !isSdk) {
    shouldUseLandscape = true;
  } else if (isLdqApp || isSdk) {
    shouldUseLandscape = false;
  } else {
    shouldUseLandscape = windowWidth >= 764;
  }

  // gameCenter 环境下使用横版，但侧边栏在 640px 及以上显示
  // 其他环境使用竖版
  return (
    <>
      {shouldUseLandscape ? (
        <LandscapeLayout
          activeTab={activeTab}
          onTabChange={onTabChange}
          showModal={showModal}
          selectedProduct={selectedProduct}
          onBuyClick={onBuyClick}
          onCloseModal={onCloseModal}
          products={products}
        />
      ) : (
        <PortraitLayout
          activeTab={activeTab}
          onTabChange={onTabChange}
          showModal={showModal}
          selectedProduct={selectedProduct}
          onBuyClick={onBuyClick}
          onCloseModal={onCloseModal}
          onTestPageClick={onTestPageClick}
          products={products}
        />
      )}
      <DeviceInfo />
    </>
  );
}

export default PageLayout;
