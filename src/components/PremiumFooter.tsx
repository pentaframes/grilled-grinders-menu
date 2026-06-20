import Image from 'next/image';
import logoImg from '../../public/menu-img.png';

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
              Bengali Cloud Kitchen
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

      {/* Order & Dining */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Order & Dining</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="https://www.swiggy.com/city/ranchi/grilled-grinders-lalpur-rest149305" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#FFF2E6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #FFE0CC'
            }}>
              <img src="/swiggy.png" alt="Swiggy" style={{ height: '16px', objectFit: 'contain', borderRadius: '0' }} />
            </div>
            <span className="text-muted text-small nav-link-hover" style={{ fontWeight: 600 }}>Swiggy</span>
          </a>
          <a href="https://www.zomato.com/ranchi/grilled-grinders-lalpur" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#FFF0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #FFE0E0'
            }}>
              <img src="/zomato.png" alt="Zomato" style={{ height: '12px', objectFit: 'contain', borderRadius: '0' }} />
            </div>
            <span className="text-muted text-small nav-link-hover" style={{ fontWeight: 600 }}>Zomato</span>
          </a>
          <a href="https://www.district.in/dining/ranchi/grilled-grinders-lalpur" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#E6EFEF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #CCE0E0',
              overflow: 'hidden'
            }}>
              <img src="/district.png" alt="District" style={{ height: '16px', objectFit: 'contain', borderRadius: '0' }} />
            </div>
            <span className="text-muted text-small nav-link-hover" style={{ fontWeight: 600 }}>District</span>
          </a>
        </div>
      </div>

      {/* Contact */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Contact Us</h4>
        <a href="tel:9334473003" style={{ textDecoration: 'none' }}>
          <span className="text-muted text-small nav-link-hover">📞 9334473003</span>
        </a>
        <a href="tel:9334184255" style={{ textDecoration: 'none' }}>
          <span className="text-muted text-small nav-link-hover">📞 9334184255</span>
        </a>
        <span className="text-muted text-small" style={{ fontStyle: 'italic', marginTop: '4px' }}>
          Taste · Tradition · Trust
        </span>
      </div>

      {/* Social Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 className="font-heading" style={{ fontSize: '16px' }}>Follow Us</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://www.instagram.com/grilledgrinders/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon-hover" 
             style={{
               width: '40px',
               height: '40px',
               borderRadius: '50%',
               backgroundColor: 'var(--primary)',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               cursor: 'pointer',
               textDecoration: 'none',
               overflow: 'hidden'
             }}>
            <img src="/insta.jpg" alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </a>
        </div>
      </div>

    </footer>
  );
}
