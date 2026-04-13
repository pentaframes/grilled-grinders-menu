import React from 'react';

export default function AppMockup() {
  return (
    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Mockup Phone 1 */}
      <div style={{
        width: '260px',
        height: '520px',
        backgroundColor: 'var(--surface)',
        borderRadius: '32px',
        boxShadow: 'var(--shadow-card)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* Mock top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontSize: '18px' }}>&lt;</span>
          <span style={{ fontWeight: 600 }}>Coffee</span>
          <span></span>
        </div>
        
        {/* Mock tabs */}
        <div style={{ display: 'flex', gap: '16px', overflowX: 'hidden', marginBottom: '24px' }}>
          {['☕', '🍵', '🥤', '🍹'].map((icon, i) => (
            <div key={i} style={{ 
              padding: '12px', 
              borderRadius: '16px', 
              backgroundColor: i === 0 ? 'var(--primary)' : 'rgba(59, 31, 26, 0.05)',
              color: i === 0 ? 'white' : 'var(--text)'
            }}>
              {icon}
            </div>
          ))}
        </div>

        {/* Mock 2 column products */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: 'auto' }}>
          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '16px', height: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#d2b48c', marginBottom: '8px' }}></div>
            <span style={{ fontSize: '10px', fontWeight: 600 }}>Americano</span>
            <span style={{ fontSize: '10px', fontWeight: 600, color: 'white', backgroundColor: 'var(--accent)', padding: '4px 8px', borderRadius: '12px', marginTop: 'auto' }}>$2.50</span>
          </div>
          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '16px', height: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#8b4513', marginBottom: '8px' }}></div>
            <span style={{ fontSize: '10px', fontWeight: 600 }}>Espresso</span>
            <span style={{ fontSize: '10px', fontWeight: 600, color: 'white', backgroundColor: 'var(--accent)', padding: '4px 8px', borderRadius: '12px', marginTop: 'auto' }}>$3.00</span>
          </div>
        </div>

        {/* Floating bottom nav mask */}
        <div style={{
          backgroundColor: 'var(--primary)',
          height: '60px',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          color: 'white',
          marginTop: '24px'
        }}>
          <span>🏠</span>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </div>

      {/* Mockup Phone 2 (Detail view) */}
      <div style={{
        width: '260px',
        height: '520px',
        backgroundColor: 'var(--surface)',
        borderRadius: '32px',
        boxShadow: 'var(--shadow-card)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* Mock top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '18px' }}>&lt;</span>
        </div>

        {/* Image */}
        <div style={{ width: '100%', aspectRatio: '1', borderRadius: '50%', background: '#8b4513', border: '16px solid white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginBottom: '24px' }}></div>
        
        {/* Details */}
        <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Latte Grand</h4>
        <p style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: '1.4', marginBottom: '16px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Add to cart */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Total Price</span>
            <span style={{ fontSize: '16px', fontWeight: 700 }}>$3.50</span>
          </div>
          <button style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', borderRadius: '20px', padding: '10px 20px', fontSize: '12px', fontWeight: 600 }}>
            Add to Cart +
          </button>
        </div>
      </div>

    </div>
  );
}
