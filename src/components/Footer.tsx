import React from 'react';
import { ScreenType } from './Navbar.tsx';
import { Landmark, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2C1810] text-[#FAF6F0] border-t-4 border-[#D4A346] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Brand & Introduction */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#8B1E1E] font-serif-culture font-bold text-lg flex items-center justify-center border border-[#D4A346]">
                VM
              </div>
              <div>
                <span className="font-serif-culture text-xl font-bold text-[#F7E5A9]">
                  Văn Miếu Toàn Cảnh
                </span>
                <p className="text-xs text-[#FAF6F0]/70">
                  Tham quan ảo Di tích Quốc gia Đặc biệt
                </p>
              </div>
            </div>
            <p className="text-xs text-[#F3EBDD]/80 leading-relaxed max-w-sm">
              Ứng dụng trải nghiệm văn hóa số hóa tôn vinh quần thể Văn Miếu – Quốc Tử Giám Hà Nội, cái nôi của nền đại học Đại Việt và biểu tượng đạo học ngàn năm.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-culture font-bold text-sm text-[#F7E5A9] uppercase tracking-wider">
              Điều hướng màn hình
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FAF6F0]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F7E5A9] transition-colors cursor-pointer"
                >
                  1. Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('map')}
                  className="hover:text-[#F7E5A9] transition-colors cursor-pointer"
                >
                  2. Sơ đồ tham quan (15 điểm dừng)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('detail')}
                  className="hover:text-[#F7E5A9] transition-colors cursor-pointer"
                >
                  3. Chi tiết & Thuyết minh địa điểm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F7E5A9] transition-colors cursor-pointer"
                >
                  4. Nguồn tư liệu & Giới thiệu
                </button>
              </li>
            </ul>
          </div>

          {/* Historical Quote & Certification */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-culture font-bold text-sm text-[#F7E5A9] uppercase tracking-wider">
              Khắc ghi lời vàng bia đá
            </h4>
            <blockquote className="text-xs italic text-[#F3EBDD]/90 border-l-2 border-[#D4A346] pl-3 py-1 leading-relaxed">
              "Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp."
            </blockquote>
            <p className="text-[11px] text-[#D4A346]">
              — Trích Văn bia Tiến sĩ khoa thi 1442 (Thân Nhân Trung)
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-stone-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2">
          <p>© 2026 Văn Miếu Toàn Cảnh – Ứng dụng tham quan văn hóa phi thương mại.</p>
          <div className="flex items-center space-x-1 text-[#F7E5A9]/80">
            <span>Bảo tồn & phát huy di sản văn hóa Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
