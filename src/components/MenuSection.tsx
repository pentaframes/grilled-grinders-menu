import MenuCard from './MenuCard';
import { MenuItem } from '@/lib/types';

interface MenuSectionProps {
  category: string;
  items: MenuItem[];
  /** Global card offset — used to calculate eager loading for LCP */
  startIndex?: number;
}

// Map category names to emoji for section headers
const SECTION_ICONS: Record<string, string> = {
  default: '🍽️',
  burger: '🍔',
  grinder: '🥖',
  chicken: '🍗',
  veggie: '🌿',
  vegan: '🌱',
  side: '🍟',
  drink: '🥤',
  dessert: '🍫',
  pizza: '🍕',
  salad: '🥗',
  sandwich: '🥪',
  pasta: '🍝',
};

function getSectionIcon(name: string): string {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(SECTION_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return SECTION_ICONS.default;
}

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  const icon = getSectionIcon(category);
  const slug = slugify(category);

  return (
    <section
      id={slug}
      style={{ paddingTop: '64px', marginTop: '-20px' }} // Offset for sticky headers
      aria-labelledby={`section-heading-${slug}`}
    >
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--surface)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '20px',
          boxShadow: 'var(--shadow-btn)'
        }} aria-hidden="true">{icon}</div>
        
        <h2 id={`section-heading-${slug}`} style={{ margin: 0 }}>
          {category}
        </h2>
        
        <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(59, 31, 26, 0.1)' }} aria-hidden="true" />
      </div>

      {/* Card grid spans columns adaptively based on global.css .menu-grid */}
      <div className="menu-grid" role="list" aria-label={`${category} items`}>
        {items.map((item, index) => (
          <div key={`${item.name}-${index}`} role="listitem">
            <MenuCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
