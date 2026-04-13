'use client';

import { useEffect, useRef, useState } from 'react';

interface CategoryNavProps {
  categories: string[];
}

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const [active, setActive] = useState(categories[0] || '');
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // The calculation includes header height + nav height offset for the active boundary
    const offset = 64 + 64 + 20; 
    const observers: IntersectionObserver[] = [];

    categories.forEach((cat) => {
      const el = document.getElementById(slugify(cat));
      if (!el) return;
      
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(cat);
        },
        // Trigger active state when section crosses the upper half of screen
        { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  useEffect(() => {
    if (!trackRef.current) return;
    const pill = trackRef.current.querySelector<HTMLElement>('.active-pill');
    if (pill) {
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [active]);

  const handleClick = (cat: string) => {
    setActive(cat);
    const el = document.getElementById(slugify(cat));
    if (el) {
      // Offset scrolling natively handled by css 'scroll-padding-top' in html block
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 'var(--header-height)',
      zIndex: 90,
      height: 'var(--nav-height)',
      backgroundColor: 'rgba(231, 220, 208, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(59, 31, 26, 0.05)',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div 
        ref={trackRef} 
        className="no-scrollbars" 
        style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          width: '100%',
          alignItems: 'center'
        }}
      >
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              className={isActive ? 'active-pill tap-target' : 'tap-target'}
              onClick={() => handleClick(cat)}
              style={{
                flexShrink: 0,
                // UX constraint: Always minimum 48px height for thumbs
                minHeight: '48px',
                padding: '0 20px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: isActive ? 600 : 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: isActive ? 'var(--accent)' : 'var(--surface)',
                color: isActive ? 'white' : 'var(--text)',
                boxShadow: isActive ? 'var(--shadow-btn)' : '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
