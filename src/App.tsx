import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import WhatIsCapoeira from './components/WhatIsCapoeira';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Instructors from './components/Instructors';
import Videos from './components/Videos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { ChapterId } from './data/chapters';
import { detectClosestChapter } from './utils/geolocation';
import { LanguageProvider } from './context/LanguageContext';
import { LightboxProvider } from './context/LightboxContext';

function App() {
  const [activeChapter, setActiveChapter] = useState<ChapterId | null>(null);

  useEffect(() => {
    const initLocation = async () => {
      const chapter = await detectClosestChapter();
      if (chapter) {
        setActiveChapter(chapter);
      }
    };
    initLocation();
  }, []);

  return (
    <LanguageProvider activeChapter={activeChapter}>
      <LightboxProvider>
        <Header activeChapter={activeChapter} />
        <main>
          <Hero activeChapter={activeChapter} />
          <Schedule activeChapter={activeChapter} setActiveChapter={setActiveChapter} />
          <Intro activeChapter={activeChapter} />
          <Gallery activeChapter={activeChapter} />
          <WhatIsCapoeira activeChapter={activeChapter} />
          <Location activeChapter={activeChapter} />
          <Instructors activeChapter={activeChapter} />
          <Videos activeChapter={activeChapter} />
          <FAQ activeChapter={activeChapter} />
          <Contact activeChapter={activeChapter} />
        </main>
        <Footer activeChapter={activeChapter} />
      </LightboxProvider>
    </LanguageProvider>
  );
}

export default App;
