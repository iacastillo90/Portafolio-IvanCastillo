import { useState, useEffect } from 'react';

/**
 * useScrollspy — detecta qué sección está activa basándose en la posición del scroll.
 * @param {string[]} sectionIds - Array de IDs de sección a observar
 * @param {number} offset - Offset desde el top para considerar sección activa (default: 100)
 */
export function useScrollspy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
