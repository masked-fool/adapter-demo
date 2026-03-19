function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-[16px] py-[32px] md:px-[24px] md:py-[40px] xl:px-[60px] xl:py-[60px]">
      <div className="text-white">
        <p className="text-[14px] md:text-[16px] xl:text-[18px] opacity-90 mb-[4px]">
          欢迎回来
        </p>
        <h2 className="text-[24px] md:text-[28px] xl:text-[36px] font-bold mb-[8px] xl:mb-[12px]">
          用户名
        </h2>
        <p className="text-[14px] md:text-[16px] xl:text-[20px] opacity-80">
          今日收益 +128.50
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
