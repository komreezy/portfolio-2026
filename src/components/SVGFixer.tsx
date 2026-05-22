"use client";

import { useEffect } from "react";

export default function SVGFixer() {
  useEffect(() => {
    // Find all SVGs in the prose-blog that don't have viewBox
    const svgsWithoutViewBox = document.querySelectorAll('.prose-blog svg:not([viewBox])');

    svgsWithoutViewBox.forEach((svg) => {
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

    // Fix wide SVG banners with text that might overflow on mobile
    const wideBanners = document.querySelectorAll('.prose-blog svg[viewBox]');

    wideBanners.forEach((svg) => {
      const viewBox = svg.getAttribute('viewBox');
      if (!viewBox) return;

      const parts = viewBox.split(' ').map(Number);
      if (parts.length !== 4) return;

      const [, , vbWidth, vbHeight] = parts;

      // Only process wide banners (viewBox width > 600)
      if (vbWidth <= 600) return;

      // Check all text elements for overflow
      const textElements = svg.querySelectorAll('text');
      let maxTextRight = 0;

      textElements.forEach((text) => {
        const x = parseFloat(text.getAttribute('x') || '0');
        // Estimate text width based on character count and font size
        const fontSize = parseFloat(text.getAttribute('font-size') || '14');
        const textContent = text.textContent || '';
        const estimatedWidth = textContent.length * fontSize * 0.55; // Rough estimate
        const textRight = x + estimatedWidth;

        if (textRight > maxTextRight) {
          maxTextRight = textRight;
        }
      });

      // If text overflows the viewBox, expand the viewBox
      if (maxTextRight > vbWidth) {
        const newWidth = Math.ceil(maxTextRight + 20); // Add some padding
        svg.setAttribute('viewBox', `0 0 ${newWidth} ${vbHeight}`);

        // Also expand the background rect if it exists
        const bgRect = svg.querySelector('rect');
        if (bgRect && bgRect.getAttribute('width') === String(vbWidth)) {
          bgRect.setAttribute('width', String(newWidth));
        }
      }
    });
  }, []);

  return null;
}
