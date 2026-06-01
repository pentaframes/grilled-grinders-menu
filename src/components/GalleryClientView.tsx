'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/lib/fetchGallery';

interface GalleryClientViewProps {
  resources: GalleryImage[];
  isMock: boolean;
}

export default function GalleryClientView({ resources, isMock }: GalleryClientViewProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handle keyboard events in lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev !== null && prev < resources.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : resources.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Disable scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, resources.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : resources.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex(activeIndex < resources.length - 1 ? activeIndex + 1 : 0);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 60px' }}>
      
      {/* Informative Banner for Mock/Demo mode */}
      {isMock && (
        <div style={{
          backgroundColor: 'rgba(184, 134, 11, 0.08)',
          border: '1px solid rgba(184, 134, 11, 0.3)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '40px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <h3 style={{ 
            fontFamily: 'var(--font-heading)', 
            color: '#B8860B', 
            margin: 0, 
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            ✨ Demo Gallery Mode Active
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            We're displaying mock café photography from Unsplash because your Cloudinary API keys are not yet configured. 
            To show images directly from your Cloudinary folder, add your credentials in <strong>.env.local</strong> and make sure 
            <strong>CLOUDINARY_FOLDER</strong> is set.
          </p>
        </div>
      )}

      {/* Gallery Grid */}
      {resources.length === 0 ? (
        <div style={{ 
          padding: '80px 20px', 
          textAlign: 'center', 
          backgroundColor: 'rgba(7B, 46, 43, 0.03)', 
          borderRadius: '24px',
          border: '1px dashed rgba(75, 46, 43, 0.15)'
        }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>📸</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', marginBottom: '8px' }}>
            No Images Found
          </h3>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>
            Make sure you have uploaded images to the folder: <code>{process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || 'gallery-images'}</code> in your Cloudinary account.
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {resources.map((img, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={img.public_id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: isHovered ? '0 12px 30px rgba(75, 46, 43, 0.15)' : '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(75, 46, 43, 0.05)',
                  backgroundColor: 'rgba(75, 46, 43, 0.02)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <img
                  src={img.secure_url}
                  alt={`Gallery image ${index + 1}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Overlay on Hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(75, 46, 43, 0.4)',
                  opacity: isHovered ? 1 : 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    transform: isHovered ? 'scale(1)' : 'scale(0.8)',
                    transition: 'transform 0.3s ease'
                  }}
                  >
                    <span style={{ fontSize: '20px', color: 'var(--primary)' }}>🔍</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div 
          onClick={() => setActiveIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(26, 16, 15, 0.95)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(8px)',
            transition: 'opacity 0.3s ease',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1010,
              transition: 'background-color 0.2s ease',
              minWidth: 'auto',
              minHeight: 'auto'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            ✕
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1010,
              transition: 'background-color 0.2s ease',
              minWidth: 'auto',
              minHeight: 'auto'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            ‹
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1010,
              transition: 'background-color 0.2s ease',
              minWidth: 'auto',
              minHeight: 'auto'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            ›
          </button>

          {/* Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              height: '80vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 40px)' }}>
              <img
                src={resources[activeIndex].secure_url}
                alt={`Expanded gallery image ${activeIndex + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            
            {/* Image Status Bar */}
            <div style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              marginTop: '12px',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.05em'
            }}>
              Image {activeIndex + 1} of {resources.length}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
