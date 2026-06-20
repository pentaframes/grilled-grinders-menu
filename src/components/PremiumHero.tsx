import Image from 'next/image';
import Link from 'next/link';

export default function PremiumHero() {
  return (
    <section style={{
      width: '100%',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '450px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
      backgroundColor: '#4B2E2B',
      padding: '60px 24px',
      color: 'white'
    }}>
      {/* Background Image and Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}>
        <img
          src="https://res.cloudinary.com/df65nwcxa/image/upload/v1780292051/DSC_8458_t3w2gp.jpg"
          alt="Café atmosphere background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '0'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(42, 26, 24, 0.95) 0%, rgba(42, 26, 24, 0.8) 50%, rgba(42, 26, 24, 0.4) 100%)'
        }} />
      </div>

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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontSize: 'clamp(10px, 2.5vw, 12px)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: '6px 12px',
              borderRadius: '16px',
              backdropFilter: 'blur(4px)'
            }}>
              Grilled Grinders & C/O Bengali
            </span>
          </div>
          <h1 className="font-heading" style={{
            fontSize: 'clamp(24px, 7vw, 40px)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '8px',
            maxWidth: '440px'
          }}>
           Fresh Grills • Premium Coffee • Fast Bites
          </h1>
          <p style={{
            fontSize: 'clamp(12px, 3vw, 14px)',
            color: '#B8860B',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            Bengali Cloud Kitchen
          </p>
          <p style={{
            fontSize: 'clamp(13px, 3.5vw, 16px)',
            color: '#E0E0E0',
            marginBottom: '12px',
            maxWidth: '420px',
            lineHeight: 1.6
          }}>
            Serving authentic Bengali cuisine with care and passion. We also do catering for birthdays, kitty parties, anniversaries, get-togethers, festivals & more.
          </p>
          <p style={{
            fontSize: 'clamp(12px, 3vw, 14px)',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '24px',
            fontStyle: 'italic',
            letterSpacing: '0.04em'
          }}>
            Taste · Tradition · Trust
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/menu" className="btn btn-light" style={{ padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600 }}>
                View Menu
              </Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{
                fontSize: 'clamp(10px, 2.5vw, 12px)',
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
                  <span style={{ color: '#FC8019', fontWeight: 700, fontSize: 'clamp(12px, 3vw, 14px)', fontFamily: 'var(--font-body)' }}>Swiggy</span>
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
                  <span style={{ color: '#E23744', fontWeight: 700, fontSize: 'clamp(12px, 3vw, 14px)', fontFamily: 'var(--font-body)' }}>Zomato</span>
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
                  <span style={{ color: '#0F2A27', fontWeight: 700, fontSize: 'clamp(12px, 3vw, 14px)', fontFamily: 'var(--font-body)' }}>District</span>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
