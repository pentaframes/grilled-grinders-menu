'use client';

import { useState } from 'react';

interface PremiumCategoryRowProps {
  categories: string[];
}

export default function PremiumCategoryRow({ categories }: PremiumCategoryRowProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || '');
  const [rowElement, setRowElement] = useState<HTMLDivElement | null>(null);

  const handleClick = (cat: string) => {
    setActiveCategory(cat);
    const slug = cat.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(`cat-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="categories"
      style={{
        position: 'sticky',
        top: '74px',
        zIndex: 30,
        marginBottom: '16px',
        backgroundColor: 'var(--surface)',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <button
        type="button"
        className="desktop-chip-arrow"
        aria-label="Scroll categories left"
        onClick={() => rowElement?.scrollBy({ left: -220, behavior: 'smooth' })}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '999px',
          border: '1px solid #D8CCC0',
          backgroundColor: '#EFE4D9',
          color: '#5A3B33',
          marginRight: '8px',
          marginTop: '10px',
        }}
      >
        ‹
      </button>
      <div
        id="categories-row"
        ref={setRowElement}
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          paddingTop: '8px',
          paddingInline: '2px',
          backgroundColor: 'var(--surface)',
          borderBottom: '1px solid rgba(75, 46, 43, 0.08)',
          flex: 1,
        }}
      >
        {categories.map((cat, i) => (
          <button
            type="button"
            key={i}
            onClick={() => handleClick(cat)}
            style={{
              flexShrink: 0,
              minHeight: '40px',
              borderRadius: '999px',
              border: activeCategory === cat ? '1px solid #D3A027' : '1px solid #D8CCC0',
              backgroundColor: activeCategory === cat ? '#D3A027' : '#EDE3D8',
              color: activeCategory === cat ? '#3B1F1A' : '#5A3B33',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              padding: '7px 16px',
              boxShadow: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            aria-label={`Jump to ${cat}`}
            aria-pressed={activeCategory === cat}
          >
            <span
              className="font-body"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                maxWidth: '190px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {cat}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="desktop-chip-arrow"
        aria-label="Scroll categories right"
        onClick={() => rowElement?.scrollBy({ left: 220, behavior: 'smooth' })}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '999px',
          border: '1px solid #D8CCC0',
          backgroundColor: '#EFE4D9',
          color: '#5A3B33',
          marginLeft: '8px',
          marginTop: '10px',
        }}
      >
        ›
      </button>
    </section>
  );
}
