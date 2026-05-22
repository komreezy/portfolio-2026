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

    // Fix wide SVG banners - wrap in scrollable container on mobile
    const wideBanners = document.querySelectorAll('.prose-blog svg[viewBox]');
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      wideBanners.forEach((svg) => {
        const viewBox = svg.getAttribute('viewBox');
        if (!viewBox) return;

        const parts = viewBox.split(' ').map(Number);
        if (parts.length !== 4) return;

        const [, , vbWidth] = parts;

        // Only process wide banners (viewBox width > 600)
        if (vbWidth <= 600) return;

        // Check if already wrapped
        if (svg.parentElement?.classList.contains('svg-scroll-wrapper')) return;

        // Wrap in scrollable container
        const wrapper = document.createElement('div');
        wrapper.className = 'svg-scroll-wrapper';
        wrapper.style.cssText = 'overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 0 -20px; padding: 0 20px;';

        // Set minimum width so text is readable
        const svgElement = svg as SVGElement;
        svgElement.style.minWidth = '500px';
        svgElement.style.width = '500px';
        svgElement.style.height = 'auto';

        svg.parentNode?.insertBefore(wrapper, svg);
        wrapper.appendChild(svg);
      });
    }
  }, []);

  return null;
}
