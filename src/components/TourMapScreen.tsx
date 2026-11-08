import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, CheckCircle2, RotateCcw, AlertTriangle, ArrowRight, Volume2, Eye } from 'lucide-react';
import { Monument } from '../data/monumentsData.ts';

interface TourMapScreenProps {
  monuments: Monument[];
  onSelectMonument: (monumentId: string) => void;
  visitedIds: string[];
  onToggleVisited: (monumentId: string) => void;
  onResetProgress: () => void;
  onMarkAllVisited: () => void;
}

export const TourMapScreen: React.FC<TourMapScreenProps> = ({
  monuments,
  onSelectMonument,
  visitedIds,
  onToggleVisited,
  onResetProgress,
  onMarkAllVisited,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [visitedFilter, setVisitedFilter] = useState<'all' | 'visited' | 'unvisited'>('all');
  const [hoveredMonumentId, setHoveredMonumentId] = useState<string | null>(null);

  // Filtered monuments based on search and zone
  const filteredMonuments = useMemo(() => {
    return monuments.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.hanTu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.meaning.toLowerCase().includes(searchTerm.toLowerCase());

      const matchZone = selectedZone === 'all' || m.zone === selectedZone;

      const isVisited = visitedIds.includes(m.id);
      const matchVisited =
        visitedFilter === 'all' ||
        (visitedFilter === 'visited' && isVisited) ||
        (visitedFilter === 'unvisited' && !isVisited);

      return matchSearch && matchZone && matchVisited;
    });
  }, [monuments, searchTerm, selectedZone, visitedFilter, visitedIds]);

  const progressPercent = Math.round((visitedIds.length / monuments.length) * 100);

  const zonesList = [
    { id: 'all', label: 'Tất cả phân khu' },
    { id: 'khu1', label: 'Khu 1: Tiền án & Nhập đạo (1–4)' },
    { id: 'khu2', label: 'Khu 2: Thành đức & Khuê Văn Các (5)' },
    { id: 'khu3', label: 'Khu 3: Giếng Thiên Quang & Vườn Bia (6–7)' },
    { id: 'khu4', label: 'Khu 4: Đại Thành thờ tự (8–11)' },
    { id: 'khu5', label: 'Khu 5: Quốc Tử Giám / Thái Học (12–15)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header and Tour Progress Bar */}
      <div className="bg-[#FFFFFF] border-2 border-[#D4A346]/40 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#8B1E1E]">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Hành trình trải nghiệm</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif-culture font-bold text-[#2C1810] mt-1">
              Bản Đồ & Sơ Đồ Tham Quan 15 Địa Điểm
            </h1>
            <p className="text-sm text-[#4A2E1B]/80 mt-1">
              Theo dõi lộ trình dọc trục thần đạo lịch sử từ Tứ Trụ đến Khu Thái Học
            </p>
          </div>

          {/* Quick Progress Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onMarkAllVisited}
              className="px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#F3EBDD] text-[#8B1E1E] border border-[#8B1E1E]/40 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Đánh dấu tất cả đã xem
            </button>
            <button
              onClick={onResetProgress}
              className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-[#F3EBDD] rounded-lg transition-colors cursor-pointer"
              title="Đặt lại tiến độ"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-[#4A2E1B]">
              Tiến độ khám phá của bạn: <strong className="text-[#8B1E1E]">{visitedIds.length} / {monuments.length}</strong> địa điểm
            </span>
            <span className="font-bold text-[#8B1E1E]">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-[#F3EBDD] rounded-full overflow-hidden border border-[#D4A346]/30">
            <div
              className="h-full bg-gradient-to-r from-[#D4A346] to-[#8B1E1E] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Explicit Disclaimer as required */}
        <div className="flex items-start space-x-3 bg-[#FAF6F0] border border-[#D4A346]/60 rounded-xl p-3.5 text-xs text-[#4A2E1B]">
          <AlertTriangle className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
          <p>
            <strong>Lưu ý:</strong> Sơ đồ minh họa dưới đây được giản lược nhằm mục đích trực quan hóa trình tự hành trình tham quan ảo theo trục thần đạo truyền thống, <em>không giả định hay thay thế cho bản đồ trắc địa đo đạc chính xác</em>.
          </p>
        </div>
      </div>

      {/* Interactive Tour Diagram (Axis from South to North) */}
      <div className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F3EBDD] pb-3">
          <div>
            <h2 className="text-lg font-serif-culture font-bold text-[#8B1E1E]">
              Sơ Đồ Minh Họa Trục Thần Đạo (Từ Nam sang Bắc)
            </h2>
            <p className="text-xs text-[#4A2E1B]">
              Bấm vào từng điểm mốc trên sơ đồ để xem nhanh hoặc mở trang chi tiết
            </p>
          </div>
          <span className="text-xs text-stone-500 italic">
            * Bấm vào điểm tròn để xem thông tin
          </span>
        </div>

        {/* Interactive Diagram Area */}
        <div className="relative bg-[#FAF6F0] rounded-xl border border-[#D4A346]/40 p-4 sm:p-6 overflow-x-auto min-w-[320px]">
          {/* North Direction Marker */}
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-[#8B1E1E] text-[#F7E5A9] text-xs font-serif-culture font-semibold rounded-full border border-[#D4A346]/50 shadow-sm">
              ▲ Hướng Bắc (Nội tự - Khu Thái Học Quốc Tử Giám)
            </span>
          </div>

          {/* Diagram Vertical Flow */}
          <div className="max-w-2xl mx-auto space-y-4 relative py-2">
            {/* Center Axis Guideline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B1E1E] via-[#D4A346] to-[#8B1E1E] transform -translate-x-1/2 pointer-events-none opacity-40 dashed" />

            {/* List of 15 Stations in South to North reverse display, or in sequential flow */}
            <div className="space-y-3">
              {monuments.map((m) => {
                const isVisited = visitedIds.includes(m.id);
                const isHovered = hoveredMonumentId === m.id;

                return (
                  <div
                    key={m.id}
                    onMouseEnter={() => setHoveredMonumentId(m.id)}
                    onMouseLeave={() => setHoveredMonumentId(null)}
                    onClick={() => onSelectMonument(m.id)}
                    className={`relative flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                      isVisited
                        ? 'bg-emerald-50/70 border-emerald-300 hover:border-emerald-500'
                        : isHovered
                        ? 'bg-[#F3EBDD] border-[#8B1E1E] shadow-md scale-[1.01]'
                        : 'bg-[#FFFFFF] border-[#EADBCE] hover:border-[#D4A346]'
                    }`}
                  >
                    {/* Left: Order and Name */}
                    <div className="flex items-center space-x-3 z-10">
                      <span
                        className={`w-7 h-7 rounded-full text-xs font-bold font-serif-culture flex items-center justify-center shrink-0 shadow-sm ${
                          isVisited
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#8B1E1E] text-[#F7E5A9]'
                        }`}
                      >
                        {m.order}
                      </span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-serif-culture font-bold text-sm text-[#2C1810]">
                            {m.name}
                          </h4>
                          <span className="text-xs text-[#8B1E1E] font-medium hidden sm:inline">
                            {m.hanTu}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#4A2E1B]/80 line-clamp-1">
                          {m.category}
                        </p>
                      </div>
                    </div>

                    {/* Right: Actions and Visited Status */}
                    <div className="flex items-center space-x-2 z-10 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleVisited(m.id);
                        }}
                        className={`p-1 rounded-md text-xs flex items-center space-x-1 ${
                          isVisited
                            ? 'text-emerald-700 bg-emerald-100/80 hover:bg-emerald-200'
                            : 'text-stone-400 bg-stone-100 hover:bg-stone-200'
                        }`}
                        title={isVisited ? 'Đã tham quan (bấm để bỏ)' : 'Đánh dấu đã tham quan'}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="hidden md:inline text-[11px]">
                          {isVisited ? 'Đã ghé' : 'Chưa ghé'}
                        </span>
                      </button>

                      <button
                        onClick={() => onSelectMonument(m.id)}
                        className="px-2.5 py-1 bg-[#8B1E1E] hover:bg-[#661010] text-[#F7E5A9] text-xs font-medium rounded transition-colors flex items-center space-x-1"
                      >
                        <span>Chi tiết</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* South Direction Marker */}
          <div className="text-center mt-4">
            <span className="inline-block px-3 py-1 bg-[#4A2E1B] text-[#F7E5A9] text-xs font-serif-culture font-semibold rounded-full border border-[#D4A346]/50 shadow-sm">
              ▼ Hướng Nam (Cổng vào ngoài phố Quốc Tử Giám - Tứ Trụ & Hồ Văn)
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm địa điểm (ví dụ: Khuê Văn Các, Bia Tiến sĩ, Hồ Văn, Chu Văn An)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-[#EADBCE] focus:border-[#8B1E1E] focus:outline-none rounded-xl text-sm text-[#2C1810] placeholder-stone-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Zone Selector */}
          <div className="sm:w-64">
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#EADBCE] focus:border-[#8B1E1E] focus:outline-none rounded-xl text-sm text-[#2C1810]"
            >
              {zonesList.map((z) => (
                <option key={z.id} value={z.id}>
                  {z.label}
                </option>
              ))}
            </select>
          </div>

          {/* Visited Status Filter */}
          <div className="sm:w-48">
            <select
              value={visitedFilter}
              onChange={(e) => setVisitedFilter(e.target.value as any)}
              className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#EADBCE] focus:border-[#8B1E1E] focus:outline-none rounded-xl text-sm text-[#2C1810]"
            >
              <option value="all">Mọi trạng thái</option>
              <option value="visited">Đã tham quan</option>
              <option value="unvisited">Chưa tham quan</option>
            </select>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex justify-between items-center text-xs text-[#4A2E1B] pt-1">
          <span>
            Tìm thấy <strong>{filteredMonuments.length}</strong> / {monuments.length} địa điểm phù hợp
          </span>
          {(searchTerm || selectedZone !== 'all' || visitedFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedZone('all');
                setVisitedFilter('all');
              }}
              className="text-[#8B1E1E] font-medium hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Grid of Monument Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMonuments.map((m) => {
          const isVisited = visitedIds.includes(m.id);

          return (
            <div
              key={m.id}
              className={`bg-[#FFFFFF] border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group ${
                isVisited
                  ? 'border-emerald-300 ring-1 ring-emerald-200'
                  : 'border-[#EADBCE] hover:border-[#D4A346]'
              }`}
            >
              <div>
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-[#2C1810] cursor-pointer" onClick={() => onSelectMonument(m.id)}>
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Order Badge */}
                  <div className="absolute top-3 left-3 bg-[#8B1E1E] text-[#F7E5A9] text-xs font-serif-culture font-bold px-2.5 py-1 rounded-md shadow-md border border-[#D4A346]/40">
                    Điểm #{m.order}
                  </div>

                  {/* Visited Check */}
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleVisited(m.id);
                      }}
                      className={`p-1.5 rounded-full backdrop-blur-md shadow-md text-xs font-medium flex items-center space-x-1 ${
                        isVisited
                          ? 'bg-emerald-600 text-white'
                          : 'bg-black/50 text-[#FAF6F0] hover:bg-black/70'
                      }`}
                      title={isVisited ? 'Bấm để đánh dấu chưa ghé' : 'Bấm để đánh dấu đã ghé'}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-[11px] px-1">{isVisited ? 'Đã xem' : 'Chưa xem'}</span>
                    </button>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#FAF6F0]">
                    <span className="bg-[#4A2E1B]/80 px-2.5 py-0.5 rounded text-[11px] text-[#F7E5A9]">
                      {m.category}
                    </span>
                    <span className="font-serif-culture font-bold text-sm text-[#F7E5A9]">
                      {m.hanTu}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3
                    onClick={() => onSelectMonument(m.id)}
                    className="font-serif-culture font-bold text-lg text-[#2C1810] group-hover:text-[#8B1E1E] transition-colors cursor-pointer"
                  >
                    {m.name}
                  </h3>

                  <p className="text-xs text-[#4A2E1B]/85 line-clamp-3 leading-relaxed">
                    {m.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <div className="text-[11px] text-stone-500 font-medium">Điểm nổi bật:</div>
                    <ul className="text-xs text-[#4A2E1B] space-y-1">
                      {m.highlightFacts.slice(0, 2).map((fact, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-[#8B1E1E] font-bold">•</span>
                          <span className="line-clamp-1">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 bg-[#FAF6F0]/60 border-t border-[#F3EBDD] flex items-center justify-between">
                <button
                  onClick={() => onSelectMonument(m.id)}
                  className="px-3.5 py-1.5 bg-[#8B1E1E] hover:bg-[#661010] text-[#F7E5A9] rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem chi tiết & thuyết minh</span>
                </button>

                <button
                  onClick={() => onToggleVisited(m.id)}
                  className={`text-xs font-medium cursor-pointer ${
                    isVisited ? 'text-emerald-700 hover:underline' : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {isVisited ? 'Đã đánh dấu' : 'Đánh dấu'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
