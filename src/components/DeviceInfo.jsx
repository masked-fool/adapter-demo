import { useState, useLayoutEffect } from "react";

function DeviceInfo() {
  // 设备信息状态，包含宽度、高度、字体大小和像素比
  const [deviceInfo, setDeviceInfo] = useState({
    width: 0,
    height: 0,
    fontSize: 16,
    pixelRatio: 1,
  });

  // 更新设备信息
  const updateDeviceInfo = () => {
    setDeviceInfo({
      width: window.innerWidth,
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
      <div>设备宽度: {deviceInfo.width}px</div>
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
    </div>
  );
}

export default DeviceInfo;
