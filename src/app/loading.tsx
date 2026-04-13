export default function Loading() {
  return (
    <div style={{
      width: '100%',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '24px'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: '4px solid var(--surface)',
        borderTopColor: 'var(--accent)',
        animation: 'spin 1s linear infinite'
      }} />
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        `
      }} />
    </div>
  );
}
