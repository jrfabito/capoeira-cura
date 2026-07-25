import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';
import { t } from '../utils/translations';
import { useLanguage } from '../context/LanguageContext';
import { useLightbox } from '../context/LightboxContext';

interface WhatIsCapoeiraProps {
  activeChapter?: ChapterId | null;
}

export default function WhatIsCapoeira({ activeChapter }: WhatIsCapoeiraProps) {
  const { language } = useLanguage();
  const { openLightbox } = useLightbox();
  const currentChapterData = chapters.find(c => c.id === activeChapter);
  const whatIsData = currentChapterData?.whatIsCapoeira;

  const title = whatIsData ? whatIsData.title[language] : t('whatIsTitle', language);
  const desc = whatIsData ? whatIsData.desc[language] : t('whatIsDesc', language);
  const img = whatIsData ? whatIsData.image : '/assets/what-is-capoeira.jpg';

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{
        display: 'flex', 
        flexWrap: 'wrap-reverse', 
        gap: '56px', 
        alignItems: 'center', 
        padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)', 
        maxWidth: '1440px', 
        margin: '0 auto'
      }}>
        <motion.img 
          key={img}
          src={img} 
          alt="Capoeira movement" 
          loading="lazy"
          onClick={(e) => openLightbox((e.target as HTMLImageElement).src, 'Capoeira movement')}
        whileHover={{ scale: 1.03 }}
        style={{ flex: '1 1 420px', minWidth: '280px', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '10px', cursor: 'zoom-in' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579899320666-89689fbfd2f1?q=80&w=2942&auto=format&fit=crop';
        }}
      />
      <div style={{ flex: '1 1 460px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 700, 
          fontSize: '13px', 
          letterSpacing: '0.12em', 
          color: 'var(--color-plum)' 
        }}>
          {t('whatIsArt', language)}
        </span>
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800, 
          fontSize: 'clamp(26px,3.2vw,38px)', 
          margin: 0, 
          color: 'var(--color-ink)' 
        }}>
          {title}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
          {desc}
        </p>
        <motion.a 
          href="#videos" 
          whileHover={{ x: 5, color: 'var(--color-gold)' }}
          style={{ 
            fontWeight: 700, 
            fontSize: '14px', 
            letterSpacing: '0.04em', 
            color: 'var(--color-plum)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            transformOrigin: 'left center'
          }}>
          {t('whatIsLink', language)}
        </motion.a>
      </div>
    </motion.section>
  );
}
