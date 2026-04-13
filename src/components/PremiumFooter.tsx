'use client';
export default function PremiumFooter() {
  return (
    <footer style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '40px',
      borderTop: '1px solid rgba(75, 46, 43, 0.1)',
      paddingTop: '40px',
      marginTop: '40px'
    }}>
      
      {/* Brand & Address */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 className="font-heading" style={{ fontSize: '18px', color: 'var(--primary)' }}>Grilled Grinders</h3>
        <p className="text-muted text-small" style={{ lineHeight: '1.6' }}>
          123 Coffee Ave.<br />
          Brew City, BC 90210
        </p>
      </div>

      {/* Coffee Menu */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Coffee Menu</h4>
        <a href="#" className="text-muted text-small" style={{ textDecoration: 'none' }}>Espresso</a>
        <a href="#" className="text-muted text-small" style={{ textDecoration: 'none' }}>Cappuccino</a>
        <a href="#" className="text-muted text-small" style={{ textDecoration: 'none' }}>Lattes</a>
      </div>

      {/* About Us */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>About Us</h4>
        <a href="#" className="text-muted text-small" style={{ textDecoration: 'none' }}>Our Story</a>
        <a href="#" className="text-muted text-small" style={{ textDecoration: 'none' }}>Careers</a>
        <a href="#" className="text-muted text-small" style={{ textDecoration: 'none' }}>Contact</a>
      </div>

      {/* Social Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Follow Us</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          {['IG', 'FB', 'TK'].map(social => (
            <div key={social} style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {social}
            </div>
          ))}
        </div>
      </div>

    </footer>
  );
}
