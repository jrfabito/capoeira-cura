import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';
import { useLightbox } from '../context/LightboxContext';

interface LocationProps {
  activeChapter: ChapterId | null;
}

export default function Location({ activeChapter }: LocationProps) {
  const { isSpanish } = useLanguage();
  const { openLightbox } = useLightbox();
  if (!activeChapter) return null;
  const currentChapter = chapters.find(c => c.id === activeChapter)!;

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{
        padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
      <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(26px,3.2vw,38px)',
          margin: 0,
          color: 'var(--color-ink)'
        }}>
          {isSpanish ? '¿Dónde es la clase?' : 'Where is the class?'}
        </h2>
        <p style={{ fontSize: '17px', margin: 0 }}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${currentChapter.location.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-muted)', fontWeight: 600 }}
          >
            {currentChapter.location.address} ↗
          </a>
        </p>
      </motion.div>
      <motion.div variants={itemVariants} style={{ width: '100%', aspectRatio: '16/6', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <iframe
          title={`Google Map location for Capoeira Cura ${currentChapter.name}`}
          src={currentChapter.location.mapEmbedUrl}
          style={{ width: '100%', height: '100%', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
      {currentChapter.location.photos && currentChapter.location.photos.length > 0 && (
        <motion.div key={`${activeChapter}-photos`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {currentChapter.location.photos.map((photo, index) => (
            <div key={photo.src || index} style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 }}>
              <motion.img
                src={photo.src}
                alt={isSpanish ? photo.title.es : photo.title.en}
                loading="lazy"
                onClick={(e) => openLightbox((e.target as HTMLImageElement).src, isSpanish ? photo.title.es : photo.title.en)}
                whileHover={{ scale: 1.03 }}
                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px', cursor: 'zoom-in' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = photo.fallbackUrl || 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2940&auto=format&fit=crop';
                }}
              />
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', margin: '0 0 4px', color: 'var(--color-ink)' }}>
                  {isSpanish ? photo.title.es : photo.title.en}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)' }}>
                  {isSpanish ? photo.desc.es : photo.desc.en}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}
