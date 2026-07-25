import { motion } from 'framer-motion';

import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  activeChapter?: ChapterId | null;
}

export default function Hero({ activeChapter: _activeChapter }: HeroProps) {
  const { isSpanish } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { delay: 0.5, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" as const } }
  };

  const titleText = isSpanish 
    ? "Descubre el Ritmo, la Fuerza y la Cultura de la Capoeira" 
    : "Discover the Rhythm, Strength, and Culture of Capoeira";
    
  const buttonText = isSpanish
    ? "ÚNETE A UNA CLASE"
    : "JOIN A CLASS";

  return (
    <section style={{
      position: 'relative', 
      height: 'clamp(420px,70vh,720px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <motion.div 
        style={{ position: 'absolute', inset: 0 }}
        initial="hidden"
        animate="visible"
        variants={bgVariants}
      >
        <img 
          src="/assets/hero.jpg" 
          alt="Group of Capoeira performers" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549889656-1b44ebf2ff83?q=80&w=2938&auto=format&fit=crop';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(58,14,40,0.45) 0%, rgba(58,14,40,0.65) 100%)', 
          pointerEvents: 'none' 
        }}></div>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ 
          position: 'relative', 
          textAlign: 'center', 
          maxWidth: '900px', 
          padding: '0 24px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '28px' 
        }}>
        <motion.h1 
          variants={itemVariants}
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: 'clamp(32px,5.5vw,64px)', 
            lineHeight: 1.08, 
            color: '#FFFFFF', 
            margin: 0, 
            textShadow: '0 2px 12px rgba(0,0,0,0.25)' 
          }}>
          {titleText}
        </motion.h1>
        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="#contact" 
          style={{ 
            pointerEvents: 'auto', 
            background: 'var(--color-gold)', 
            color: 'var(--color-maroon)', 
            padding: '16px 36px', 
            fontWeight: 700, 
            fontSize: '15px', 
            letterSpacing: '0.05em', 
            borderRadius: '2px',
            display: 'inline-block'
          }}>
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}
