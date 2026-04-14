import Image from 'next/image';
import { MenuItem } from '@/lib/types';

interface PremiumMenuListProps {
  menuByCategory: Record<string, MenuItem[]>;
}

export default function PremiumMenuList({ menuByCategory }: PremiumMenuListProps) {
  const categories = Object.keys(menuByCategory);

  return (
    <section id="menu" style={{ marginBottom: '60px', padding: '0 16px' }}>
      
      {categories.map((category) => (
        <div key={category} id={`cat-${category.toLowerCase().replace(/\s+/g, '-')}`} style={{ marginBottom: '32px', scrollMarginTop: '100px' }}>
          <h2 className="font-heading" style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>
            {category} <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>({menuByCategory[category].length})</span>
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {menuByCategory[category].map((item, index) => (
              <div key={item.name} style={{
                backgroundColor: '#EBE3D9', // Warm beige background matches target images
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                position: 'relative'
              }}>
                {/* 1. Thumbnail Image on the left */}
                <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                  <Image 
                    src={item.image || '/fallback.jpg'} 
                    alt={item.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="60px"
                  />
                </div>

                {/* 2. Middle Info */}
                <div style={{ padding: '0 12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                     {/* Veg indicator dot placeholder (Green) */}
                     <span style={{ 
                       width: '10px', height: '10px', border: '2px solid #22c55e', borderRadius: '50%', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' 
                     }}>
                       <span style={{ width: '4px', height: '4px', backgroundColor: '#22c55e', borderRadius: '50%' }} />
                     </span>
                     <h3 className="font-body" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                       {item.name}
                     </h3>
                  </div>
                  {/* Rating placeholder (Optional, if we want to show stars like the image's "31" or similar tag) */}
                  <div style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '4px' }}>
                    ★★★★☆ (4)
                  </div>
                </div>

                {/* 3. Right side: Price & Add Button */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', minWidth: '60px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                    {item.price}
                  </span>
                  <button style={{
                    backgroundColor: '#E8B65A', // The golden-yellow button color from the reference
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '4px 16px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    Add +
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
