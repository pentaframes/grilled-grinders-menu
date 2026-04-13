'use client';
export default function PremiumHeader() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '32px',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
      {/* Left: Logo */}
      <div className="font-heading" style={{ fontSize: '22px', fontWeight: 600, color: 'var(--primary)' }}>
        Grilled Grinders
      </div>

      {/* Center: Desktop Nav (Hidden on small mobile for simplicity, but flex wrapping handles it gracefully) */}
      <nav style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
        {['Home', 'Menu', 'About', 'Gallery'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: '14px',
            color: 'var(--text)',
            textDecoration: 'none',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: '48px', // Mobile touch target rule
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right: CONTACT Button */}
      <button className="btn btn-primary" style={{ textTransform: 'uppercase', fontSize: '13px', padding: '10px 24px' }}>
        Contact
      </button>

    </header>
  );
}
