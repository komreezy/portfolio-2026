"use client";

import { useEffect } from "react";

export default function SVGFixer() {
  useEffect(() => {
    // Find all SVGs in the prose-blog that don't have viewBox
    const svgs = document.querySelectorAll('.prose-blog svg:not([viewBox])');

    svgs.forEach((svg) => {
      // Look for the first rect to determine the coordinate system
      const rect = svg.querySelector('rect');
      if (rect) {
        const width = rect.getAttribute('width');
        const height = rect.getAttribute('height');

        if (width && height) {
          // Add viewBox based on the rect dimensions
          svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
          // Ensure proper scaling behavior
          svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        }
      }
    });
  }, []);

  return null;
}
