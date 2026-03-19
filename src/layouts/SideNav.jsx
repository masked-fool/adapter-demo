function SideNav({ activeTab, onTabChange }) {
  const navItems = [
    { id: "home", icon: "🏠", label: "首页" },
    { id: "discover", icon: "🔍", label: "发现" },
    { id: "message", icon: "💬", label: "消息" },
    { id: "profile", icon: "👤", label: "我的" },
  ];

  return (
    <aside className="md:flex w-[160px] lg:w-[200px] xl:w-[240px] bg-white border-r border-gray-200 flex-col flex-shrink-0">
      <div className="p-[16px] md:p-[20px] lg:p-[24px] border-b border-gray-100">
        <h1 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold text-gray-900">
          我的应用
        </h1>
      </div>
      <nav className="flex-1 py-[12px] md:py-[16px] lg:py-[20px]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center px-[12px] md:px-[16px] lg:px-[20px] xl:px-[24px] py-[8px] md:py-[10px] lg:py-[12px] xl:py-[16px] text-left transition-colors ${
              activeTab === item.id
                ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mr-[8px] md:mr-[10px] lg:mr-[12px] xl:mr-[16px]">
              {item.icon}
            </span>
            <span className="text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
      <div className="p-[10px] md:p-[12px] lg:p-[16px] xl:p-[20px] border-t border-gray-100">
        <div className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] text-gray-400">
          v1.0.0
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
