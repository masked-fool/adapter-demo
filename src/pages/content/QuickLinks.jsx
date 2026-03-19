function QuickLinks() {
  return (
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
  );
}

export default QuickLinks;
