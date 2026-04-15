import Image from 'next/image';
import { MenuItem } from '@/lib/types';

interface PremiumMenuListProps {
  menuByCategory: Record<string, MenuItem[]>;
}

function formatPrice(price: string): string {
  const trimmed = price.trim();
  if (!trimmed) return '₹0';
  if (trimmed.includes('₹')) return trimmed;
  return `₹${trimmed}`;
}

function getDietType(item: MenuItem): 'veg' | 'non-veg' {
  const tags = item.tags.toLowerCase();
  const name = item.name.toLowerCase();
  const category = item.category.toLowerCase();
  const text = `${tags} ${name} ${category}`;

  if (
    text.includes('non-veg') ||
    text.includes('non veg') ||
    text.includes('chicken') ||
    text.includes('mutton') ||
    text.includes('beef') ||
    text.includes('fish') ||
    text.includes('prawn') ||
    text.includes('egg')
  ) {
    return 'non-veg';
  }

  return 'veg';
}

export default function PremiumMenuList({ menuByCategory }: PremiumMenuListProps) {
  const categories = Object.keys(menuByCategory);

  return (
    <section id="menu" style={{ marginBottom: '60px', padding: '0 12px' }}>
      {categories.map((category) => (
        <div
          key={category}
          id={`cat-${category.toLowerCase().replace(/\s+/g, '-')}`}
          style={{ marginBottom: '36px', scrollMarginTop: '170px' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
            <h2 className="font-heading menu-category-heading" style={{ color: 'var(--primary)' }}>
              <span>{category}</span>
            </h2>
            <span className="text-muted menu-category-count">
              ({menuByCategory[category].length} items)
            </span>
          </div>

          <div
            className="menu-items-grid"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {menuByCategory[category].map((item, index) => (
              <article
                className="menu-item-card"
                key={`${item.name}-${index}`}
                style={{
                  backgroundColor: '#E1D5C8',
                  borderRadius: '12px',
                  border: '1px solid rgba(75, 46, 43, 0.06)',
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr auto',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '10px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(75, 46, 43, 0.08)',
                  }}
                >
                  <Image
                    src={item.image || '/fallback.jpg'}
                    alt={item.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: 'cover' }}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>

                <div style={{ minWidth: 0 }}>
                  {(() => {
                    const dietType = getDietType(item);
                    const markerColor = dietType === 'veg' ? '#1AAF4A' : '#C9352A';

                    return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '3px',
                        border: `2px solid ${markerColor}`,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', backgroundColor: markerColor, borderRadius: '999px' }} />
                    </span>
                    <h3
                      className="font-body"
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#3B2A25',
                        lineHeight: 1.3,
                        whiteSpace: 'normal',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>
                    );
                  })()}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#D49A1F', whiteSpace: 'nowrap' }}>
                    {formatPrice(item.price)}
                  </span>
                  <span
                    style={{
                      minHeight: '30px',
                      minWidth: '78px',
                      padding: '0 10px',
                      borderRadius: '9px',
                      backgroundColor: '#D29B28',
                      color: '#2A1A18',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Order
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}
