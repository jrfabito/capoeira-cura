import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';

interface GalleryProps {
  activeChapter?: ChapterId | null;
}

export default function Gallery({ activeChapter }: GalleryProps) {
  const currentChapter = chapters.find(c => c.id === activeChapter);
  const [img1, img2] = currentChapter?.gallery || ['/assets/gallery-1.jpg', '/assets/gallery-2.jpg'];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginTop: '40px' }}
    >
      <motion.img 
        key={img1}
        src={img1} 
        alt="Group class" 
        loading="lazy"
        whileHover={{ scale: 1.03, zIndex: 1, position: 'relative' }}
        style={{ width: '100%', height: 'clamp(260px,32vw,440px)', objectFit: 'cover' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579899320666-89689fbfd2f1?q=80&w=2942&auto=format&fit=crop';
        }}
      />
      <motion.img 
        key={img2}
        src={img2} 
        alt="Cultural festival" 
        loading="lazy"
        whileHover={{ scale: 1.03, zIndex: 1, position: 'relative' }}
        style={{ width: '100%', height: 'clamp(260px,32vw,440px)', objectFit: 'cover' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2940&auto=format&fit=crop';
        }}
      />
    </motion.section>
  );
}
