import React from 'react';

export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  return (
    <button className={`btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
