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
      // Simulating the blurred coffee background image with a placeholder
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/fallback.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
            Fresh Coffee
          </span>
          <h1 className="font-heading" style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '16px',
            maxWidth: '400px'
          }}>
            Brewed Fresh, Served Warm
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#E0E0E0', /* Light gray per spec */
            marginBottom: '24px',
            maxWidth: '400px',
            lineHeight: 1.5
          }}>
            Experience the finest selection of hand-crafted espresso, baked goods, and warming atmospheres.
          </p>
          <button className="btn btn-light" style={{ padding: '12px 28px' }}>
            Visit us
          </button>
        </div>

        {/* Right Side: Mock Coffee Cup Image */}
        <div style={{
          flex: '1 1 300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Circular placeholder mimicking the sharp focal cup on saucer */}
          <div style={{
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            backgroundColor: '#F4EFE8',
            border: '8px solid white',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px'
          }}>
            ☕
          </div>
        </div>

      </div>
    </section>
  );
}
