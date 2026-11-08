import React from 'react';
import {
  BookOpen,
  ShieldCheck,
  ExternalLink,
  Info,
  Calendar,
  Heart,
  Landmark,
  FileText,
  MapPin,
  Clock,
  Ticket
} from 'lucide-react';
import { GENERAL_SOURCES, HistoricalSource } from '../data/monumentsData.ts';

export const AboutScreen: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-16">
      {/* Page Header */}
      <div className="bg-[#FFFFFF] border-2 border-[#D4A346]/40 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3 text-left">
        <div className="flex items-center space-x-2 text-[#8B1E1E]">
          <BookOpen className="w-5 h-5 text-[#8B1E1E]" />
          <span className="text-xs font-bold uppercase tracking-wider">Tư liệu & Pháp lý</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif-culture font-bold text-[#2C1810]">
          Nguồn Tư Liệu & Giới Thiệu Dự Án
        </h1>
        <p className="text-sm sm:text-base text-[#4A2E1B]/80 leading-relaxed">
          Minh bạch nguồn gốc tư liệu lịch sử, hồ sơ di sản chính thống và thông tin bản quyền của ứng dụng tham quan ảo <strong>Văn Miếu Toàn Cảnh</strong>.
        </p>
      </div>

      {/* Part 1: List of Verified Sources */}
      <section className="space-y-4 text-left">
        <div className="border-b border-[#EADBCE] pb-2 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif-culture font-bold text-[#8B1E1E] flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-[#D4A346]" />
            <span>1. Danh Sách Nguồn Tham Khảo Đã Kiểm Chứng</span>
          </h2>
          <span className="text-xs text-[#8B1E1E] font-semibold bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#D4A346]/40">
            {GENERAL_SOURCES.length} nguồn chính thống
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#4A2E1B]">
          Toàn bộ 15 địa điểm, các niên đại lịch sử và ý nghĩa văn hóa trong ứng dụng được biên soạn chặt chẽ dựa trên các bộ chính sử quốc gia và văn bản xếp hạng di sản chính thức:
        </p>

        <div className="space-y-4">
          {GENERAL_SOURCES.map((source: HistoricalSource, idx) => (
            <div
              key={source.id}
              className="bg-[#FFFFFF] border border-[#EADBCE] rounded-xl p-5 shadow-sm hover:border-[#D4A346] transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-[#8B1E1E] text-[#F7E5A9] text-xs font-bold font-serif-culture flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="font-serif-culture font-bold text-base sm:text-lg text-[#2C1810]">
                    {source.title}
                  </h3>
                </div>

                <span className="self-start sm:self-auto px-2.5 py-1 rounded text-xs font-medium bg-[#F3EBDD] text-[#8B1E1E] border border-[#D4A346]/30">
                  {source.type}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A2E1B] bg-[#FAF6F0] p-3 rounded-lg">
                <div>
                  <strong className="text-[#8B1E1E]">Tác giả / Cơ quan ban hành:</strong> {source.authorOrIssuer}
                </div>
                <div>
                  <strong className="text-[#8B1E1E]">Thời kỳ / Niên hiệu:</strong> {source.periodOrYear}
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-[#8B1E1E]">Đường dẫn / Thư tịch:</strong>{' '}
                  <span className="font-mono text-[11px] text-[#2C1810] break-all">{source.urlOrCitation}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-stone-500">
                  <Calendar className="w-3.5 h-3.5 text-[#D4A346]" />
                  <span>Ngày truy cập đối chiếu: <strong>{source.accessedDate}</strong></span>
                </div>
              </div>

              <p className="text-xs text-[#4A2E1B]/90 leading-relaxed">
                {source.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Project Information & Educational Purpose */}
      <section className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-left">
        <div className="border-b border-[#F3EBDD] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif-culture font-bold text-[#8B1E1E] flex items-center space-x-2">
            <Info className="w-6 h-6 text-[#8B1E1E]" />
            <span>2. Thông Tin Dự Án & Mục Đích Thực Hiện</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif-culture font-bold text-base text-[#2C1810]">
              Tôn chỉ và Sứ mệnh
            </h3>
            <p className="text-xs sm:text-sm text-[#4A2E1B] leading-relaxed">
              <strong>Văn Miếu Toàn Cảnh</strong> là sản phẩm tham quan ảo di tích lịch sử trực tuyến tôn vinh di tích quốc gia đặc biệt Văn Miếu – Quốc Tử Giám.
            </p>
            <p className="text-xs sm:text-sm text-[#4A2E1B] leading-relaxed">
              Mục tiêu nhằm tôn vinh truyền thống hiếu học, tôn sư trọng đạo và đạo lý ngàn năm của dân tộc Việt Nam, giúp học sinh, sinh viên và du khách bốn phương dễ dàng trải nghiệm trọn vẹn 15 điểm dừng dọc trục thần đạo, lắng nghe thuyết minh giọng nói tiếng Việt tự động mà không cần kết nối mạng bên ngoài hay cài đặt phức tạp.
            </p>
          </div>

          <div className="space-y-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#D4A346]/40">
            <h3 className="font-serif-culture font-bold text-base text-[#8B1E1E]">
              Thông Tin Sản Phẩm & Kỹ Thuật
            </h3>
            <ul className="text-xs sm:text-sm text-[#4A2E1B] space-y-2">
              <li>
                <strong>Tên sản phẩm:</strong> Website tham quan ảo Văn Miếu Toàn Cảnh
              </li>
              <li>
                <strong>Thể loại:</strong> Ứng dụng số hóa di sản văn hóa phi lợi nhuận
              </li>
              <li>
                <strong>Đối tượng di tích:</strong> Di tích quốc gia đặc biệt Văn Miếu – Quốc Tử Giám (Hà Nội)
              </li>
              <li>
                <strong>Công nghệ:</strong> React, TypeScript, Tailwind CSS, Web Speech API (speechSynthesis tiếng Việt)
              </li>
              <li>
                <strong>Kiến trúc dữ liệu:</strong> Dữ liệu tĩnh xác thực trong file riêng (`src/data/monumentsData.ts`), hoạt động độc lập không phụ thuộc API bên ngoài.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Part 3: Copyright & Image Rights Statement */}
      <section className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-left">
        <div className="border-b border-[#F3EBDD] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif-culture font-bold text-[#8B1E1E] flex items-center space-x-2">
            <FileText className="w-6 h-6 text-[#8B1E1E]" />
            <span>3. Ghi Chú Bản Quyền & Tính Toàn Vẹn Dữ Liệu</span>
          </h2>
        </div>

        <div className="text-xs sm:text-sm text-[#4A2E1B] space-y-3 leading-relaxed">
          <p>
            • <strong>Văn bản và dữ liệu lịch sử:</strong> Các trích dẫn lịch sử từ <em>Đại Việt Sử ký Toàn thư</em>, <em>Khâm định Việt sử Thông giám Cương mục</em> và văn bia Tiến sĩ thuộc về kho tàng di sản văn hóa chung của dân tộc Việt Nam.
          </p>
          <p>
            • <strong>Tính xác thực của dữ liệu:</strong> Toàn bộ dữ liệu 15 địa điểm được lưu trữ trong tệp mã nguồn độc lập. Ứng dụng không sử dụng AI chatbot, không suy đoán niên đại, sự kiện hay nhân vật khi chưa có nguồn sử liệu đối chiếu xác thực.
          </p>
          <p>
            • <strong>Quyền sử dụng hình ảnh:</strong> Hình ảnh hiển thị trong ứng dụng được sử dụng cho mục đích nghiên cứu, học tập, giáo dục di sản văn hóa phi lợi nhuận. Tại mỗi địa điểm đều ghi rõ chú thích ảnh và nguồn tư liệu.
          </p>
        </div>
      </section>

      {/* Part 4: Practical Visitor Guide */}
      <section className="bg-gradient-to-r from-[#661010] to-[#8B1E1E] text-[#FAF6F0] rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-[#D4A346] space-y-4 text-left">
        <div className="flex items-center space-x-2 text-[#F7E5A9]">
          <Landmark className="w-6 h-6" />
          <h2 className="text-xl sm:text-2xl font-serif-culture font-bold">
            Trải Nghiệm Thực Tế Tại Di Tích
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#F3EBDD] leading-relaxed">
          Tham quan ảo là bước khởi đầu trực quan. Trân trọng kính mời quý độc giả và du khách ghé thăm trực tiếp di tích để cảm nhận trọn vẹn sự thiêng liêng, trang nghiêm của đất ngàn năm văn hiến:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#520C0C]/80 border border-[#D4A346]/40 p-4 rounded-xl space-y-1">
            <div className="flex items-center space-x-2 text-[#F7E5A9] text-xs font-bold">
              <MapPin className="w-4 h-4 text-[#D4A346]" />
              <span>Địa chỉ</span>
            </div>
            <p className="text-xs text-[#FAF6F0]">
              Số 58 phố Quốc Tử Giám, phường Văn Miếu, quận Đống Đa, TP. Hà Nội
            </p>
          </div>

          <div className="bg-[#520C0C]/80 border border-[#D4A346]/40 p-4 rounded-xl space-y-1">
            <div className="flex items-center space-x-2 text-[#F7E5A9] text-xs font-bold">
              <Clock className="w-4 h-4 text-[#D4A346]" />
              <span>Giờ mở cửa</span>
            </div>
            <p className="text-xs text-[#FAF6F0]">
              Mở cửa tất cả các ngày trong tuần (kể cả Lễ, Tết): 08:00 – 17:00
            </p>
          </div>

          <div className="bg-[#520C0C]/80 border border-[#D4A346]/40 p-4 rounded-xl space-y-1">
            <div className="flex items-center space-x-2 text-[#F7E5A9] text-xs font-bold">
              <Ticket className="w-4 h-4 text-[#D4A346]" />
              <span>Cổng thông tin</span>
            </div>
            <p className="text-xs text-[#FAF6F0]">
              Website chính thức: vanmieu.gov.vn
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
