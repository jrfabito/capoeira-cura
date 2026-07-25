import React, { createContext, useContext, useState } from 'react';
import type { ChapterId } from '../data/chapters';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isSpanish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'capoeira_lang';

interface LanguageProviderProps {
  children: React.ReactNode;
  activeChapter?: ChapterId | null;
}

export function LanguageProvider({ children, activeChapter: _activeChapter }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') {
        return saved;
      }
      if (navigator.language && navigator.language.toLowerCase().startsWith('es')) {
        return 'es';
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Ignore localStorage errors (e.g. private browsing mode)
      }
    }
  };

  const value = {
    language,
    setLanguage,
    isSpanish: language === 'es',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
