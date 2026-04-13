export default function SkeletonCard() {
  return (
    <div style={{
      backgroundColor: 'var(--surface)',
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '280px'
    }}>
      <div className="skeleton-anim" style={{ height: '180px', width: '100%', backgroundColor: 'rgba(59, 31, 26, 0.05)' }} />
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="skeleton-anim" style={{ height: '20px', width: '60%', borderRadius: '4px' }} />
          <div className="skeleton-anim" style={{ height: '24px', width: '20%', borderRadius: '12px' }} />
        </div>
        <div className="skeleton-anim" style={{ height: '12px', width: '100%', borderRadius: '4px' }} />
        <div className="skeleton-anim" style={{ height: '12px', width: '80%', borderRadius: '4px' }} />
      </div>
    </div>
  );
}
