import React from 'react';

// Custom high-quality SVG brand icons to match Lucide style (stroke-based)
export const Facebook = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Instagram = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const TikTok = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-.77-.6-1.39-1.39-1.81-2.3v7.68c-.02 2.03-.74 4.07-2.22 5.49-1.57 1.52-3.85 2.22-6.01 1.84-2.03-.35-3.89-1.61-4.88-3.41-1.28-2.32-1.07-5.4.58-7.51 1.48-1.9 3.86-2.88 6.24-2.5v4.03c-1.24-.22-2.58.14-3.41 1.14-.83.99-.9 2.5-.2 3.56.7 1.05 2.02 1.63 3.27 1.4 1.15-.22 2.04-1.21 2.09-2.38V0H12.53z" />
  </svg>
);
