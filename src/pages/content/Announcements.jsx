function Announcements() {
  return (
    <section className="py-[8px] md:py-[12px] xl:py-[16px]">
      <div className="bg-white rounded-2xl p-[16px] md:p-[20px] xl:p-[24px] shadow-sm">
        <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-gray-900 mb-[12px] md:mb-[16px] xl:mb-[20px]">
          公告信息
        </h3>
        <div className="space-y-[8px] md:space-y-[12px] xl:space-y-[16px]">
          <div className="flex items-start">
            <span className="text-red-500 text-[12px] md:text-[14px] xl:text-[16px] bg-red-50 px-[6px] py-[2px] md:px-[8px] md:py-[4px] xl:px-[10px] xl:py-[6px] rounded mr-[8px] md:mr-[12px] xl:mr-[16px]">
              重要
            </span>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-600">
              系统升级维护通知
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-500 text-[12px] md:text-[14px] xl:text-[16px] bg-blue-50 px-[6px] py-[2px] md:px-[8px] md:py-[4px] xl:px-[10px] xl:py-[6px] rounded mr-[8px] md:mr-[12px] xl:mr-[16px]">
              公告
            </span>
            <span className="text-[14px] md:text-[16px] xl:text-[18px] text-gray-600">
              新功能上线，欢迎体验
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announcements;
