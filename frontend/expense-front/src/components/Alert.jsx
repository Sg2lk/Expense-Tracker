import React from 'react';

export default function Alert({ type, text }) {
  const bgClass = type === 'success' ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className={`${bgClass} text-white p-2 rounded mb-4`}>
      {text}
    </div>
  );
}