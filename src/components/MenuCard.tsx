'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MenuItem } from '@/lib/types';
import { useToast } from '@/components/ToastProvider';

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 99 }: MenuCardProps) {
  const [imgSrc, setImgSrc] = useState(item.image || '/menu-img.png');
  const [imgError, setImgError] = useState(false);
  const { showToast } = useToast();

  const handleImgError = () => {
    if (!imgError) {
      setImgSrc('/menu-img.png');
      setImgError(true);
    }
  };

  return (
    <article style={{
      backgroundColor: 'var(--surface)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-soft)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      // Tappable card area ensuring smooth UX
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
    }}>
      {/* 100% Width Image Top */}
      <div style={{ position: 'relative', width: '100%', height: '180px', backgroundColor: 'rgba(59, 31, 26, 0.05)' }}>
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 2 ? 'eager' : 'lazy'}
          onError={handleImgError}
          style={{ 
            objectFit: imgSrc === '/menu-img.png' ? 'contain' : 'cover',
            padding: imgSrc === '/menu-img.png' ? '16px' : '0' 
          }}
        />
        
        {/* Floating Add Button overlapping image */}
        <button style={{
          position: 'absolute',
          bottom: '-20px',
          right: '16px',
          width: '48px',
          height: '48px',
          borderRadius: '24px',
          backgroundColor: 'var(--accent)',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-btn)',
          zIndex: 2,
          cursor: 'pointer',
        }} 
        aria-label={`Add ${item.name} to cart`}
        onClick={(e) => {
          e.stopPropagation();
          showToast('Please call the waiter to take the order');
        }}>
          +
        </button>
      </div>

      {/* Content Block */}
      <div style={{ padding: '24px 16px 16px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
          <h3 className="heading-font" style={{ fontSize: '18px', margin: 0, fontWeight: 700, fontFamily: 'ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"' }}>{item.name}</h3>
          
          <div style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '16px',
            fontSize: '14px',
            fontWeight: 700,
            whiteSpace: 'nowrap'
          }}>
            {item.price}
          </div>
        </div>

        {item.description && (
          <p className="text-muted text-small" style={{ lineHeight: '1.4', margin: 0 }}>
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
