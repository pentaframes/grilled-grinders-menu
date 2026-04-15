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
              North Indian Fast Food
            </span>
          </div>
        </div>

        <p className="text-muted text-small" style={{ lineHeight: '1.6' }}>
          Uddhab Babu Street, Anna School Lane,<br />
          New Barhi Toli, Lalpur, Ranchi
        </p>
      </div>

      {/* Service */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Service</h4>
        <span className="text-muted text-small">Takeaway</span>
        <span className="text-muted text-small">Home Delivery</span>
        <span className="text-muted text-small">Dine-In</span>
      </div>

      {/* Timings */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Timings</h4>
        <span className="text-muted text-small">Open Daily</span>
        <span className="text-muted text-small">9:00 AM - 9:00 PM</span>
        <span className="text-muted text-small">Cost for two: ₹200</span>
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
