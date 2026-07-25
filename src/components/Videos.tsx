import { motion } from 'framer-motion';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface VideosProps {
  activeChapter?: ChapterId | null;
}

export default function Videos({ activeChapter: _activeChapter }: VideosProps) {
  const { isSpanish } = useLanguage();
  const videos = [
    { title: 'Formatura', url: 'https://www.youtube.com/embed/7AsVVRn0QAE', id: 'v1' },
    { title: 'Jogo de Iuna', url: 'https://www.youtube.com/embed/AmT0Uqv0JpM', id: 'v2' },
    { title: 'Batizado Roda', url: 'https://www.youtube.com/embed/wxIS-SuJFJ8', id: 'v3' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.section 
      id="videos" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{
        padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)',
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '44px'
      }}>
      <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.12em',
          color: 'var(--color-plum)'
        }}>
          {isSpanish ? 'MÍRANOS EN ACCIÓN' : 'SEE US MOVE'}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(28px,3.6vw,42px)',
          margin: 0,
          color: 'var(--color-ink)'
        }}>
          Videos
        </h2>
      </motion.div>
      <motion.div variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
        {videos.map(v => (
          <motion.div variants={itemVariants} key={v.id} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {v.url ? (
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', background: 'var(--color-ink)' }}>
                <iframe
                  title={v.title}
                  src={v.url}
                  style={{ width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={`/assets/${v.id}-thumb.jpg`} alt="Video thumbnail" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(58,14,40,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '9px 0 9px 15px', borderColor: 'transparent transparent transparent #FFFFFF', marginLeft: '3px' }}></div>
                  </div>
                </div>
              </div>
            )}
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', margin: 0, color: 'var(--color-ink)' }}>
              {v.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
