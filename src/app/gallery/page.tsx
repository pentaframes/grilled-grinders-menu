import PremiumHeader from '@/components/PremiumHeader';
import PremiumFooter from '@/components/PremiumFooter';

export default function GalleryPage() {
  return (
    <>
      <PremiumHeader />
      <div style={{ padding: '100px 24px 0', textAlign: 'center' }}>
        <h1 className="font-heading" style={{ marginBottom: '24px' }}>Gallery</h1>
        <p className="text-muted">Explore our café and creations.</p>
        
        {/* Featured YouTube Video Showcase */}
        <div style={{
          maxWidth: '800px',
          margin: '40px auto 0',
          backgroundColor: '#EFE6DC',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: 'var(--shadow-card)'
        }}>
          <h2 className="font-heading" style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--primary)' }}>
            Featured Video
          </h2>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <iframe
              src="https://www.youtube.com/embed/a3wASIRgJOk"
              title="Grilled Grinders Ranchi Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginTop: '16px',
            fontWeight: 500
          }}>
            Featured Recipe from our channel: <span style={{ color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>Priya's Royal Rasoi</span>
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginTop: '60px',
          marginBottom: '40px'
        }}>
          {[1,2,3,4,5,6].map(i => (
             <div key={i} style={{
               height: '200px',
               backgroundColor: 'var(--surface)',
               border: '1px solid rgba(75, 46, 43, 0.1)',
               borderRadius: '16px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontSize: '2rem'
             }}>
               📸
             </div>
          ))}
        </div>
      </div>
      <PremiumFooter />
    </>
  );
}
