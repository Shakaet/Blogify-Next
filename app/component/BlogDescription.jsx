'use client';
import { useEffect, useState } from 'react';

export default function BlogDescription({ html }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or loading spinner

  return (
    <p
      className="text-gray-700 mb-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
