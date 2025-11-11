import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) =>
  React.createElement(
    'div',
    {
      className: `flex items-center gap-2 font-playfair font-black text-3xl ${className || ''}`,
    },
    // Image element (left side)
    React.createElement('img', {
      src: '/image/luxefiz-logo.png',
      alt: 'Luxefiz Logo - Creative Digital Agency in Tamil Nadu',
      loading: 'eager', // 👈 change from lazy → eager
      decoding: 'async', // ⚡ helps rendering faster
      className: 'w-12 h-12 object-contain',
    })
    ,

    // Text elements
    React.createElement(
      'div',
      null,
      React.createElement('span', { className: 'text-brand-purple' }, 'Luxe'),
      React.createElement('span', { className: 'text-brand-pink' }, 'fiz')
    )
  );
