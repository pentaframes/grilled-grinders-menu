'use client';
import Link from 'next/link';

export default function PremiumHeader() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '32px',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
      {/* Left: Logo */}
      <Link href="/" className="font-heading" style={{ fontSize: '22px', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
        Grilled Grinders
      </Link>

      {/* Center: Desktop Nav (Hidden on small mobile for simplicity, but flex wrapping handles it gracefully) */}
      <nav style={{
        display: 'flex',
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
            minHeight: '48px', // Mobile touch target rule
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right: CONTACT Button */}
      <button className="btn btn-primary" style={{ textTransform: 'uppercase', fontSize: '13px', padding: '10px 24px' }}>
        Contact
      </button>

    </header>
  );
}
