import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';
import { useLightbox } from '../context/LightboxContext';
import { trackEvent } from '../utils/analytics';

interface InstructorsProps {
  activeChapter?: ChapterId | null;
}

interface InstructorInfo {
  name: string;
  image: string;
  fallbackImage: string;
  bioEn: string;
  bioEs: string;
  fullBioEn?: string[];
  fullBioEs?: string[];
  reverse?: boolean;
}

export default function Instructors({ activeChapter: _activeChapter }: InstructorsProps) {
  const { isSpanish } = useLanguage();
  const { openLightbox } = useLightbox();
  const [bioModal, setBioModal] = useState<{
    name: string;
    image: string;
    fallbackImage: string;
    paragraphs: string[];
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBioModal(null);
    };
    if (bioModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [bioModal]);

  const instructorsData: InstructorInfo[] = [
    {
      name: 'Mestre Preguiça',
      image: '/assets/mestre-preguica.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2835&auto=format&fit=crop',
      bioEn: 'A pioneering, influential figure of contemporary Capoeira for 50+ years. In 1996, Mestre Preguiça moved to Rio de Janeiro and founded Grupo Senzala, which gained worldwide recognition and became one of the most prominent Capoeira styles in Brazil. In 1984 he moved to San Francisco, where he founded a Community Action Program focused on mentorship, guidance, and community Capoeira classes.',
      bioEs: 'Una figura pionera e influyente de la Capoeira contemporánea por más de 50 años. En 1996, Mestre Preguiça se mudó a Río de Janeiro y fundó el Grupo Senzala, que obtuvo reconocimiento mundial y se convirtió en uno de los estilos de Capoeira más destacados de Brasil. En 1984 se mudó a San Francisco, donde fundó un Programa de Acción Comunitaria centrado en mentoría, orientación y clases comunitarias de Capoeira.',
      reverse: false
    },
    {
      name: 'Mestre Espantalho',
      image: '/assets/mestre-espantalho.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1549889656-1b44ebf2ff83?q=80&w=2938&auto=format&fit=crop',
      bioEn: 'Born in San Francisco and raised in Mexico, Espantalho returned to San Francisco in 1994 and began training with Mestre Preguiça. He has taught capoeira in Mexico, Canada, and Brazil, and after 30 years of dedication, earned the rank of Mestre. When he\'s not teaching, he enjoys cooking, making capoeira instruments, and spending time with his daughter.',
      bioEs: 'Nacido en San Francisco y criado en México, Espantalho regresó a San Francisco en 1994 y comenzó a entrenar con Mestre Preguiça. Ha enseñado capoeira en México, Canadá y Brasil, y después de 30 años de dedicación, obtuvo el rango de Mestre. Cuando no está enseñando, disfruta cocinar, fabricar instrumentos de capoeira y pasar tiempo con su hija.',
      reverse: true
    },
    {
      name: 'Mestra Sombra',
      image: '/assets/mestra-sombra.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
      bioEn: 'Bio coming soon.',
      bioEs: 'Biografía próximamente.',
      reverse: false
    },
    {
      name: 'Graduado Palito',
      image: '/assets/graduado-palito.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
      bioEn: 'Óscar Hurtado, known in the capoeira community as “Palito,” began his capoeira journey in 2011 at the age of 8 in León, Guanajuato, Mexico. Today, he has nearly 15 years of experience practicing this Afro-Brazilian art. A graduate in Physical Education and Sports, he currently leads Capoeira Cura classes in León, Guanajuato, promoting its culture, discipline, and values.',
      bioEs: 'Óscar Hurtado, conocido en la capoeira como “Palito”, comenzó su formación en capoeira en el año 2011, a los 8 años de edad, en León, Guanajuato, México. Actualmente cuenta con casi 15 años de trayectoria en este arte afrobrasileño. Es Licenciado en Cultura Física y Deportes y actualmente dirige las clases de Capoeira Cura en León, Guanajuato, México.',
      fullBioEn: [
        'Óscar Hurtado, known in the capoeira community as “Palito,” began his capoeira journey in 2011 at the age of 8 in León, Guanajuato, Mexico. Today, he has nearly 15 years of experience practicing this Afro-Brazilian art.',
        'At the age of 17, after no longer having an instructor, he continued his development as a self-taught practitioner. One year later, he began teaching capoeira to children and teenagers, marking the beginning of his career as an instructor.',
        'He holds a Bachelor’s Degree in Physical Education and Sports and is currently a member of Capoeira Cura, where he leads classes in León, Guanajuato, Mexico. He holds the rank of Graduado and remains committed to sharing capoeira by promoting its culture, discipline, and values.'
      ],
      fullBioEs: [
        'Óscar Hurtado, conocido en la capoeira como “Palito”, comenzó su formación en capoeira en el año 2011, a los 8 años de edad, en León, Guanajuato, México. Actualmente cuenta con casi 15 años de trayectoria en este arte afrobrasileño.',
        'A los 17 años, tras quedarse sin instructor, continuó su desarrollo de manera autodidacta. Un año después comenzó a impartir clases a niños y jóvenes, iniciando así su camino como instructor.',
        'Es Licenciado en Cultura Física y Deportes y actualmente forma parte del grupo Capoeira Cura, donde dirige las clases en León, Guanajuato, México. Posee la graduación de Graduado y mantiene el compromiso de difundir la capoeira, promoviendo su cultura, disciplina y valores.'
      ],
      reverse: true
    }
  ];

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
    <>
      <motion.section 
        id="instructors" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        style={{ background: 'var(--color-alt-bg)', padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          <motion.div variants={itemVariants} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 700, 
              fontSize: '13px', 
              letterSpacing: '0.12em', 
              color: 'var(--color-plum)' 
            }}>
              {isSpanish ? 'NUESTRO LINAJE' : 'OUR LINEAGE'}
            </span>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(28px,3.6vw,42px)', 
              margin: 0, 
              color: 'var(--color-ink)' 
            }}>
              {isSpanish ? 'Conoce a los instructores' : 'Meet the instructors'}
            </h2>
          </motion.div>
          {instructorsData.map((inst, idx) => {
            const imageElement = (
              <motion.img 
                key={`img-${idx}`}
                src={inst.image} 
                alt={inst.name} 
                loading="lazy"
                onClick={(e) => openLightbox((e.target as HTMLImageElement).src, inst.name)}
                whileHover={{ scale: 1.03 }}
                style={{ flex: '1 1 320px', minWidth: '240px', maxWidth: '380px', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '10px', cursor: 'zoom-in' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = inst.fallbackImage;
                }}
              />
            );

            const textElement = (
              <div key={`text-${idx}`} style={{ flex: '1 1 420px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', margin: 0, color: 'var(--color-ink)' }}>
                  {inst.name}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
                  {isSpanish ? inst.bioEs : inst.bioEn}
                </p>
                {(inst.fullBioEn || inst.fullBioEs) && (
                  <button
                    onClick={() => { setBioModal({
                      name: inst.name,
                      image: inst.image,
                      fallbackImage: inst.fallbackImage,
                      paragraphs: isSpanish ? (inst.fullBioEs || []) : (inst.fullBioEn || [])
                    }); trackEvent('Instructor Bio Viewed', { instructor: inst.name }); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--color-plum)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '16px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '4px',
                      alignSelf: 'flex-start',
                      transition: 'color 0.2s, transform 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-plum-hover)';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-plum)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {isSpanish ? 'Leer más →' : 'Read more →'}
                  </button>
                )}
              </div>
            );

            return (
              <motion.div 
                key={inst.name}
                variants={itemVariants} 
                style={{ display: 'flex', flexWrap: inst.reverse ? 'wrap-reverse' : 'wrap', gap: '56px', alignItems: 'center' }}
              >
                {inst.reverse ? [textElement, imageElement] : [imageElement, textElement]}
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <AnimatePresence>
        {bioModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setBioModal(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(10, 8, 12, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(16px, 4vw, 32px)',
              cursor: 'zoom-out'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '16px',
                padding: 'clamp(24px, 5vw, 40px)',
                maxWidth: '640px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid var(--color-input-border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                cursor: 'default'
              }}
            >
              <button
                onClick={() => setBioModal(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--color-alt-bg)',
                  border: '1px solid var(--color-input-border)',
                  color: 'var(--color-ink)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  fontSize: '20px',
                  lineHeight: 1,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-plum)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--color-plum)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-alt-bg)';
                  e.currentTarget.style.color = 'var(--color-ink)';
                  e.currentTarget.style.borderColor = 'var(--color-input-border)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingRight: '40px' }}>
                <img
                  src={bioModal.image}
                  alt={bioModal.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--color-plum)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = bioModal.fallbackImage;
                  }}
                />
                <div>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    color: 'var(--color-plum)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px'
                  }}>
                    {isSpanish ? 'BIOGRAFÍA COMPLETA' : 'FULL BIOGRAPHY'}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    margin: 0,
                    color: 'var(--color-ink)'
                  }}>
                    {bioModal.name}
                  </h3>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--color-input-border)', width: '100%' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {bioModal.paragraphs.map((paragraph, index) => (
                  <p key={index} style={{
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: 'var(--color-muted)',
                    margin: 0,
                    textWrap: 'pretty'
                  }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
