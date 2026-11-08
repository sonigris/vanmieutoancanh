import React, { useState } from 'react';
import { Landmark, Map, BookOpen, MessageSquare, Info, Menu, X, CheckCircle2 } from 'lucide-react';

export type ScreenType = 'home' | 'map' | 'detail' | 'about';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  visitedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  visitedCount,
  totalCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as ScreenType, label: 'Trang chủ', icon: Landmark },
    { id: 'map' as ScreenType, label: 'Sơ đồ tham quan (15 điểm)', icon: Map },
    { id: 'detail' as ScreenType, label: 'Chi tiết địa điểm', icon: BookOpen },
    { id: 'about' as ScreenType, label: 'Nguồn & Giới thiệu', icon: Info },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#8B1E1E] text-[#FAF6F0] shadow-md border-b-2 border-[#D4A346]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#8B1E1E] border-2 border-[#D4A346] flex items-center justify-center shadow-inner font-serif-culture font-bold text-xl group-hover:scale-105 transition-transform">
              VM
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif-culture text-xl sm:text-2xl font-bold tracking-wide text-[#F7E5A9]">
                  Văn Miếu Toàn Cảnh
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold bg-[#661010] text-[#F7E5A9] rounded border border-[#D4A346]/40">
                  Di tích Quốc gia Đặc biệt
                </span>
              </div>
              <p className="text-xs text-[#F3EBDD]/80 tracking-wider">
                Tham quan ảo Di tích Văn Miếu – Quốc Tử Giám Hà Nội
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#661010] text-[#F7E5A9] border border-[#D4A346]/60 shadow-sm'
                      : 'text-[#FAF6F0]/90 hover:bg-[#A32828] hover:text-[#FFFFFF]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4A346]' : 'text-[#F7E5A9]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Progress Indicator & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Tour Progress Badge */}
            <button
              onClick={() => handleNavClick('map')}
              title="Tiến độ tham quan di tích"
              className="flex items-center space-x-2 bg-[#661010] px-3 py-1.5 rounded-full border border-[#D4A346]/50 text-xs text-[#F7E5A9] hover:border-[#D4A346] transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-[#D4A346]" />
              <span className="hidden sm:inline">Tiến độ:</span>
              <span className="font-bold text-[#FFFFFF]">{visitedCount}/{totalCount}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#FAF6F0] hover:bg-[#661010] focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#701414] border-t border-[#D4A346]/30 px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#520C0C] text-[#F7E5A9] border-l-4 border-[#D4A346]'
                    : 'text-[#FAF6F0] hover:bg-[#8B1E1E]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#D4A346]' : 'text-[#F7E5A9]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
