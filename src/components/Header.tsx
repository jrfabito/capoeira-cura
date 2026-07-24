import { motion } from 'framer-motion';

export default function Header() {
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
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#about" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>ABOUT</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#schedule" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>SCHEDULE</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#instructors" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>INSTRUCTORS</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#videos" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>VIDEOS</motion.a>
        <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="#faq" style={{ color: 'var(--color-alt-bg)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.03em', display: 'inline-block' }}>FAQ</motion.a>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="#contact" style={{ 
          background: 'var(--color-gold)', 
          color: 'var(--color-maroon)', 
          padding: '10px 20px', 
          borderRadius: '2px', 
          fontWeight: 700, 
          fontSize: '13px', 
          letterSpacing: '0.04em',
          display: 'inline-block'
        }}>TRY A FREE CLASS</motion.a>
      </nav>
    </header>
  );
}
