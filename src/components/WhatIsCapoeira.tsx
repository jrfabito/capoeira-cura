import { motion } from 'framer-motion';

export default function WhatIsCapoeira() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
        src="/assets/what-is-capoeira.jpg" 
        alt="Capoeira movement" 
        whileHover={{ scale: 1.03 }}
        style={{ flex: '1 1 420px', minWidth: '280px', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '10px' }}
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
          THE ART
        </span>
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800, 
          fontSize: 'clamp(26px,3.2vw,38px)', 
          margin: 0, 
          color: 'var(--color-ink)' 
        }}>
          What is Capoeira?
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
          Capoeira is a Brazilian art form born from enslaved Africans in the 16th century, blending fluid, rhythmic movement with kicks, spins, and takedowns. It's practiced in a circle called the roda, powered by live music from the berimbau, atabaque, and pandeiro. Above all, it's a celebration of resilience, creativity, and community.
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
          WATCH VIDEOS &rarr;
        </motion.a>
      </div>
    </motion.section>
  );
}
