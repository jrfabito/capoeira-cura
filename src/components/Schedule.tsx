import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';

interface ScheduleProps {
  activeChapter: ChapterId | null;
  setActiveChapter: (id: ChapterId) => void;
}

export default function Schedule({ activeChapter, setActiveChapter }: ScheduleProps) {
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
            {activeChapter === 'leon' ? 'ÚNETE A UNA CLASE' : 'JOIN A CLASS'}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(28px,3.6vw,42px)',
            margin: 0,
            color: '#FFFFFF'
          }}>
            {activeChapter === 'leon' ? 'Cómo participar' : 'How to participate'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--color-muted-on-maroon)', maxWidth: '640px', margin: 0 }}>
            {activeChapter === 'leon' 
              ? 'No necesitas experiencia, solo trae ropa cómoda, una botella de agua y una mente abierta. Tu primera clase es gratis.'
              : 'No experience needed — just bring comfortable clothes, a bottle of water, and an open mind. Your first class is free.'}
          </p>

        </motion.div>

        <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', gap: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {chapters.map(chap => (
            <button
              key={chap.id}
              onClick={() => setActiveChapter(chap.id)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeChapter === chap.id ? '2px solid var(--color-gold)' : '2px solid transparent',
                color: activeChapter === chap.id ? 'var(--color-gold)' : '#FFFFFF',
                padding: '12px 16px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.12em',
                transition: 'all 0.3s'
              }}
            >
              {chap.name}
            </button>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          {activeChapter === null ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', width: '100%', padding: '32px 0' }}>
              <p style={{ fontSize: '18px', color: 'var(--color-muted-on-maroon)', margin: 0, fontWeight: 500 }}>
                {activeChapter === 'leon' ? 'Elige una ubicación arriba para ver el horario.' : 'Choose a location above to see the schedule.'}
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div key={`when-${activeChapter}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} style={{
                flex: '1 1 260px',
                maxWidth: '320px',
                background: 'var(--color-maroon-card)',
                borderRadius: '6px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '15px', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>
                  {activeChapter === 'leon' ? 'CUÁNDO' : 'WHEN'}
                </span>
                <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
                  {chapters.find(c => c.id === activeChapter)?.schedule.when}
                </p>
              </motion.div>
              <motion.div key={`cost-${activeChapter}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} style={{
                flex: '1 1 260px',
                maxWidth: '320px',
                background: 'var(--color-maroon-card)',
                borderRadius: '6px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '15px', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>
                  {activeChapter === 'leon' ? 'COSTO' : 'COST'}
                </span>
                <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
                  {chapters.find(c => c.id === activeChapter)?.schedule.cost}
                </p>
              </motion.div>
              <motion.div key={`who-${activeChapter}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} style={{
                flex: '1 1 260px',
                maxWidth: '320px',
                background: 'var(--color-maroon-card)',
                borderRadius: '6px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '15px', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>
                  {activeChapter === 'leon' ? 'QUIÉN' : 'WHO'}
                </span>
                <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
                  {chapters.find(c => c.id === activeChapter)?.schedule.who}
                </p>
              </motion.div>
            </>
          )}
        </motion.div>

      </div>
    </motion.section>
  );
}
