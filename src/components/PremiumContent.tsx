export default function PremiumContent() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
        marginBottom: '60px',
      }}
    >
      {/* About / Story */}
      <article
        style={{
          gridColumn: 'span 2',
          backgroundColor: '#E9DFD3',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '24px',
        }}
      >
        <p style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#B8860B',
          marginBottom: '10px'
        }}>
          Bengali Cloud Kitchen &nbsp;·&nbsp; Serves Authentic Bengali Cuisine
        </p>
        <h2 className="font-heading" style={{ fontSize: '24px', marginBottom: '12px' }}>
          Welcome to Our Café!
        </h2>
        <p className="font-body text-muted" style={{ lineHeight: 1.75 }}>
          This space is a dream brought to life by two friends who share a deep passion for good food.
          What started as countless conversations over recipes and flavours has now turned into this humble
          beginning. Every dish here is freshly prepared with care, maintaining the highest standards of
          hygiene and crafted from our own unique recipes.
        </p>
        <p className="font-body text-muted" style={{ lineHeight: 1.75, marginTop: '12px' }}>
          We&apos;ve poured our hearts, time, and hard work into creating a place where food feels personal
          and comforting. Your support means everything to us, and we&apos;re grateful to have you be a part
          of our journey.
        </p>
        <p style={{
          marginTop: '20px',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--primary)'
        }}>
          Taste &nbsp;·&nbsp; Tradition &nbsp;·&nbsp; Trust
        </p>
      </article>

      {/* Catering */}
      <article
        style={{
          backgroundColor: '#E9DFD3',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '18px',
        }}
      >
        <h3 className="font-heading" style={{ fontSize: '18px', marginBottom: '10px' }}>
          🎉 Catering Services
        </h3>
        <p className="font-body text-muted" style={{ marginBottom: '10px' }}>
          We do catering for all occasions:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            'Birthday Party',
            'Kitty Party',
            'Get Together',
            'Anniversary',
            'Festivals & Celebrations',
            'Any Other Occasion',
          ].map((item) => (
            <li key={item} className="font-body text-muted" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#B8860B', fontWeight: 700 }}>✦</span> {item}
            </li>
          ))}
        </ul>
      </article>

      {/* Location */}
      <article
        style={{
          backgroundColor: '#E9DFD3',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '18px',
        }}
      >
        <h3 className="font-heading" style={{ fontSize: '18px', marginBottom: '8px' }}>Location</h3>
        <p className="font-body text-muted">
          Uddhab Babu Street, Anna School Lane,
          <br />
          New Barhi Toli, Lalpur, Ranchi
        </p>
      </article>

      {/* Hours & Service */}
      <article
        style={{
          backgroundColor: '#E9DFD3',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '18px',
        }}
      >
        <h3 className="font-heading" style={{ fontSize: '18px', marginBottom: '8px' }}>Hours & Service</h3>
        <p className="font-body text-muted">
          9:00 AM to 9:00 PM
          <br />
          Takeaway and home delivery available
        </p>
      </article>

      {/* Contact */}
      <article
        style={{
          backgroundColor: '#4B2E2B',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '18px',
        }}
      >
        <h3 className="font-heading" style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>
          Contact Us
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="tel:9334473003" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#F4EFE8',
            fontSize: '16px',
            fontWeight: 600
          }}>
            <span style={{ fontSize: '18px' }}>📞</span> 9334473003
          </a>
          <a href="tel:9334184255" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#F4EFE8',
            fontSize: '16px',
            fontWeight: 600
          }}>
            <span style={{ fontSize: '18px' }}>📞</span> 9334184255
          </a>
        </div>
      </article>

      {/* Cuisine & Budget */}
      <article
        style={{
          backgroundColor: '#E9DFD3',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '18px',
        }}
      >
        <h3 className="font-heading" style={{ fontSize: '18px', marginBottom: '8px' }}>Cuisine & Budget</h3>
        <p className="font-body text-muted">
          Cuisine: Authentic Bengali
          <br />
          Approx. cost for two: ₹200
        </p>
      </article>
    </section>
  );
}
