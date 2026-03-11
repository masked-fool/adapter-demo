import { useState } from 'react'
import ScaleText from './components/ScaleText'

function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-[16px]">
      <h1 className="text-[24px] font-bold mb-[16px]">小容器字体测试</h1>
      
      <section className="mb-[24px]">
        <h2 className="text-[18px] font-semibold mb-[12px]">正常容器 (宽度足够)</h2>
        <div className="bg-white p-[16px] rounded-xl">
          <p className="text-[14px]">正常文字：这是一段正常的文字</p>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-[18px] font-semibold mb-[12px]">小容器测试 - 未使用 ScaleText</h2>
        
        <div className="space-y-[16px]">
          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 80px - 14px 文字</p>
            <div className="w-[80px] text-[14px] bg-gray-50 p-[8px] rounded">
              这是一段很长的文字会超出容器
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 60px - 14px 文字</p>
            <div className="w-[60px] text-[14px] bg-gray-50 p-[8px] rounded">
              这是一段很长的文字会超出容器
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-[18px] font-semibold mb-[12px]">使用 ScaleText 组件 - 红色边框为已触发缩小</h2>
        
        <div className="space-y-[16px]">
          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 80px - ScaleText(14px)</p>
            <div className="w-[80px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={14}>这是一段很长的文字会超出容器</ScaleText>
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 60px - ScaleText(14px)</p>
            <div className="w-[60px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={14}>这是一段很长的文字会超出容器</ScaleText>
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 50px - ScaleText(14px)</p>
            <div className="w-[50px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={14}>这是一段很长的文字</ScaleText>
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 40px - ScaleText(14px)</p>
            <div className="w-[40px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={14}>测试文字</ScaleText>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-[18px] font-semibold mb-[12px]">更小字体测试 - 10px</h2>
        
        <div className="space-y-[16px]">
          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 80px - 原始 10px（未处理）</p>
            <div className="w-[80px] text-[10px] bg-gray-50 p-[8px] rounded">
              这是一段很长的文字会超出容器
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 50px - 原始 10px（未处理）</p>
            <div className="w-[50px] text-[10px] bg-gray-50 p-[8px] rounded">
              这是一段很长的文字
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 80px - ScaleText(10px)</p>
            <div className="w-[80px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={10}>这是一段很长的文字会超出容器</ScaleText>
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 50px - ScaleText(10px)</p>
            <div className="w-[50px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={10}>这是一段很长的文字</ScaleText>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-[18px] font-semibold mb-[12px]">超小容器测试 - 6px</h2>
        
        <div className="space-y-[16px]">
          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 60px - 原始 6px（未处理）</p>
            <div className="w-[60px] text-[6px] bg-gray-50 p-[8px] rounded">
              这是一段很长的文字
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 40px - 原始 6px（未处理）</p>
            <div className="w-[40px] text-[6px] bg-gray-50 p-[8px] rounded">
              测试文字
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 60px - ScaleText(6px)</p>
            <div className="w-[60px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={6}>这是一段很长的文字</ScaleText>
            </div>
          </div>

          <div className="bg-white p-[12px] rounded-xl">
            <p className="text-[14px] font-medium mb-[8px]">宽度 40px - ScaleText(6px)</p>
            <div className="w-[40px] bg-blue-50 p-[8px] rounded">
              <ScaleText size={6}>测试文字</ScaleText>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestPage
