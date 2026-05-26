import Image from 'next/image';
import Link from 'next/link';

export default function PremiumHero() {
  return (
    <section style={{
      width: '100%',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
      // Solid background using primary brand color
      backgroundColor: '#4B2E2B',
      padding: '40px 24px',
      color: 'white'
    }}>
      {/* Content wrapper mimicking the horizontal split */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        
        {/* Left Side: Text block */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '16px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '6px 12px',
            borderRadius: '16px',
            backdropFilter: 'blur(4px)'
          }}>
            Grilled Grinders, Lalpur
          </span>
          <h1 className="font-heading" style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '16px',
            maxWidth: '400px'
          }}>
            Fresh Grills • Premium Coffee • Fast Bites
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#E0E0E0', /* Light gray per spec */
            marginBottom: '24px',
            maxWidth: '400px',
            lineHeight: 1.5
          }}>
            Lalpur's favorite spot for grilled sandwiches, burgers, shakes, and coffee. A cozy Ranchi café perfect for hangouts, meetings, and quick cravings.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/menu" className="btn btn-light" style={{ padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600 }}>
                View Menu
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 600
              }}>
                Order & Dining
              </span>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://www.swiggy.com/city/ranchi/grilled-grinders-lalpur-rest149305" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="order-badge"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '10px',
                     backgroundColor: '#FFFFFF',
                     padding: '10px 20px',
                     borderRadius: '30px',
                     textDecoration: 'none',
                     border: '1px solid rgba(255, 255, 255, 0.8)',
                     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                   }}>
                  <img src="/swiggy.png" alt="Swiggy" style={{ height: '20px', objectFit: 'contain', borderRadius: '0' }} />
                  <span style={{ color: '#FC8019', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--font-body)' }}>Swiggy</span>
                </a>
                <a href="https://www.zomato.com/ranchi/grilled-grinders-lalpur" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="order-badge"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '10px',
                     backgroundColor: '#FFFFFF',
                     padding: '10px 20px',
                     borderRadius: '30px',
                     textDecoration: 'none',
                     border: '1px solid rgba(255, 255, 255, 0.8)',
                     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                   }}>
                  <img src="/zomato.png" alt="Zomato" style={{ height: '16px', objectFit: 'contain', borderRadius: '0' }} />
                  <span style={{ color: '#E23744', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--font-body)' }}>Zomato</span>
                </a>
                <a href="https://www.district.in/dining/ranchi/grilled-grinders-lalpur" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="order-badge"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '10px',
                     backgroundColor: '#FFFFFF',
                     padding: '10px 20px',
                     borderRadius: '30px',
                     textDecoration: 'none',
                     border: '1px solid rgba(255, 255, 255, 0.8)',
                     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                   }}>
                  <img src="/district.png" alt="District" style={{ height: '18px', objectFit: 'contain', borderRadius: '0' }} />
                  <span style={{ color: '#0F2A27', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--font-body)' }}>District</span>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
