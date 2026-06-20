'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setIsVisible(true);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setToastMessage(null), 300); // wait for fade out
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast UI */}
      <div 
        className={`toast-popup ${isVisible ? 'toast-visible' : ''}`}
        aria-live="polite"
        role="status"
      >
        {toastMessage}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
