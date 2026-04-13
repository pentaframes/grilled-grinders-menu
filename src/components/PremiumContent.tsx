export default function PremiumContent() {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      marginBottom: '60px',
      alignItems: 'center'
    }}>
      {/* Left: Café Interior Image Placeholder */}
      <div style={{
        flex: '1 1 400px',
        minHeight: '320px',
        backgroundColor: '#D7CFC6',
        borderRadius: '24px',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px'
      }}>
        🏪
      </div>

      {/* Right: Text Content + Croissant Image */}
      <div style={{
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2 className="font-heading" style={{ fontSize: '24px' }}>
          About Coffee,<br />
          Espresso & Confections
        </h2>
        
        <p className="font-body text-muted" style={{ maxWidth: '400px' }}>
          Hand-crafted espresso paired perfectly with daily baked goods. Experience the warmth of our cafe and the rich complexity of our roasts.
        </p>
        
        {/* Rating Stars */}
        <div style={{ color: 'var(--accent)', fontSize: '20px', letterSpacing: '4px' }}>
          ★★★★★
        </div>
        <p className="text-small font-heading" style={{ fontWeight: 600 }}>Over 5k+ Happy Guests</p>

        {/* Small "Croissant" side float image */}
        <div style={{
          width: '180px',
          height: '140px',
          backgroundColor: '#E8CAAD',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-card)',
          alignSelf: 'flex-start',
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px'
        }}>
          🥐
        </div>
      </div>
    </section>
  );
}
