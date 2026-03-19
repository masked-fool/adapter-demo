import { useState, useLayoutEffect } from "react";
import {
  isGameCenter as isGameCenterFn,
  isLdqApp as isLdqAppFn,
  isSdk as isSdkFn,
} from "@cz/web-clients-sdk";

function DeviceInfo() {
  // 设备信息状态
  const [deviceInfo, setDeviceInfo] = useState({
    windowWidth: 0,
    containerWidth: 0,
    visualViewportWidth: 0,
    scale: 1,
    height: 0,
    fontSize: 16,
    pixelRatio: 1,
  });

  // SDK 环境判断
  const isGameCenter = isGameCenterFn();
  const isLdqApp = isLdqAppFn();
  const isSdk = isSdkFn();

  let shouldUseLandscape;
  if (isGameCenter && !isLdqApp && !isSdk) {
    shouldUseLandscape = true;
  } else if (isLdqApp || isSdk) {
    shouldUseLandscape = false;
  } else {
    shouldUseLandscape = deviceInfo.containerWidth >= 764;
  }

  // 获取实际容器宽度的函数
  const getContainerWidth = () => {
    return Math.max(
      document.documentElement.clientWidth,
      document.body.clientWidth,
      window.innerWidth
    );
  };

  // 获取 visualViewport 信息（用于检测缩放）
  const getVisualViewportInfo = () => {
    if (window.visualViewport) {
      return {
        width: window.visualViewport.width,
        scale: window.visualViewport.scale,
      };
    }
    return { width: window.innerWidth, scale: 1 };
  };

  // 更新设备信息
  const updateDeviceInfo = () => {
    const windowW = window.innerWidth;
    const containerW = getContainerWidth();
    const viewportInfo = getVisualViewportInfo();
    setDeviceInfo({
      windowWidth: windowW,
      containerWidth: containerW,
      visualViewportWidth: viewportInfo.width,
      scale: viewportInfo.scale,
      height: window.innerHeight,
      fontSize: parseFloat(getComputedStyle(document.documentElement).fontSize),
      pixelRatio: window.devicePixelRatio || 1,
    });
  };

  useLayoutEffect(() => {
    updateDeviceInfo();
    window.addEventListener("resize", updateDeviceInfo);
    return () => {
      window.removeEventListener("resize", updateDeviceInfo);
    };
  }, []);

  return (
    <div className="fixed top-[60px] right-[8px] z-[100] bg-black/80 text-white text-[10px] p-[8px] rounded">
      <div>窗口宽度: {deviceInfo.windowWidth}px</div>
      <div>实际容器宽度: {deviceInfo.containerWidth}px</div>
      <div>VisualViewport宽度: {deviceInfo.visualViewportWidth}px</div>
      <div>缩放比例: {deviceInfo.scale}x</div>
      <div>设备高度: {deviceInfo.height}px</div>
      <div>html font-size: {deviceInfo.fontSize}px</div>
      <div>
        像素比: {deviceInfo.pixelRatio}x (
        {deviceInfo.pixelRatio === 1
          ? "1倍屏"
          : deviceInfo.pixelRatio === 2
          ? "2倍屏"
          : deviceInfo.pixelRatio === 3
          ? "3倍屏"
          : `${deviceInfo.pixelRatio}倍屏`}
        )
      </div>
      <div className="mt-[8px] pt-[8px] border-t border-gray-600">
        <div>isGameCenter: {isGameCenter ? "是" : "否"}</div>
        <div>isLdqApp: {isLdqApp ? "是" : "否"}</div>
        <div>isSdk: {isSdk ? "是" : "否"}</div>
        <div className="mt-[4px] pt-[4px] border-t border-gray-600">
          当前布局: {shouldUseLandscape ? "横版" : "竖版"}
        </div>
      </div>
    </div>
  );
}

export default DeviceInfo;
