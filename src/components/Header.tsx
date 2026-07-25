import { motion } from 'framer-motion';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  activeChapter?: ChapterId | null;
}

export default function Header({ activeChapter: _activeChapter }: HeaderProps) {
  const { language, setLanguage, isSpanish } = useLanguage();

  return (
    <header style={{
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      background: 'var(--color-maroon)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '16px clamp(20px,4vw,64px)', 
      gap: '24px', 
      flexWrap: 'wrap'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img 
          src="/logo.png" 
          alt="Capoeira Cura Logo" 
          style={{ width: '48px', height: '48px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover' }} 
        />
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800, 
          fontSize: '20px', 
          letterSpacing: '0.04em', 
          color: 'var(--color-cream)' 
        }}>
          CAPOEIRA CURA
        </span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,32px)', flexWrap: 'wrap' }}>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#about" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>{isSpanish ? 'ACERCA DE' : 'ABOUT'}</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#schedule" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>{isSpanish ? 'HORARIO' : 'SCHEDULE'}</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#instructors" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>{isSpanish ? 'INSTRUCTORES' : 'INSTRUCTORS'}</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#videos" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>{isSpanish ? 'VIDEOS' : 'VIDEOS'}</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#faq" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>{isSpanish ? 'PREGUNTAS FRECUENTES' : 'FAQ'}</motion.a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255, 255, 255, 0.1)', padding: '3px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.15)', margin: '0 4px' }}>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage('en')}
            style={{
              background: language === 'en' ? 'var(--color-gold)' : 'transparent',
              color: language === 'en' ? 'var(--color-maroon)' : 'var(--color-cream)',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '16px',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s'
            }}
          >
            EN
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage('es')}
            style={{
              background: language === 'es' ? 'var(--color-gold)' : 'transparent',
              color: language === 'es' ? 'var(--color-maroon)' : 'var(--color-cream)',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '16px',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s'
            }}
          >
            ES
          </motion.button>
        </div>

        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="#contact" style={{ 
          background: 'var(--color-gold)', 
          color: 'var(--color-maroon)', 
          padding: '10px 20px', 
          borderRadius: '2px', 
          fontWeight: 700, 
          fontSize: '13px', 
          letterSpacing: '0.04em',
          display: 'inline-block'
        }}>{isSpanish ? 'ÚNETE A UNA CLASE' : 'JOIN A CLASS'}</motion.a>
      </nav>
    </header>
  );
}
