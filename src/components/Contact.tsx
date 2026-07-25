import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  activeChapter?: ChapterId | null;
}

export default function Contact({ activeChapter: _activeChapter }: ContactProps) {
  const { isSpanish } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Using FormSubmit to send to personal email
      const response = await fetch('https://formsubmit.co/ajax/jr.fabito@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{
        padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '64px',
        alignItems: 'flex-start'
      }}>
      <motion.div variants={itemVariants} style={{ flex: '1 1 380px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.12em',
          color: 'var(--color-plum)'
        }}>
          {isSpanish ? 'PONTE EN CONTACTO' : 'GET IN TOUCH'}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(28px,3.6vw,42px)',
          margin: 0,
          color: 'var(--color-ink)'
        }}>
          {isSpanish ? 'Únete a una clase' : 'Join a Class'}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
          {isSpanish
            ? 'Envíanos un mensaje y te prepararemos para tu primera clase en cualquiera de nuestros grupos: sin experiencia, sin equipo, solo ven.'
            : 'Send us a note and we\'ll get you set up for your first class at any of our chapters — no experience, no gear, just show up.'}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
          <span style={{ fontSize: '15px', color: 'var(--color-ink)', fontWeight: 600 }}>
            {isSpanish ? 'Sirviendo a Concord, Long Beach y León' : 'Serving Concord, Long Beach, and León'}
          </span>
        </div>
      </motion.div>
      <motion.form variants={itemVariants} onSubmit={handleSubmit} style={{ flex: '1 1 380px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          id="name"
          required
          type="text"
          name="name"
          placeholder={isSpanish ? 'Tu nombre' : 'Your name'}
          style={{ padding: '14px 16px', border: '1px solid var(--color-input-border)', borderRadius: '4px', fontSize: '15px', fontFamily: 'var(--font-body)' }}
        />
        <input
          id="email"
          required
          type="email"
          name="email"
          placeholder={isSpanish ? 'Correo electrónico' : 'Email address'}
          style={{ padding: '14px 16px', border: '1px solid var(--color-input-border)', borderRadius: '4px', fontSize: '15px', fontFamily: 'var(--font-body)' }}
        />
        <textarea
          id="message"
          required
          name="message"
          placeholder={isSpanish ? 'Cuéntanos un poco sobre ti' : 'Tell us a bit about yourself'}
          rows={4}
          style={{ padding: '14px 16px', border: '1px solid var(--color-input-border)', borderRadius: '4px', fontSize: '15px', fontFamily: 'var(--font-body)', resize: 'vertical' }}
        ></textarea>
        <motion.button
          type="submit"
          disabled={status === 'success' || status === 'submitting'}
          whileHover={{ scale: (status === 'success' || status === 'submitting') ? 1 : 1.05 }}
          whileTap={{ scale: (status === 'success' || status === 'submitting') ? 1 : 0.98 }}
          style={{
            background: status === 'success' ? '#2F7C48' : status === 'error' ? '#D32F2F' : 'var(--color-plum)',
            color: '#FFFFFF',
            border: 0,
            padding: '16px',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.05em',
            borderRadius: '4px',
            cursor: (status === 'success' || status === 'submitting') ? 'default' : 'pointer',
            transition: 'background 0.3s',
            opacity: status === 'submitting' ? 0.7 : 1
          }}
        >
          {status === 'submitting'
            ? (isSpanish ? 'ENVIANDO...' : 'SENDING...')
            : status === 'success'
            ? (isSpanish ? '¡MENSAJE ENVIADO!' : 'MESSAGE SENT!')
            : status === 'error'
            ? (isSpanish ? '¡ERROR! INTENTA DE NUEVO.' : 'ERROR! TRY AGAIN.')
            : (isSpanish ? 'ENVIAR MENSAJE' : 'SEND MESSAGE')}
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
