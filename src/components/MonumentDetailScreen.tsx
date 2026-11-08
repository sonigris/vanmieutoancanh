import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  BookOpen,
  History,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Info,
  AlertCircle,
  Headphones,
  Compass
} from 'lucide-react';
import { Monument } from '../data/monumentsData.ts';

interface MonumentDetailScreenProps {
  monument: Monument;
  onSelectMonument: (monumentId: string) => void;
  onBackToMap: () => void;
  isVisited: boolean;
  onToggleVisited: (monumentId: string) => void;
  allMonuments: Monument[];
}

export const MonumentDetailScreen: React.FC<MonumentDetailScreenProps> = ({
  monument,
  onSelectMonument,
  onBackToMap,
  isVisited,
  onToggleVisited,
  allMonuments,
}) => {
  // Speech synthesis state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPausedAudio, setIsPausedAudio] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Find previous and next monument in sequence
  const currentIndex = allMonuments.findIndex((m) => m.id === monument.id);
  const prevMonument = currentIndex > 0 ? allMonuments[currentIndex - 1] : null;
  const nextMonument = currentIndex < allMonuments.length - 1 ? allMonuments[currentIndex + 1] : null;

  // Check speech synthesis support on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    } else {
      setSpeechSupported(false);
    }

    // Stop previous audio when monument changes
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setIsPausedAudio(false);
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [monument.id]);

  // Audio speech synthesis handlers
  // Audio speech synthesis handlers (Web Speech API)
  const handlePlayAudio = () => {
    if (!speechSupported || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const textToRead = `${monument.name}. ${monument.audio} Nguồn tư liệu: ${monument.source}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utteranceRef.current = utterance;

    // Try finding Vietnamese voice if available
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find((v) => v.lang.includes('vi') || v.lang.includes('VIE'));
    if (viVoice) {
      utterance.voice = viVoice;
    }
    utterance.lang = 'vi-VN';
    utterance.rate = speechRate;

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setIsPausedAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setIsPausedAudio(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
    setIsPausedAudio(false);
  };

  const handlePauseAudio = () => {
    if (!speechSupported || !('speechSynthesis' in window)) return;
    if (isPlayingAudio && !isPausedAudio) {
      window.speechSynthesis.pause();
      setIsPausedAudio(true);
      setIsPlayingAudio(false);
    }
  };

  const handleResumeAudio = () => {
    if (!speechSupported || !('speechSynthesis' in window)) return;
    if (isPausedAudio) {
      window.speechSynthesis.resume();
      setIsPausedAudio(false);
      setIsPlayingAudio(true);
    } else {
      handlePlayAudio();
    }
  };

  const handleStopAudio = () => {
    if (!speechSupported || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlayingAudio(false);
    setIsPausedAudio(false);
  };

  const handleChangeSpeed = (newRate: number) => {
    setSpeechRate(newRate);
    if (isPlayingAudio) {
      // Re-trigger with new rate
      handlePlayAudio();
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2500);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Top Navigation Bar: Back & Previous/Next */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADBCE] pb-4">
        <button
          onClick={onBackToMap}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8B1E1E] hover:text-[#661010] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại bản đồ 15 điểm</span>
        </button>

        <div className="flex items-center space-x-2">
          {/* Previous Monument Button */}
          <button
            onClick={() => prevMonument && onSelectMonument(prevMonument.id)}
            disabled={!prevMonument}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center space-x-1 transition-colors ${
              prevMonument
                ? 'bg-[#FAF6F0] text-[#2C1810] border-[#D4A346]/60 hover:bg-[#F3EBDD] cursor-pointer'
                : 'opacity-40 bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Điểm trước</span>
          </button>

          <span className="text-xs font-serif-culture font-bold px-2 text-[#8B1E1E]">
            {monument.order} / {allMonuments.length}
          </span>

          {/* Next Monument Button */}
          <button
            onClick={() => nextMonument && onSelectMonument(nextMonument.id)}
            disabled={!nextMonument}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center space-x-1 transition-colors ${
              nextMonument
                ? 'bg-[#FAF6F0] text-[#2C1810] border-[#D4A346]/60 hover:bg-[#F3EBDD] cursor-pointer'
                : 'opacity-40 bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">Điểm tiếp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Header Information */}
      <div className="space-y-3 text-left">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8B1E1E] text-[#F7E5A9] border border-[#D4A346]/50">
            Điểm dừng số {monument.order}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F3EBDD] text-[#8B1E1E] border border-[#D4A346]/30">
            {monument.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAF6F0] text-[#4A2E1B] border border-[#EADBCE]">
            {monument.zoneName}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h1 className="text-3xl sm:text-4xl font-serif-culture font-bold text-[#2C1810]">
            {monument.name}
          </h1>
          <span className="text-xl sm:text-2xl font-serif-culture font-semibold text-[#8B1E1E]">
            {monument.hanTu}
          </span>
        </div>

        {/* Status and Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleVisited(monument.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                isVisited
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-[#FAF6F0] border border-[#D4A346] text-[#8B1E1E] hover:bg-[#F3EBDD]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isVisited ? 'Đã tham quan di tích này' : 'Đánh dấu đã ghé thăm'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="p-1.5 text-stone-600 hover:text-[#8B1E1E] hover:bg-[#F3EBDD] rounded-lg transition-colors cursor-pointer"
              title="Sao chép liên kết"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copiedNotice && (
              <span className="text-xs text-emerald-700 font-medium">Đã sao chép!</span>
            )}
          </div>

          {nextMonument && (
            <button
              onClick={() => onSelectMonument(nextMonument.id)}
              className="px-3 py-1.5 bg-[#8B1E1E] text-[#F7E5A9] hover:bg-[#661010] rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>Điểm tiếp theo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Featured Photo with Cultural Border and Attribution */}
      <div className="space-y-2">
        <div className="relative rounded-2xl overflow-hidden border-4 border-[#D4A346] shadow-xl bg-[#2C1810]">
          <img
            src={monument.image}
            alt={monument.name}
            className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom attribution overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-left">
            <p className="text-xs sm:text-sm font-medium text-[#F7E5A9] drop-shadow-md">
              {monument.imageCaption}
            </p>
            {monument.imageNotice && (
              <p className="text-[11px] text-stone-300 italic mt-0.5">
                {monument.imageNotice}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-stone-500 px-1">
          <span>* Hình ảnh minh họa phục vụ tìm hiểu di tích</span>
          <span>Nguồn ảnh: Trung tâm HĐVHKH Văn Miếu & Tư liệu di sản</span>
        </div>
      </div>

      {/* Web Speech API Narration Player with Play, Pause, Resume, Stop */}
      <div className="bg-[#FFFFFF] border-2 border-[#D4A346]/70 rounded-2xl p-6 shadow-sm space-y-5 text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F3EBDD] pb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all ${
              isPlayingAudio ? 'bg-emerald-600 text-white animate-pulse' : isPausedAudio ? 'bg-amber-600 text-white' : 'bg-[#8B1E1E] text-[#F7E5A9]'
            }`}>
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-serif-culture font-bold text-lg text-[#2C1810]">
                  Thuyết Minh Âm Thanh Trình Duyệt (Web Speech API)
                </h3>
                <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  isPlayingAudio
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : isPausedAudio
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-[#F3EBDD] text-[#8B1E1E]'
                }`}>
                  {isPlayingAudio ? '● Đang phát' : isPausedAudio ? '❚❚ Đang tạm dừng' : '○ Sẵn sàng'}
                </span>
              </div>
              <p className="text-xs text-[#4A2E1B]/80 mt-0.5">
                Đọc bài thuyết minh bằng giọng nói tiếng Việt tự động của trình duyệt (speechSynthesis)
              </p>
            </div>
          </div>

          {/* Speed controls */}
          <div className="flex items-center space-x-1.5 self-start md:self-auto text-xs bg-[#FAF6F0] p-1.5 rounded-lg border border-[#EADBCE]">
            <span className="text-stone-500 font-medium px-1">Tốc độ:</span>
            {[0.8, 1.0, 1.2].map((rate) => (
              <button
                key={rate}
                onClick={() => handleChangeSpeed(rate)}
                className={`px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                  speechRate === rate
                    ? 'bg-[#8B1E1E] text-[#F7E5A9]'
                    : 'text-stone-600 hover:bg-[#F3EBDD]'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        {/* 4 Dedicated Audio Action Buttons: Phát, Tạm dừng, Tiếp tục, Dừng */}
        {speechSupported ? (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* Nút 1: Phát (Play from beginning) */}
              <button
                onClick={handlePlayAudio}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer ${
                  isPlayingAudio && !isPausedAudio
                    ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                    : 'bg-[#8B1E1E] hover:bg-[#661010] text-[#F7E5A9]'
                }`}
                title="Bắt đầu đọc từ đầu"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Phát</span>
              </button>

              {/* Nút 2: Tạm dừng (Pause) */}
              <button
                onClick={handlePauseAudio}
                disabled={!isPlayingAudio || isPausedAudio}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm ${
                  isPlayingAudio && !isPausedAudio
                    ? 'bg-[#D4A346] hover:bg-[#C49A5A] text-[#2C1810] cursor-pointer'
                    : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
                }`}
                title="Tạm dừng thuyết minh"
              >
                <Pause className="w-4 h-4 fill-current" />
                <span>Tạm dừng</span>
              </button>

              {/* Nút 3: Tiếp tục (Resume) */}
              <button
                onClick={handleResumeAudio}
                disabled={!isPausedAudio}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm ${
                  isPausedAudio
                    ? 'bg-amber-600 hover:bg-amber-700 text-white cursor-pointer ring-2 ring-amber-300 animate-pulse'
                    : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
                }`}
                title="Tiếp tục nghe đoạn đang tạm dừng"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Tiếp tục</span>
              </button>

              {/* Nút 4: Dừng (Stop) */}
              <button
                onClick={handleStopAudio}
                disabled={!isPlayingAudio && !isPausedAudio}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm ${
                  isPlayingAudio || isPausedAudio
                    ? 'bg-stone-700 hover:bg-stone-900 text-[#FAF6F0] cursor-pointer'
                    : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
                }`}
                title="Dừng hẳn thuyết minh"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Dừng</span>
              </button>
            </div>

            <div className="text-[11px] text-stone-500 italic">
              * Mẹo: Quý khách có thể bấm <strong>Phát</strong> để nghe lại từ đầu, <strong>Tạm dừng</strong> khi cần nghỉ, <strong>Tiếp tục</strong> để nghe tiếp, hoặc <strong>Dừng</strong> để tắt âm thanh.
            </div>
          </div>
        ) : (
          <div className="text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
            Trình duyệt hiện tại chưa kích hoạt Web Speech API. Bạn có thể theo dõi trực tiếp bài thuyết minh văn bản ở khung dưới.
          </div>
        )}

        {/* Full Narration Script Display */}
        <div className="bg-[#FAF6F0] border border-[#EADBCE] rounded-xl p-4 sm:p-5 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#8B1E1E] uppercase tracking-wider">
            <Volume2 className="w-4 h-4 text-[#D4A346]" />
            <span>Nội dung bài thuyết minh địa điểm</span>
          </div>
          <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed italic bg-white/70 p-3.5 rounded-lg border border-[#EADBCE]">
            "{monument.audio}"
          </p>
        </div>
      </div>

      {/* Main Content Sections: Overview, History, Meaning */}
      <div className="space-y-6">
        {/* Section 1: Overview */}
        <div className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-3 text-left">
          <div className="flex items-center space-x-2 text-[#8B1E1E]">
            <BookOpen className="w-5 h-5 text-[#8B1E1E]" />
            <h2 className="font-serif-culture font-bold text-xl text-[#8B1E1E]">
              Mô Tả & Kiến Trúc
            </h2>
          </div>
          {monument.description ? (
            <p className="text-sm sm:text-base text-[#2C1810] leading-relaxed">
              {monument.description}
            </p>
          ) : (
            <div className="flex items-center space-x-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-lg border border-dashed border-stone-300">
              <AlertCircle className="w-4 h-4" />
              <span>Hiện chưa có tư liệu xác thực bổ sung cho phần mô tả này.</span>
            </div>
          )}
        </div>

        {/* Section 2: Historical Context */}
        <div className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-3 text-left">
          <div className="flex items-center space-x-2 text-[#8B1E1E]">
            <History className="w-5 h-5 text-[#8B1E1E]" />
            <h2 className="font-serif-culture font-bold text-xl text-[#8B1E1E]">
              Lịch Sử Hình Thành & Dấu Ấn Thời Gian
            </h2>
          </div>
          {monument.history ? (
            <p className="text-sm sm:text-base text-[#2C1810] leading-relaxed">
              {monument.history}
            </p>
          ) : (
            <div className="flex items-center space-x-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-lg border border-dashed border-stone-300">
              <AlertCircle className="w-4 h-4" />
              <span>Hiện chưa có tư liệu xác thực bổ sung cho phần lịch sử này.</span>
            </div>
          )}
        </div>

        {/* Section 3: Cultural & Educational Meaning */}
        <div className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-3 text-left">
          <div className="flex items-center space-x-2 text-[#8B1E1E]">
            <Sparkles className="w-5 h-5 text-[#D4A346]" />
            <h2 className="font-serif-culture font-bold text-xl text-[#8B1E1E]">
              Ý Nghĩa Văn Hóa & Tinh Thần Đạo Học
            </h2>
          </div>
          {monument.meaning ? (
            <p className="text-sm sm:text-base text-[#2C1810] leading-relaxed">
              {monument.meaning}
            </p>
          ) : (
            <div className="flex items-center space-x-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-lg border border-dashed border-stone-300">
              <AlertCircle className="w-4 h-4" />
              <span>Hiện chưa có tư liệu xác thực bổ sung cho phần ý nghĩa văn hóa này.</span>
            </div>
          )}
        </div>

        {/* Key Historical Highlights */}
        {monument.highlightFacts && monument.highlightFacts.length > 0 && (
          <div className="bg-[#FAF6F0] border-2 border-[#D4A346]/40 rounded-2xl p-6 shadow-sm space-y-3 text-left">
            <h3 className="font-serif-culture font-bold text-base text-[#8B1E1E]">
              Các Cột Mốc & Dữ Kiện Trọng Yếu
            </h3>
            <ul className="space-y-2">
              {monument.highlightFacts.map((fact, index) => (
                <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-[#4A2E1B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E] mt-2 shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section 4: Verified Source Citation */}
        <div className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-5 shadow-sm space-y-2 text-left">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#8B1E1E] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D4A346]" />
            <span>Nguồn tư liệu xác thực</span>
          </div>
          <p className="text-xs sm:text-sm text-[#4A2E1B] font-medium bg-[#FAF6F0] p-3.5 rounded-xl border border-[#EADBCE]">
            {monument.source}
          </p>
          <p className="text-[11px] text-stone-500 italic">
            * Toàn bộ thông tin lịch sử và niên đại tại trang này được đối chiếu từ chính sử triều đình và hồ sơ di sản chính thống của Nhà nước.
          </p>
        </div>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="pt-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevMonument ? (
          <button
            onClick={() => onSelectMonument(prevMonument.id)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#D4A346] bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#8B1E1E] text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="block text-[10px] text-stone-500 uppercase">Điểm trước: #{prevMonument.order}</span>
              <span>{prevMonument.name}</span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextMonument ? (
          <button
            onClick={() => onSelectMonument(nextMonument.id)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#8B1E1E] hover:bg-[#661010] text-[#F7E5A9] text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-md"
          >
            <div className="text-right">
              <span className="block text-[10px] text-[#F7E5A9]/70 uppercase">Điểm tiếp theo: #{nextMonument.order}</span>
              <span>{nextMonument.name}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onBackToMap}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#8B1E1E] hover:bg-[#661010] text-[#F7E5A9] text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-md"
          >
            <span>Hoàn thành hành trình - Quay về bản đồ</span>
            <CheckCircle2 className="w-4 h-4 text-[#D4A346]" />
          </button>
        )}
      </div>
    </div>
  );
};
