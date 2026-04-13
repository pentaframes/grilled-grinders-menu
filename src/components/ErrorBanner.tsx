'use client';

export default function ErrorBanner() {
  const handleRefresh = () => window.location.reload();

  return (
    <div className="error-banner" role="alert" aria-live="assertive">
      <span className="error-banner__icon" aria-hidden="true">🍽️</span>
      <h2 className="error-banner__title">Menu Unavailable</h2>
      <p className="error-banner__msg">
        We couldn&apos;t load the menu right now. Please check your connection and try again.
      </p>
      <button
        className="error-banner__btn"
        onClick={handleRefresh}
        aria-label="Refresh page to reload menu"
      >
        Try Again
      </button>
    </div>
  );
}
