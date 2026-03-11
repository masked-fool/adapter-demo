import { useState, useEffect, useRef } from 'react'

function ScaleText({ children, size = 14, className = '', minSize = 12 }) {
  const [scale, setScale] = useState(1)
  const textRef = useRef(null)

  const sizeClass = `text-[${size}px]`

  useEffect(() => {
    const checkFontSize = () => {
      if (textRef.current) {
        const computedStyle = window.getComputedStyle(textRef.current)
        const actualFontSize = parseFloat(computedStyle.fontSize)
        
        if (actualFontSize > size) {
          const newScale = size / actualFontSize
          setScale(newScale)
          textRef.current.style.setProperty('--scale', newScale.toString())
        } else {
          setScale(1)
          textRef.current.style.setProperty('--scale', '1')
        }
      }
    }

    checkFontSize()
    
    const timer = setTimeout(checkFontSize, 100)
    
    window.addEventListener('resize', checkFontSize)
    return () => {
      window.removeEventListener('resize', checkFontSize)
      clearTimeout(timer)
    }
  }, [size, minSize])

  return (
    <span 
      ref={textRef}
      className={`
        ${sizeClass} 
        ${className}
        inline-block
        scale-[var(--scale)]
        origin-left
        ${scale < 1 ? 'text-red-500 font-bold border-2 border-dashed border-red-500 rounded p-0.5' : ''}
      `}
      style={{ 
        transform: 'scale(var(--scale))',
      }}
    >
      {children}
      {scale < 1 && (
        <span className="text-[10px] text-red-500 font-normal ml-1">
          (缩小 {scale.toFixed(2)}x)
        </span>
      )}
    </span>
  )
}

export default ScaleText
