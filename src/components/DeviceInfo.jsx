import { useState, useLayoutEffect } from 'react'

function DeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState({ width: 0, height: 0, fontSize: 16 })

  const updateDeviceInfo = () => {
    setDeviceInfo({
      width: window.innerWidth,
      height: window.innerHeight,
      fontSize: parseFloat(getComputedStyle(document.documentElement).fontSize)
    })
  }

  useLayoutEffect(() => {
    updateDeviceInfo()
    window.addEventListener('resize', updateDeviceInfo)
    return () => {
      window.removeEventListener('resize', updateDeviceInfo)
    }
  }, [])

  return (
    <div className="fixed top-[60px] right-[8px] z-[100] bg-black/80 text-white text-[10px] p-[8px] rounded">
      <div>设备宽度: {deviceInfo.width}px</div>
      <div>设备高度: {deviceInfo.height}px</div>
      <div>html font-size: {deviceInfo.fontSize}px</div>
    </div>
  )
}

export default DeviceInfo
