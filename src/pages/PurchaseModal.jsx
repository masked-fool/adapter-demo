import { useState, useRef, useEffect } from "react";

function PurchaseModal({ showModal, selectedProduct, onClose }) {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
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

  if (!showModal || !selectedProduct) {
    return null;
  }

  return (
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
            onClick={onClose}
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
            onClick={onClose}
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
  );
}

export default PurchaseModal;
