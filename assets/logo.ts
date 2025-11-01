import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) =>
  React.createElement(
    'div',
    {
      className: `flex items-center gap-2 font-playfair font-black text-3xl ${className || ''}`,
    },
    // Image element (left side)
    React.createElement('img', {
      src: '/image/logo.png', // 🖼️ Update this to your actual image path (e.g., /assets/logo.png)
      alt: 'Luxefiz Logo',
      className: 'w-12 h-12 object-contain', // adjust size as needed
    }),

    // Text elements
    React.createElement(
      'div',
      null,
      React.createElement('span', { className: 'text-brand-purple' }, 'Luxe'),
      React.createElement('span', { className: 'text-brand-pink' }, 'fiz')
    )
  );
