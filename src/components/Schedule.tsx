import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}

interface ScheduleProps {
  activeChapter: ChapterId | null;
  setActiveChapter: (id: ChapterId) => void;
}

export default function Schedule({ activeChapter, setActiveChapter }: ScheduleProps) {
  const { language, isSpanish } = useLanguage();
  const activeChapterData = chapters.find(c => c.id === activeChapter);
  const currentSchedule = activeChapterData?.schedule[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.section
      id="schedule"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
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
            {isSpanish ? 'ÚNETE A UNA CLASE' : 'JOIN A CLASS'}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(28px,3.6vw,42px)',
            margin: 0,
            color: '#FFFFFF'
          }}>
            {isSpanish ? 'Cómo participar' : 'How to participate'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--color-muted-on-maroon)', maxWidth: '640px', margin: 0 }}>
            {isSpanish 
              ? 'No necesitas experiencia, solo trae ropa cómoda, una botella de agua y una mente abierta. Nuevos estudiantes siempre son bienvenidos.'
              : 'No experience needed — just bring comfortable clothes, a bottle of water, and an open mind. New students and drop-ins are always welcome.'}
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
                {isSpanish ? 'Elige una ubicación arriba para ver el horario.' : 'Choose a location above to see the schedule.'}
              </p>
            </motion.div>
          ) : (
            <>
              {currentSchedule?.alert && (
                <motion.div
                  key={`alert-${activeChapter}`}
                  initial={{ opacity: 0, y: -15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{
                    width: '100%',
                    maxWidth: '1008px',
                    background: 'linear-gradient(135deg, rgba(217, 164, 65, 0.18) 0%, rgba(217, 164, 65, 0.06) 100%)',
                    border: '1px solid rgba(217, 164, 65, 0.45)',
                    borderRadius: '8px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(217, 164, 65, 0.2)',
                    color: 'var(--color-gold)',
                    flexShrink: 0,
                    border: '1px solid rgba(217, 164, 65, 0.3)'
                  }}>
                    <AlertIcon />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase'
                    }}>
                      {isSpanish ? 'AVISO DE HORARIO' : 'SCHEDULE NOTICE'}
                    </span>
                    <p style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.5
                    }}>
                      {currentSchedule.alert}
                    </p>
                  </div>
                </motion.div>
              )}
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
                  {isSpanish ? 'CUÁNDO' : 'WHEN'}
                </span>
                <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
                  {currentSchedule?.when}
                </p>
              </motion.div>
              {currentSchedule?.cost && (
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
                    {isSpanish ? 'COSTO' : 'COST'}
                  </span>
                  <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
                    {currentSchedule.cost}
                  </p>
                </motion.div>
              )}
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
                  {isSpanish ? 'QUIÉN' : 'WHO'}
                </span>
                <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
                  {currentSchedule?.who}
                </p>
              </motion.div>
              {activeChapterData?.social && (
                <motion.div
                  key={`social-${activeChapter}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    flexWrap: 'wrap',
                    marginTop: '16px'
                  }}
                >
                  {activeChapterData.social.instagram && (
                    <motion.a
                      href={activeChapterData.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 24px',
                        background: 'var(--color-maroon-card)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '40px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '0.04em',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      <InstagramIcon />
                      <span>{activeChapterData.social.instagram.handle}</span>
                    </motion.a>
                  )}
                  {activeChapterData.social.facebook && (
                    <motion.a
                      href={activeChapterData.social.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 24px',
                        background: 'var(--color-maroon-card)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '40px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '0.04em',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      <FacebookIcon />
                      <span>{activeChapterData.social.facebook.handle}</span>
                    </motion.a>
                  )}
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
