import React, { useState, useEffect } from 'react';
import { Navbar, ScreenType } from './components/Navbar.tsx';
import { HomeScreen } from './components/HomeScreen.tsx';
import { TourMapScreen } from './components/TourMapScreen.tsx';
import { MonumentDetailScreen } from './components/MonumentDetailScreen.tsx';
import { AboutScreen } from './components/AboutScreen.tsx';
import { Footer } from './components/Footer.tsx';
import { MONUMENTS_DATA, Monument } from './data/monumentsData.ts';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>('tu-tru');
  const [visitedIds, setVisitedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vanmieu_visited') || localStorage.getItem('vanmieu360_visited');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save visited monuments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vanmieu_visited', JSON.stringify(visitedIds));
    } catch (e) {
      console.warn('Failed to save visited monuments to localStorage:', e);
    }
  }, [visitedIds]);

  // Scroll to top upon screen navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen, selectedMonumentId]);

  // Current selected monument object
  const selectedMonument: Monument =
    MONUMENTS_DATA.find((m) => m.id === selectedMonumentId) || MONUMENTS_DATA[0];

  const handleStartTour = () => {
    setSelectedMonumentId('tu-tru');
    setCurrentScreen('detail');
  };

  const handleSelectMonument = (monumentId: string) => {
    setSelectedMonumentId(monumentId);
    setCurrentScreen('detail');
  };

  const handleToggleVisited = (monumentId: string) => {
    setVisitedIds((prev) =>
      prev.includes(monumentId)
        ? prev.filter((id) => id !== monumentId)
        : [...prev, monumentId]
    );
  };

  const handleResetProgress = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ tham quan?')) {
      setVisitedIds([]);
    }
  };

  const handleMarkAllVisited = () => {
    const allIds = MONUMENTS_DATA.map((m) => m.id);
    setVisitedIds(allIds);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#2C1810]">
      {/* Top Header & Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        visitedCount={visitedIds.length}
        totalCount={MONUMENTS_DATA.length}
      />

      {/* Main Content Area switching between core screens */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            monuments={MONUMENTS_DATA}
            onStartTour={handleStartTour}
            onSelectMonument={handleSelectMonument}
            onOpenMap={() => setCurrentScreen('map')}
            onOpenAbout={() => setCurrentScreen('about')}
            visitedIds={visitedIds}
          />
        )}

        {currentScreen === 'map' && (
          <TourMapScreen
            monuments={MONUMENTS_DATA}
            onSelectMonument={handleSelectMonument}
            visitedIds={visitedIds}
            onToggleVisited={handleToggleVisited}
            onResetProgress={handleResetProgress}
            onMarkAllVisited={handleMarkAllVisited}
          />
        )}

        {currentScreen === 'detail' && (
          <MonumentDetailScreen
            monument={selectedMonument}
            onSelectMonument={handleSelectMonument}
            onBackToMap={() => setCurrentScreen('map')}
            isVisited={visitedIds.includes(selectedMonument.id)}
            onToggleVisited={handleToggleVisited}
            allMonuments={MONUMENTS_DATA}
          />
        )}

        {currentScreen === 'about' && <AboutScreen />}
      </main>

      {/* Culture Footer */}
      <Footer onNavigate={setCurrentScreen} />
    </div>
  );
}
