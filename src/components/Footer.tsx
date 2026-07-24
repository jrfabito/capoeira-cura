

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--color-maroon-dark)', 
      padding: '40px clamp(20px,6vw,80px)', 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px', 
      alignItems: 'center', 
      justifyContent: 'space-between' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/logo.png" 
          alt="Capoeira Cura Logo" 
          style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
        />
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 800, 
          fontSize: '14px', 
          color: 'var(--color-alt-bg)', 
          letterSpacing: '0.04em' 
        }}>
          CAPOEIRA CURA
        </span>
      </div>
      <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <a href="#about" style={{ color: 'var(--color-muted-dark-on-maroon)', fontSize: '13px', fontWeight: 600 }}>ABOUT</a>
        <a href="#schedule" style={{ color: 'var(--color-muted-dark-on-maroon)', fontSize: '13px', fontWeight: 600 }}>SCHEDULE</a>
        <a href="#videos" style={{ color: 'var(--color-muted-dark-on-maroon)', fontSize: '13px', fontWeight: 600 }}>VIDEOS</a>
        <a href="#contact" style={{ color: 'var(--color-muted-dark-on-maroon)', fontSize: '13px', fontWeight: 600 }}>CONTACT</a>
      </nav>
      <span style={{ color: 'var(--color-muted-darker-on-maroon)', fontSize: '13px' }}>
        © 2026 Capoeira Cura
      </span>
    </footer>
  );
}
