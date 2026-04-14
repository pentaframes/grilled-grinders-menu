'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(244, 239, 232, 0.8)', // Matching --surface but transparent
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(75, 46, 43, 0.05)',
      }}>
        {/* Left: Logo */}
        <Link href="/" className="font-heading" style={{ fontSize: '22px', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
          Grilled Grinders
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="desktop-nav" style={{
          gap: '24px',
          alignItems: 'center'
        }}>
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} style={{
              fontSize: '14px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '48px',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CONTACT Button & Hamburger Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="btn btn-primary desktop-only" style={{ textTransform: 'uppercase', fontSize: '13px', padding: '10px 24px' }}>
            Contact
          </button>
          
          {/* Hamburger Menu (Mobile Only) */}
          <button 
            className="mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              color: 'var(--primary)',
              cursor: 'pointer',
              minWidth: '40px',
              minHeight: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-only" style={{
          position: 'fixed',
          top: '73px', // Below header
          left: 0,
          right: 0,
          height: '100vh',
          backgroundColor: 'var(--surface)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px'
        }}>
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} style={{
              fontSize: '20px',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: 600,
              padding: '16px 0',
              borderBottom: '1px solid rgba(75, 46, 43, 0.1)'
            }}>
              {link.name}
            </Link>
          ))}
          <button className="btn btn-primary" style={{ marginTop: '24px', padding: '16px', fontSize: '16px' }}>
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
