import React from 'react';
import { Compass, BookOpen, MessageSquare, Award, Landmark, MapPin, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { Monument, VIRTUAL_TOUR_STATS } from '../data/monumentsData.ts';

interface HomeScreenProps {
  monuments: Monument[];
  onStartTour: () => void;
  onSelectMonument: (monumentId: string) => void;
  onOpenMap: () => void;
  onOpenAbout: () => void;
  visitedIds: string[];
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  monuments,
  onStartTour,
  onSelectMonument,
  onOpenMap,
  onOpenAbout,
  visitedIds,
}) => {
  // 5 Zones highlights
  const zones = [
    {
      id: 'khu1',
      title: 'Khu vực Tiền án & Nhập đạo',
      desc: 'Từ Tứ Trụ, Hồ Văn, Cổng Văn Miếu đến Cổng Đại Trung. Không gian thanh tịnh mở lối dẫn vào chốn tôn nghiêm.',
      badge: 'Điểm 1 – 4',
      monumentStartId: 'tu-tru',
    },
    {
      id: 'khu2',
      title: 'Khu Thành đức & Sao Khuê',
      desc: 'Nơi tọa lạc Khuê Văn Các uy nghiêm – đỉnh cao tinh hoa kiến trúc và biểu tượng của Thủ đô Hà Nội.',
      badge: 'Điểm 5',
      monumentStartId: 'khue-van-cac',
    },
    {
      id: 'khu3',
      title: 'Khu Vườn Bia & Giếng Thiên Quang',
      desc: 'Nơi hội tụ Giếng Thiên Quang và 82 tấm Bia Tiến sĩ triều Hậu Lê – Di sản Tư liệu Thế giới của UNESCO.',
      badge: 'Điểm 6 – 7',
      monumentStartId: 'vuon-bia-tien-si',
    },
    {
      id: 'khu4',
      title: 'Khu Đại Thành thờ tự',
      desc: 'Gồm Cửa Đại Thành, Sân Đại Bái, Tòa Đại Bái Đường và Điện Đại Thành thờ phụng Đức Khổng Tử và Tiên hiền.',
      badge: 'Điểm 8 – 11',
      monumentStartId: 'dien-dai-thanh',
    },
    {
      id: 'khu5',
      title: 'Khu Thái Học (Quốc Tử Giám)',
      desc: 'Trường đại học đầu tiên của Việt Nam, nơi tôn vinh Thầy giáo Chu Văn An cùng ba vị minh quân khởi lập.',
      badge: 'Điểm 12 – 15',
      monumentStartId: 'nha-tien-duong-thai-hoc',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#661010] via-[#8B1E1E] to-[#4A2E1B] text-[#FAF6F0] rounded-b-3xl shadow-xl border-b-4 border-[#D4A346]">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F7E5A9_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#FAF6F0]/10 border border-[#D4A346]/60 backdrop-blur-sm text-xs sm:text-sm text-[#F7E5A9]">
                <ShieldCheck className="w-4 h-4 text-[#D4A346]" />
                <span>Tham quan ảo Di tích Quốc gia Đặc biệt</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-culture font-bold tracking-tight text-[#FAF6F0] leading-tight">
                Văn Miếu Toàn Cảnh
              </h1>

              <p className="text-base sm:text-xl text-[#F3EBDD] font-light leading-relaxed max-w-2xl">
                Khám phá quần thể di tích <strong>Văn Miếu – Quốc Tử Giám</strong> – trường đại học đầu tiên của Việt Nam, biểu tượng đỉnh cao của đạo học và tinh hoa trí tuệ Thăng Long – Hà Nội ngàn năm văn hiến qua hành trình 15 điểm dừng kèm thuyết minh giọng nói.
              </p>

              {/* Tour stats badge row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#520C0C]/80 border border-[#D4A346]/40 p-3 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold font-serif-culture text-[#F7E5A9]">
                    {VIRTUAL_TOUR_STATS.totalMonuments}
                  </div>
                  <div className="text-xs text-[#FAF6F0]/80">Điểm dừng trục thần đạo</div>
                </div>
                <div className="bg-[#520C0C]/80 border border-[#D4A346]/40 p-3 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold font-serif-culture text-[#F7E5A9]">
                    82
                  </div>
                  <div className="text-xs text-[#FAF6F0]/80">Bia Tiến sĩ (1.304 danh nhân)</div>
                </div>
                <div className="bg-[#520C0C]/80 border border-[#D4A346]/40 p-3 rounded-lg col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold font-serif-culture text-[#F7E5A9]">
                    950+
                  </div>
                  <div className="text-xs text-[#FAF6F0]/80">Năm lịch sử (từ năm 1070)</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onStartTour}
                  className="px-6 py-3.5 bg-[#D4A346] hover:bg-[#C49A5A] text-[#2C1810] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 text-base cursor-pointer"
                >
                  <Compass className="w-5 h-5 text-[#2C1810]" />
                  <span>Bắt đầu tham quan theo trình tự</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={onOpenMap}
                  className="px-5 py-3.5 bg-[#FAF6F0]/15 hover:bg-[#FAF6F0]/25 text-[#FAF6F0] border border-[#D4A346]/50 font-medium rounded-lg transition-colors flex items-center space-x-2 text-base cursor-pointer"
                >
                  <MapPin className="w-5 h-5 text-[#F7E5A9]" />
                  <span>Sơ đồ 15 điểm dừng</span>
                </button>

                <button
                  onClick={onOpenAbout}
                  className="px-5 py-3.5 bg-[#661010] hover:bg-[#520C0C] text-[#F7E5A9] border border-[#D4A346]/40 font-medium rounded-lg transition-colors flex items-center space-x-2 text-base cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-[#D4A346]" />
                  <span>Nguồn tư liệu & Giới thiệu</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border-4 border-[#D4A346] shadow-2xl bg-[#4A2E1B]">
                <img
                  src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80"
                  alt="Khuê Văn Các Văn Miếu Quốc Tử Giám"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#8B1E1E] text-[#F7E5A9] rounded border border-[#D4A346]/40 mb-1">
                    Biểu tượng Thủ đô Hà Nội
                  </span>
                  <h3 className="text-xl font-bold font-serif-culture text-[#FAF6F0]">
                    Khuê Văn Các (Gác Sao Khuê)
                  </h3>
                  <p className="text-xs text-[#F3EBDD]/90 mt-1">
                    Công trình kiến trúc gỗ hai tầng tám mái dựng năm 1805, đỉnh cao kết tinh văn hiến dân tộc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Quotation Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFFFF] border-2 border-[#D4A346]/40 rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-[#D4A346]/10 text-9xl font-serif-culture select-none pointer-events-none">
            “
          </div>
          <div className="text-center space-y-3 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-bold">
              Danh ngôn lịch sử khắc trên Bia Tiến sĩ năm 1484
            </span>
            <blockquote className="font-serif-culture text-lg sm:text-2xl text-[#2C1810] italic font-semibold leading-relaxed">
              "Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp."
            </blockquote>
            <p className="text-xs sm:text-sm text-[#4A2E1B] font-medium pt-1">
              — Đông các Đại học sĩ <strong>Thân Nhân Trung</strong> (Văn bia khoa thi Nhâm Tuất 1442)
            </p>
          </div>
        </div>
      </section>

      {/* 5 Spatial Zones of the Relic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif-culture font-bold text-[#8B1E1E]">
            Hành Trình 5 Phân Khu Dọc Trục Thần Đạo
          </h2>
          <p className="text-sm sm:text-base text-[#4A2E1B] max-w-2xl mx-auto">
            Văn Miếu – Quốc Tử Giám được quy hoạch đăng đối dọc theo một trục thần đạo duy nhất từ ngoài vào trong, gồm 5 khoảng sân vườn ngăn cách bởi các cổng tường cổ kính.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, idx) => (
            <div
              key={zone.id}
              className="bg-[#FFFFFF] border border-[#EADBCE] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#D4A346] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#8B1E1E] text-[#F7E5A9] font-serif-culture font-bold text-sm flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F3EBDD] text-[#8B1E1E] border border-[#D4A346]/30">
                    {zone.badge}
                  </span>
                </div>
                <h3 className="font-serif-culture font-bold text-lg text-[#2C1810]">
                  {zone.title}
                </h3>
                <p className="text-sm text-[#4A2E1B]/90 leading-relaxed">
                  {zone.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3EBDD]">
                <button
                  onClick={() => onSelectMonument(zone.monumentStartId)}
                  className="text-xs font-semibold text-[#8B1E1E] hover:text-[#661010] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Khám phá phân khu này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Web Speech Narration Feature Card */}
          <div className="bg-gradient-to-br from-[#FAF6F0] to-[#F3EBDD] border-2 border-dashed border-[#D4A346] rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#D4A346] text-[#2C1810] flex items-center justify-center font-bold">
                ♪
              </div>
              <h3 className="font-serif-culture font-bold text-lg text-[#8B1E1E]">
                Thuyết Minh Giọng Nói Trình Duyệt
              </h3>
              <p className="text-sm text-[#4A2E1B]/90">
                Toàn bộ 15 điểm dừng đều được tích hợp bài thuyết minh âm thanh bằng Web Speech API (speechSynthesis) tiếng Việt, hỗ trợ phát, tạm dừng, tiếp tục và dừng lại.
              </p>
            </div>
            <div className="pt-4 mt-4">
              <button
                onClick={() => onSelectMonument('tu-tru')}
                className="w-full py-2.5 px-4 bg-[#8B1E1E] text-[#F7E5A9] hover:bg-[#661010] rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <span>Nghe thuyết minh điểm đầu tiên</span>
                <ArrowRight className="w-4 h-4 text-[#D4A346]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* List of 15 Monuments Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D4A346]/40 pb-4">
          <div>
            <h2 className="text-2xl font-serif-culture font-bold text-[#8B1E1E]">
              15 Điểm Đến Trong Hành Trình
            </h2>
            <p className="text-xs sm:text-sm text-[#4A2E1B]">
              Được sắp xếp chuẩn mực theo trình tự tham quan trục thần đạo
            </p>
          </div>
          <button
            onClick={onOpenMap}
            className="self-start sm:self-auto text-xs sm:text-sm font-semibold text-[#8B1E1E] hover:text-[#661010] flex items-center space-x-1 cursor-pointer"
          >
            <span>Mở sơ đồ & tìm kiếm toàn bộ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {monuments.slice(0, 6).map((m) => {
            const isVisited = visitedIds.includes(m.id);
            return (
              <div
                key={m.id}
                onClick={() => onSelectMonument(m.id)}
                className="bg-[#FFFFFF] border border-[#EADBCE] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#D4A346] transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-[#2C1810]">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#8B1E1E] text-[#F7E5A9] text-xs font-serif-culture font-bold px-2 py-0.5 rounded shadow">
                    #{m.order}
                  </div>
                  {isVisited && (
                    <div className="absolute top-2 right-2 bg-emerald-700 text-[#FAF6F0] text-xs font-medium px-2 py-0.5 rounded flex items-center space-x-1 shadow">
                      <CheckCircle className="w-3 h-3" />
                      <span>Đã ghé thăm</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <span className="text-[11px] text-[#F7E5A9] font-medium">
                      {m.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-serif-culture font-bold text-base text-[#2C1810] group-hover:text-[#8B1E1E] transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-xs text-[#4A2E1B]/80 line-clamp-2 mt-1">
                      {m.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs text-[#8B1E1E] font-medium border-t border-[#F3EBDD]">
                    <span>Xem chi tiết & thuyết minh</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onOpenMap}
            className="px-6 py-2.5 bg-[#FAF6F0] border-2 border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-[#FAF6F0] font-semibold rounded-lg text-sm transition-colors cursor-pointer"
          >
            Xem tất cả 15 địa điểm tham quan →
          </button>
        </div>
      </section>
    </div>
  );
};
