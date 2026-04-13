'use client';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header__inner">
        {/* Logo ring */}
        <div className="header__logo-ring" aria-hidden="true">
          <span className="header__logo-letter">G</span>
        </div>

        {/* Name + tagline */}
        <div className="header__text">
          <p className="header__name">Grilled Grinders</p>
          <p className="header__tagline">
            <span className="live-dot" aria-hidden="true" />
            Menu is live
          </p>
        </div>

        {/* Open badge */}
        <span className="header__badge" aria-label="Restaurant is open">
          🟢 Open Now
        </span>
      </div>
    </header>
  );
}
