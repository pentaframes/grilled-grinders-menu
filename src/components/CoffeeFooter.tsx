import React from 'react';

export default function CoffeeFooter() {
  return (
    <footer style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '40px',
      marginTop: '60px',
      paddingTop: '40px',
      borderTop: '1px solid rgba(110, 90, 87, 0.2)'
    }}>
      
      {/* Brand */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '20px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Flavored ☕
        </h2>
        <span className="text-muted text-small">Wake up to something special.</span>
      </div>

      {/* Our Services */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)' }}>Our Services</h4>
        <a href="#" className="text-muted text-small">Pricing</a>
        <a href="#" className="text-muted text-small">Tracking</a>
        <a href="#" className="text-muted text-small">Report a Bug</a>
        <a href="#" className="text-muted text-small">Terms of Services</a>
      </div>

      {/* Our Company */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)' }}>Our Company</h4>
        <a href="#" className="text-muted text-small">About Us</a>
        <a href="#" className="text-muted text-small">Careers</a>
        <a href="#" className="text-muted text-small">Blog</a>
        <a href="#" className="text-muted text-small">Contact</a>
      </div>

      {/* Address */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)' }}>Address</h4>
        <p className="text-muted text-small" style={{ maxWidth: '200px' }}>
          Lorem Ipsum is simply dummy text of the printing and...
        </p>
      </div>

    </footer>
  );
}
