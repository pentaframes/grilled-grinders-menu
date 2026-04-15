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
        padding: '10px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(244, 239, 232, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(75, 46, 43, 0.08)',
      }}>
        {/* Left: Logo Section */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {/* Circular Logo */}
          <div style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            border: '1px solid rgba(75, 46, 43, 0.2)',
            background: '#4B2E2B',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img 
              src="/grilled-grinders.png" 
              alt="Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          {/* Logo Text Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="font-heading" style={{ 
              fontSize: '18px', 
              fontWeight: 700, 
              color: 'var(--primary)', 
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}>
              Grilled Grinders
            </span>
            <span className="font-body" style={{ 
              fontSize: '10px', 
              fontWeight: 600, 
              color: '#B8860B',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '2px'
            }}>
              North Indian Fast Food
            </span>
          </div>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="desktop-nav" style={{
          gap: '24px',
          alignItems: 'center'
        }}>
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="nav-link-hover" style={{
              fontSize: '14px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '48px'
            }}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CONTACT Button & Hamburger Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link
            href="/about"
            className="btn btn-primary desktop-only"
            style={{ textTransform: 'uppercase', fontSize: '13px', padding: '10px 24px' }}
          >
            Contact
          </Link>
          
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
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '24px', padding: '16px', fontSize: '16px', textDecoration: 'none' }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
