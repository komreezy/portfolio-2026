"use client";

import { useEffect } from "react";

export default function SVGFixer() {
  useEffect(() => {
    // Fix wide SVG banners (like IMPLIED CONSENT LAW) - make them full width like desktop
    const allSvgs = document.querySelectorAll('.prose-blog svg');

    allSvgs.forEach((svg) => {
      const svgElement = svg as SVGElement;
      const viewBox = svg.getAttribute('viewBox');

      // Check if this is a small icon inside a circular container
      const isInCircle = svg.closest('div[style*="border-radius:50%"], div[style*="border-radius: 50%"]');

      if (isInCircle) {
        // Remove viewBox from small icons - the working icon has no viewBox
        if (viewBox) {
          svg.removeAttribute('viewBox');
        }
        // Ensure icon displays at its natural size
        svgElement.style.width = '';
        svgElement.style.height = '';
        return;
      }

      // For wide banners - check if viewBox indicates a wide banner
      if (viewBox) {
        const parts = viewBox.split(' ').map(Number);
        if (parts.length === 4) {
          const [, , vbWidth, vbHeight] = parts;

          // Wide banners (viewBox width > 300) - make full width
          if (vbWidth > 300) {
            svgElement.style.width = '100%';
            svgElement.style.height = 'auto';
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          }
        }
      } else {
        // SVGs without viewBox that are wide banners - add viewBox for proper scaling
        const rect = svg.querySelector('rect');
        if (rect) {
          const width = rect.getAttribute('width');
          const height = rect.getAttribute('height');

          if (width && height) {
            const w = parseFloat(width);
            const h = parseFloat(height);

            // Only add viewBox for wide banners
            if (w > 300) {
              svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
              svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
              svgElement.style.width = '100%';
              svgElement.style.height = 'auto';
            }
          }
        }
      }
    });
  }, []);

  return null;
}
