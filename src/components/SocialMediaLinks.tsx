interface SocialMediaLinksProps {
  variant?: 'light' | 'dark';  // light bg = dark icons, dark bg = light icons
  className?: string;
}

export default function SocialMediaLinks({
  variant = 'dark',
  className = ''
}: SocialMediaLinksProps) {
  const textColor = variant === 'dark'
    ? 'text-[var(--footer-text)]'
    : 'text-[var(--foreground)]';

  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${textColor} opacity-80 hover:opacity-100 transition-opacity duration-150`}
        aria-label="Facebook"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.25,3.11,9.25,5.32v2.14H6.5v4h2.75V24h5.25V11.5h3.54l.46-4Z"/>
        </svg>
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${textColor} opacity-80 hover:opacity-100 transition-opacity duration-150`}
        aria-label="Instagram"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
        </svg>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${textColor} opacity-80 hover:opacity-100 transition-opacity duration-150`}
        aria-label="LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.45,20.45H16.89V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.62H9.34V9h3.42v1.56h.05a3.76,3.76,0,0,1,3.38-1.85c3.62,0,4.28,2.38,4.28,5.48v6.26ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43Zm1.78,13H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/>
        </svg>
      </a>
    </div>
  );
}
