import { motion } from 'framer-motion';

export default function Location() {
  const showOtherLocations = true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{ 
        padding: 'clamp(70px,9vw,120px) clamp(20px,6vw,80px)', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '48px' 
      }}>
      <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800, 
          fontSize: 'clamp(26px,3.2vw,38px)', 
          margin: 0, 
          color: 'var(--color-ink)' 
        }}>
          Where is the class?
        </h2>
        <p style={{ fontSize: '17px', margin: 0 }}>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=2450+Grant+St+Concord+CA+94520" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--color-muted)', fontWeight: 600 }}
          >
            2450 Grant St., Concord, CA 94520 ↗
          </a>
        </p>
        {showOtherLocations && (
          <p style={{ fontSize: '14px', margin: '4px 0 0', color: 'var(--color-muted-darker-on-maroon)' }}>
            We also have sister groups training in Long Beach, CA and León, Mexico.
          </p>
        )}
      </motion.div>
      <motion.div variants={itemVariants} style={{ width: '100%', aspectRatio: '16/6', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe 
          title="Google Map location for Capoeira Cura"
          src="https://www.google.com/maps?q=2450+Grant+St+Concord+CA+94520&output=embed" 
          style={{ width: '100%', height: '100%', border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
      <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 }}>
          <img 
            src="/assets/loc-parking.jpg" 
            alt="Parking lot near the studio" 
            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2940&auto=format&fit=crop';
            }}
          />
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', margin: '0 0 4px', color: 'var(--color-ink)' }}>Parking Lot</h3>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)' }}>Street parking on Grant St., closest to the studio entrance.</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 }}>
          <img 
            src="/assets/loc-studio.jpg" 
            alt="Dance studio building" 
            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: '8px' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518042456426-ed877bc954fb?q=80&w=2942&auto=format&fit=crop';
            }}
          />
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', margin: '0 0 4px', color: 'var(--color-ink)' }}>Dance Studio</h3>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)' }}>Walk toward the building — you'll hear the berimbau before you see the door.</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
