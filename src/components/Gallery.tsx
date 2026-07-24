import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginTop: '40px' }}
    >
      <motion.img 
        src="/assets/gallery-1.jpg" 
        alt="Group class" 
        loading="lazy"
        whileHover={{ scale: 1.03, zIndex: 1, position: 'relative' }}
        style={{ width: '100%', height: 'clamp(260px,32vw,440px)', objectFit: 'cover' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579899320666-89689fbfd2f1?q=80&w=2942&auto=format&fit=crop';
        }}
      />
      <motion.img 
        src="/assets/gallery-2.jpg" 
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
