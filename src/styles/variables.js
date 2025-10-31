import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: clamp(11px, 2vw, 12px);
    --fz-xs: clamp(12px, 2.2vw, 13px);
    --fz-sm: clamp(13px, 2.5vw, 14px);
    --fz-md: clamp(15px, 2.8vw, 16px);
    --fz-lg: clamp(16px, 3vw, 18px);
    --fz-xl: clamp(18px, 3.5vw, 20px);
    --fz-xxl: clamp(20px, 4vw, 22px);
    --fz-heading: clamp(28px, 5vw, 32px);

    --border-radius: 8px;
    --border-radius-sm: 4px;
    --border-radius-lg: 12px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    --shadow-sm: 0 2px 8px rgba(2, 12, 27, 0.4);
    --shadow-md: 0 4px 16px rgba(2, 12, 27, 0.5);
    --shadow-lg: 0 10px 30px rgba(2, 12, 27, 0.6);
    --shadow-xl: 0 20px 50px rgba(2, 12, 27, 0.7);

    --glass-bg: rgba(10, 25, 47, 0.7);
    --glass-border: rgba(100, 255, 218, 0.1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
