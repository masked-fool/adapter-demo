import BottomNav from "./content/BottomNav";
import HeroSection from "./content/HeroSection";
import QuickActions from "./content/QuickActions";
import HotProducts from "./content/HotProducts";
import Announcements from "./content/Announcements";
import QuickLinks from "./content/QuickLinks";

function HomePage({ activeTab, onTabChange, onBuyClick, products }) {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <div className="px-[16px] md:px-[24px] xl:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px] md:gap-[20px] xl:gap-[24px]">
          <HotProducts products={products} onBuyClick={onBuyClick} />
          <Announcements />
          <QuickLinks />
        </div>
      </div>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </>
  );
}

export default HomePage;
