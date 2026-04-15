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
      <article
        style={{
          backgroundColor: '#E9DFD3',
          border: '1px solid rgba(75, 46, 43, 0.08)',
          borderRadius: '16px',
          padding: '18px',
        }}
      >
        <h2 className="font-heading" style={{ fontSize: '24px', marginBottom: '10px' }}>
          Grilled Grinders, Ranchi
        </h2>
        <p className="font-body text-muted">
          A casual North Indian fast-food restaurant on Uddhab Babu Street, Lalpur. Perfect for quick lunch, dinner,
          and takeaway meals with budget-friendly pricing.
        </p>
      </article>

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
          Cuisine: North Indian, Fast Food
          <br />
          Approx. cost for two: ₹200
        </p>
      </article>
    </section>
  );
}
