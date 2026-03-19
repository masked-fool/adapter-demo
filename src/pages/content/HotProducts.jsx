function HotProducts({ products, onBuyClick }) {
  return (
    <section className="py-[8px] md:py-[12px] xl:py-[16px]">
      <div className="bg-white rounded-2xl p-[16px] md:p-[20px] xl:p-[24px] shadow-sm">
        <div className="flex items-center justify-between mb-[12px] md:mb-[16px] xl:mb-[20px]">
          <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-gray-900">
            热门推荐
          </h3>
          <span className="text-[12px] md:text-[14px] xl:text-[16px] text-blue-500">
            查看全部
          </span>
        </div>
        <div className="space-y-[12px] md:space-y-[16px] xl:space-y-[20px]">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-[8px] md:p-[12px] xl:p-[16px] rounded-lg hover:bg-gray-50"
            >
              <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] xl:w-[80px] xl:h-[80px] bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="ml-[12px] md:ml-[16px] xl:ml-[20px] flex-1 min-w-0">
                <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium text-gray-900 truncate">
                  {item.title}
                </p>
                <p className="text-[12px] md:text-[14px] xl:text-[16px] text-gray-500 truncate">
                  {item.desc}
                </p>
                <p className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-red-500 mt-[4px]">
                  {item.price}
                </p>
              </div>
              <button
                onClick={(e) => onBuyClick(e, item)}
                className="px-[12px] py-[6px] md:px-[14px] md:py-[8px] xl:px-[16px] xl:py-[10px] bg-blue-500 text-white text-[12px] md:text-[14px] xl:text-[16px] rounded-[12px] ml-[8px] md:ml-[12px] xl:ml-[16px]"
              >
                购买
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotProducts;
