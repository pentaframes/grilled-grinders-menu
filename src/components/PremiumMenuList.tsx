import Image from 'next/image';
import { MenuItem } from '@/lib/types';

interface PremiumMenuListProps {
  menuByCategory: Record<string, MenuItem[]>;
}

export default function PremiumMenuList({ menuByCategory }: PremiumMenuListProps) {
  const categories = Object.keys(menuByCategory);

  return (
    <section id="menu" style={{ marginBottom: '60px' }}>
      
      {categories.map((category) => (
        <div key={category} id={`cat-${category.toLowerCase().replace(/\s+/g, '-')}`} style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
          <h2 className="font-heading" style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid rgba(75, 46, 43, 0.1)' }}>
            {category}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {menuByCategory[category].map((item, index) => (
              <div key={item.name} style={{
                backgroundColor: 'white', // Sub-card contrasting against the main card #F4EFE8
                borderRadius: '24px',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* 100% width Image */}
                <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: 'rgba(75,46,43,0.05)' }}>
                  <Image 
                    src={item.image || '/fallback.jpg'} 
                    alt={item.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 600px) 100vw, 300px"
                  />
                  {/* Floating Price Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}>
                    {item.price}
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="font-heading" style={{ fontSize: '18px', marginBottom: '8px' }}>{item.name}</h3>
                  {item.description && (
                    <p className="font-body text-muted" style={{ marginBottom: '16px', flex: 1 }}>{item.description}</p>
                  )}
                  <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                    Add to order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}
