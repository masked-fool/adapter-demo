function QuickActions() {
  return (
    <section className="px-[16px] py-[16px] md:px-[24px] md:py-[24px] xl:px-[40px] xl:py-[32px]">
      <div className="grid grid-cols-4 gap-[16px] md:gap-[20px] xl:gap-[32px]">
        {[
          { icon: "💰", label: "充值" },
          { icon: "📦", label: "订单" },
          { icon: "❤️", label: "收藏" },
          { icon: "⚙️", label: "设置" },
        ].map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center py-[8px] md:py-[12px] xl:py-[16px]"
          >
            <span className="text-[24px] md:text-[28px] xl:text-[36px] mb-[4px] xl:mb-[8px]">
              {item.icon}
            </span>
            <span className="text-[12px] md:text-[14px] xl:text-[16px] text-gray-600">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuickActions;
