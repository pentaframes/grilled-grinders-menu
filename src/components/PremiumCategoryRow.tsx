'use client';

interface PremiumCategoryRowProps {
  categories: string[];
}

export default function PremiumCategoryRow({ categories }: PremiumCategoryRowProps) {
  // Icon mapper logic to inject appropriate aesthetic icons
  const getIconForCat = (cat: string) => {
    const lower = cat.toLowerCase();
    if (lower.includes('burger')) return '🍔';
    if (lower.includes('drink') || lower.includes('beverage')) return '🥤';
    if (lower.includes('chicken') || lower.includes('wing')) return '🍗';
    if (lower.includes('side')) return '🍟';
    if (lower.includes('grinder') || lower.includes('sub')) return '🥖';
    if (lower.includes('dessert') || lower.includes('sweet')) return '🍰';
    if (lower.includes('coffee') || lower.includes('espresso')) return '☕';
    return '🍽️';
  };

  const handleClick = (cat: string) => {
    const slug = cat.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(`cat-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" style={{ marginBottom: '40px' }}>
      <div 
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '16px', // buffer for soft shadows
        }}
      >
        {categories.map((cat, i) => (
          <div 
            key={i} 
            onClick={() => handleClick(cat)}
            style={{
            flexShrink: 0,
            width: '120px', 
            height: '140px',
            borderRadius: '20px',
            backgroundColor: 'var(--primary)',
            background: 'linear-gradient(to bottom right, var(--primary), var(--accent))',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            boxShadow: 'var(--shadow-card)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span style={{ fontSize: '40px' }}>{getIconForCat(cat)}</span>
            <span className="font-heading" style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '0 8px' }}>
              {cat}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
