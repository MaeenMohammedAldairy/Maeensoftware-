// Simple utility to wrap Google Analytics
// This assumes the gtag script is loaded in index.html

export const trackPageView = (path: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
};

// Declare types for window
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}