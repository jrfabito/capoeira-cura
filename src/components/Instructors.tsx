import { motion } from 'framer-motion';
import type { ChapterId } from '../data/chapters';
import { useLanguage } from '../context/LanguageContext';

interface InstructorsProps {
  activeChapter?: ChapterId | null;
}

export default function Instructors({ activeChapter: _activeChapter }: InstructorsProps) {
  const { isSpanish } = useLanguage();

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
        <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center' }}>
          <img 
            src="/assets/mestre-preguica.jpg" 
            alt="Mestre Preguiça" 
            loading="lazy"
            style={{ flex: '1 1 320px', minWidth: '240px', maxWidth: '380px', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '10px' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2835&auto=format&fit=crop';
            }}
          />
          <div style={{ flex: '1 1 420px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', margin: 0, color: 'var(--color-ink)' }}>
              Mestre Preguiça
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
              {isSpanish 
                ? 'Una figura pionera e influyente de la Capoeira contemporánea por más de 50 años. En 1996, Mestre Preguiça se mudó a Río de Janeiro y fundó el Grupo Senzala, que obtuvo reconocimiento mundial y se convirtió en uno de los estilos de Capoeira más destacados de Brasil. En 1984 se mudó a San Francisco, donde fundó un Programa de Acción Comunitaria centrado en mentoría, orientación y clases comunitarias de Capoeira.'
                : 'A pioneering, influential figure of contemporary Capoeira for 50+ years. In 1996, Mestre Preguiça moved to Rio de Janeiro and founded Grupo Senzala, which gained worldwide recognition and became one of the most prominent Capoeira styles in Brazil. In 1984 he moved to San Francisco, where he founded a Community Action Program focused on mentorship, guidance, and community Capoeira classes.'}
            </p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '56px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 420px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', margin: 0, color: 'var(--color-ink)' }}>
              Mestre Espantalho
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--color-muted)', margin: 0, textWrap: 'pretty' }}>
              {isSpanish
                ? 'Nacido en San Francisco y criado en México, Espantalho regresó a San Francisco en 1994 y comenzó a entrenar con Mestre Preguiça. Ha enseñado capoeira en México, Canadá y Brasil, y después de 30 años de dedicación, obtuvo el rango de Mestre. Cuando no está enseñando, disfruta cocinar, fabricar instrumentos de capoeira y pasar tiempo con su hija.'
                : 'Born in San Francisco and raised in Mexico, Espantalho returned to San Francisco in 1994 and began training with Mestre Preguiça. He has taught capoeira in Mexico, Canada, and Brazil, and after 30 years of dedication, earned the rank of Mestre. When he\'s not teaching, he enjoys cooking, making capoeira instruments, and spending time with his daughter.'}
            </p>
          </div>
          <img 
            src="/assets/mestre-espantalho.jpg" 
            alt="Mestre Espantalho" 
            loading="lazy"
            style={{ flex: '1 1 320px', minWidth: '240px', maxWidth: '380px', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '10px' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549889656-1b44ebf2ff83?q=80&w=2938&auto=format&fit=crop';
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
