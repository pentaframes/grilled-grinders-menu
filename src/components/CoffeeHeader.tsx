'use client';

export default function CoffeeHeader() {
  return (
    <header style={{
      height: 'var(--header-height)',
      backgroundColor: 'var(--bg)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(59, 31, 26, 0.08)',
      boxShadow: '0 4px 12px rgba(231, 220, 208, 0.8)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '24px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          Flavored <span style={{ fontSize: '18px' }}>☕</span>
        </h1>
        {/* Simple Call to Action touch target */}
        <button style={{
          minHeight: '48px',
          minWidth: '48px',
          borderRadius: '24px',
          backgroundColor: 'var(--surface)',
          border: 'none',
          color: 'var(--primary)',
          fontSize: '14px',
          fontWeight: 600,
          padding: '0 20px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          Cart
        </button>
      </div>
    </header>
  );
}
