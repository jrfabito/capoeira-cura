import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';
import { useLightbox } from '../context/LightboxContext';

interface GalleryProps {
  activeChapter?: ChapterId | null;
}

export default function Gallery({ activeChapter }: GalleryProps) {
  const currentChapter = chapters.find(c => c.id === activeChapter);
  const { openLightbox } = useLightbox();
  const images = currentChapter?.gallery || ['/assets/gallery-1.jpg', '/assets/gallery-2.jpg'];

  const getAltText = (src: string, index: number) => {
    if (src.includes('gallery-1')) return 'Group class';
    if (src.includes('gallery-2')) return 'Cultural festival';
    if (src.includes('gallery-3')) return 'Capoeira class';
    if (src.includes('lb-gallery-1')) return 'Long Beach class';
    if (src.includes('lb-gallery-2')) return 'Long Beach roda';
    if (src.includes('leon-gallery-1')) return 'León class';
    if (src.includes('leon-gallery-2')) return 'León roda';
    return `Gallery image ${index + 1}`;
  };

  const fallbackImages = [
    'https://images.unsplash.com/photo-1579899320666-89689fbfd2f1?q=80&w=2942&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2940&auto=format&fit=crop'
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2px', 
        marginTop: '40px' 
      }}
    >
      {images.map((img, index) => {
        const alt = getAltText(img, index);
        const fallback = fallbackImages[index % fallbackImages.length];
        return (
          <motion.img 
            key={img}
            src={img} 
            alt={alt} 
            loading="lazy"
            onClick={(e) => openLightbox((e.target as HTMLImageElement).src, alt)}
            whileHover={{ scale: 1.03, zIndex: 1, position: 'relative' }}
            style={{ width: '100%', height: 'clamp(260px,32vw,440px)', objectFit: 'cover', cursor: 'zoom-in' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallback;
            }}
          />
        );
      })}
    </motion.section>
  );
}
