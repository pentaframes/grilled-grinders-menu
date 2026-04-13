import React from 'react';

interface CoffeeCardProps {
  title: string;
  description: string;
  price: string;
}

export default function CoffeeCard({ title, description, price }: CoffeeCardProps) {
  return (
    <div style={{
      backgroundColor: 'var(--surface)',
      borderRadius: '24px',
      padding: '16px',
      width: '100%',
      maxWidth: '240px',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginTop: '60px' // Space for floating image
    }}>
      {/* Circular Image Placeholder using CSS */}
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #d2b48c, #8b4513)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        marginTop: '-76px', // Half outside the card
        marginBottom: '16px',
        border: '4px solid var(--surface)'
      }} />

      {/* Text block */}
      <div style={{ alignSelf: 'flex-start', marginBottom: '24px', width: '100%' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>
          {title}
        </h3>
        <p className="text-muted text-small">
          {description}
        </p>
      </div>

      {/* Cart & Like Icons mock */}
      <div style={{ display: 'flex', gap: '12px', alignSelf: 'center', marginBottom: '16px', color: 'var(--muted)' }}>
        <span>🛒</span>
        <span>🤍</span>
      </div>

      {/* Floating Price Badge */}
      <div style={{
        position: 'absolute',
        bottom: '-14px',
        backgroundColor: 'var(--accent)',
        color: 'white',
        borderRadius: '20px',
        padding: '6px 14px',
        fontSize: '12px',
        fontWeight: 600,
        boxShadow: 'var(--shadow-btn)'
      }}>
        {price}
      </div>
    </div>
  );
}
