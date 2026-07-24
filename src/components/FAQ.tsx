import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first

  const faqs = [
    { q: 'Do I need any experience or gear?', a: 'None at all. Come in comfortable clothes you can move in, bare feet, and a water bottle — we\'ll take care of the rest.' },
    { q: 'What ages can join?', a: 'Depending on the location, we offer classes for kids, teens, and adults. Please check the schedule section for your specific chapter.' },
    { q: 'Is the first class really free?', a: 'Yes — your first class is on us. After that, pricing varies by chapter. Check the schedule section for details.' },
    { q: 'What should I bring?', a: 'Just yourself, comfortable clothing, and a water bottle. We provide the music and the community.' },
    { q: 'Where are your chapters located?', a: 'We currently hold classes in Concord, CA, Long Beach, CA, and León, Mexico.' },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{ background: 'var(--color-maroon)', padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)' }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.12em',
            color: 'var(--color-gold)'
          }}>
            GOOD TO KNOW
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(28px,3.6vw,42px)',
            margin: 0,
            color: '#FFFFFF'
          }}>
            Frequently asked questions
          </h2>
        </motion.div>
        <motion.div variants={containerVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div variants={itemVariants} key={i} style={{ borderBottom: '1px solid var(--color-divider)' }}>
                <button
                  id={`faq-button-${i}`}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 0,
                    padding: '22px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', color: '#FFFFFF' }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: '22px',
                    color: 'var(--color-gold)',
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ margin: '0 4px 22px', fontSize: '15px', lineHeight: 1.7, color: 'var(--color-muted-on-maroon)', maxWidth: '680px' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
