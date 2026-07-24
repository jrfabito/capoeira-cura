import { motion } from 'framer-motion';

export default function Schedule() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.section
      id="schedule"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      style={{ background: 'var(--color-maroon)', padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.12em',
            color: 'var(--color-gold)'
          }}>
            JOIN A CLASS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(28px,3.6vw,42px)',
            margin: 0,
            color: '#FFFFFF'
          }}>
            How to participate
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--color-muted-on-maroon)', maxWidth: '640px', margin: 0 }}>
            No experience needed — just bring comfortable clothes, a bottle of water, and an open mind. Your first class is free.
          </p>
          <div style={{
            backgroundColor: 'rgba(217, 164, 65, 0.15)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px',
            borderRadius: '4px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '8px',
            textAlign: 'left'
          }}>
            <span style={{ fontSize: '20px' }}>ℹ️</span>
            <span style={{ fontSize: '15px', lineHeight: 1.4 }}>
              <strong>On break:</strong> Classes resume in August 2026
            </span>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          <motion.div variants={itemVariants} style={{
            flex: '1 1 260px',
            maxWidth: '320px',
            background: 'var(--color-maroon-card)',
            borderRadius: '6px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '15px', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>WHEN</span>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF' }}>Mondays & Thursdays<br />7:00 – 8:00 PM</p>
          </motion.div>
          <motion.div variants={itemVariants} style={{
            flex: '1 1 260px',
            maxWidth: '320px',
            background: 'var(--color-maroon-card)',
            borderRadius: '6px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '15px', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>COST</span>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF' }}>$15 drop-in<br />First class free</p>
          </motion.div>
          <motion.div variants={itemVariants} style={{
            flex: '1 1 260px',
            maxWidth: '320px',
            background: 'var(--color-maroon-card)',
            borderRadius: '6px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '15px', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>WHO</span>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF' }}>All levels welcome<br />Teens and adults</p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'var(--color-gold)',
              color: 'var(--color-maroon)',
              padding: '16px 36px',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.05em',
              borderRadius: '2px',
              display: 'inline-block'
            }}>
            RESERVE YOUR FREE CLASS
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
