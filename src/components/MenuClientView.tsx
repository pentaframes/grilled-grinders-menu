'use client';

import { useMemo, useState } from 'react';
import PremiumCategoryRow from '@/components/PremiumCategoryRow';
import PremiumMenuList from '@/components/PremiumMenuList';
import { MenuByCategory } from '@/lib/types';

interface MenuClientViewProps {
  menuByCategory: MenuByCategory;
}

function filterMenu(menuByCategory: MenuByCategory, query: string): MenuByCategory {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return menuByCategory;

  const filtered: MenuByCategory = {};

  for (const [category, items] of Object.entries(menuByCategory)) {
    const matched = items.filter((item) => {
      const haystack = `${category} ${item.name} ${item.description} ${item.tags}`.toLowerCase();
      return haystack.includes(trimmed);
    });

    if (matched.length > 0) {
      filtered[category] = matched;
    }
  }

  return filtered;
}

export default function MenuClientView({ menuByCategory }: MenuClientViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenuByCategory = useMemo(
    () => filterMenu(menuByCategory, searchQuery),
    [menuByCategory, searchQuery],
  );

  const categories = Object.keys(filteredMenuByCategory);
  const hasResults = categories.length > 0;

  return (
    <section id="menu-content">
      <div
        style={{
          margin: '0 auto 20px',
          maxWidth: '560px',
          padding: '0 12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid rgba(75, 46, 43, 0.12)',
            borderRadius: '10px',
            backgroundColor: '#DFD0BF',
            padding: '10px 14px',
          }}
        >
          <span aria-hidden="true" style={{ color: '#6E5A57', fontSize: '14px' }}>⌕</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search your mood..."
            aria-label="Search menu"
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              backgroundColor: 'transparent',
              color: '#5A463F',
              fontSize: '14px',
            }}
          />
        </div>
      </div>

      {hasResults ? (
        <>
          <PremiumCategoryRow categories={categories} />
          <PremiumMenuList menuByCategory={filteredMenuByCategory} />
        </>
      ) : (
        <p className="text-muted" style={{ padding: '24px 0 36px', textAlign: 'center' }}>
          No menu items found for "{searchQuery.trim()}".
        </p>
      )}
    </section>
  );
}
