import Image from 'next/image';
import logoImg from '../../public/grilled-grinders.png';

export default function PremiumFooter() {
  return (
    <footer style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      borderTop: '1px solid rgba(75, 46, 43, 0.1)',
      paddingTop: '40px',
      marginTop: '40px',
      paddingBottom: '40px'
    }}>
      
      {/* Brand & Address */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Circular Logo */}
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            border: '1px solid var(--primary)',
            background: 'white',
            position: 'relative',
            flexShrink: 0
          }}>
            <Image 
              src={logoImg} 
              alt="Grilled Grinders Logo" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="font-heading" style={{ 
              fontSize: '16px', 
              fontWeight: 700, 
              color: 'var(--primary)', 
              lineHeight: 1.1,
              textTransform: 'uppercase'
            }}>
              Grilled Grinders
            </span>
            <span className="font-body" style={{ 
              fontSize: '8px', 
              fontWeight: 600, 
              color: '#B8860B',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Premium Cafe & Grill
            </span>
          </div>
        </div>

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
            <div key={social} className="social-icon-hover" style={{
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
              cursor: 'pointer'
            }}>
              {social}
            </div>
          ))}
        </div>
      </div>

    </footer>
  );
}
