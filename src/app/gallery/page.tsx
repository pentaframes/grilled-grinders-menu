import PremiumHeader from '@/components/PremiumHeader';
import PremiumFooter from '@/components/PremiumFooter';

export default function GalleryPage() {
  return (
    <>
      <PremiumHeader />
      <div style={{ paddingTop: '100px', padding: '100px 24px 0', textAlign: 'center' }}>
        <h1 className="font-heading" style={{ marginBottom: '24px' }}>Gallery</h1>
        <p className="text-muted">Explore our café and creations.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginTop: '40px'
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
