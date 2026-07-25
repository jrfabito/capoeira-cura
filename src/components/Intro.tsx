import { motion } from 'framer-motion';
import type { ChapterId } from '../data/chapters';
import { t } from '../utils/translations';
import { useLanguage } from '../context/LanguageContext';

interface IntroProps {
  activeChapter?: ChapterId | null;
}

export default function Intro({ activeChapter: _activeChapter }: IntroProps) {
  const { language } = useLanguage();
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '56px',
        alignItems: 'center',
        padding: 'clamp(56px,8vw,110px) clamp(20px,6vw,80px) 40px',
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
      <div style={{ flex: '1 1 460px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '22px' }}>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(28px,3.6vw,46px)',
          lineHeight: 1.15,
          margin: 0,
          color: 'var(--color-ink)'
        }}>
          {t('introTitle', language)}
        </h2>
        <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
          {t('introDesc', language)}
        </p>
      </div>
      <div style={{ flex: '1 1 420px', minWidth: '280px', display: 'flex', gap: '16px' }}>
        <motion.img
          src="/assets/intro-1.jpg"
          alt="Class photo"
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          style={{ flex: 1, minWidth: 0, width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '10px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2938&auto=format&fit=crop';
          }}
        />
        <motion.img
          src="/assets/intro-2.jpg"
          alt="Culture photo"
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          style={{ flex: 1, minWidth: 0, width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '10px', marginTop: '36px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549889656-1b44ebf2ff83?q=80&w=2938&auto=format&fit=crop';
          }}
        />
      </div>
    </motion.section>
  );
}
