import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      "on-error-container": "var(--color-on-error-container)",
      "background": "var(--color-background)",
      "on-tertiary-container": "var(--color-on-tertiary-container)",
      "on-secondary-fixed": "var(--color-on-secondary-fixed)",
      "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
      "on-primary-fixed": "var(--color-on-primary-fixed)",
      "inverse-on-surface": "var(--color-inverse-on-surface)",
      "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
      "tertiary-container": "var(--color-tertiary-container)",
      "surface-container-lowest": "var(--color-surface-container-lowest)",
      "on-surface": "var(--color-on-surface)",
      "inverse-surface": "var(--color-inverse-surface)",
      "on-secondary": "var(--color-on-secondary)",
      "on-error": "var(--color-on-error)",
      "surface-tint": "var(--color-surface-tint)",
      "on-background": "var(--color-on-background)",
      "outline": "var(--color-outline)",
      "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
      "surface-bright": "var(--color-surface-bright)",
      "on-surface-variant": "var(--color-on-surface-variant)",
      "primary-fixed-dim": "var(--color-primary-fixed-dim)",
      "surface-container-high": "var(--color-surface-container-high)",
      "inverse-primary": "var(--color-inverse-primary)",
      "surface-container-low": "var(--color-surface-container-low)",
      "on-primary-container": "var(--color-on-primary-container)",
      "tertiary-fixed": "var(--color-tertiary-fixed)",
      "surface-container": "var(--color-surface-container)",
      "on-secondary-container": "var(--color-on-secondary-container)",
      "tertiary": "var(--color-tertiary)",
      "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
      "secondary-fixed": "var(--color-secondary-fixed)",
      "secondary": "var(--color-secondary)",
      "surface": "var(--color-surface)",
      "primary": "var(--color-primary)",
      "surface-container-highest": "var(--color-surface-container-highest)",
      "outline-variant": "var(--color-outline-variant)",
      "primary-fixed": "var(--color-primary-fixed)",
      "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
      "error-container": "var(--color-error-container)",
      "surface-dim": "var(--color-surface-dim)",
      "error": "var(--color-error)",
      "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
      "surface-variant": "var(--color-surface-variant)",
      "primary-container": "var(--color-primary-container)",
      "secondary-container": "var(--color-secondary-container)",
      "on-tertiary": "var(--color-on-tertiary)",
      "on-primary": "var(--color-on-primary)",
      "dark": "var(--color-dark)",
      "light": "var(--color-light)"
},
      spacing: {
      "gutter": "var(--spacing-gutter)",
      "container-max": "var(--spacing-container-max)",
      "stack-lg": "var(--spacing-stack-lg)",
      "stack-sm": "var(--spacing-stack-sm)",
      "stack-md": "var(--spacing-stack-md)",
      "section-padding": "var(--spacing-section-padding)",
      "margin-mobile": "var(--spacing-margin-mobile)"
},
      fontFamily: {
      "label-md": "var(--font-label-md)",
      "body-lg": "var(--font-body-lg)",
      "headline-lg-mobile": "var(--font-headline-lg-mobile)",
      "headline-md": "var(--font-headline-md)",
      "display": "var(--font-display)",
      "body-md": "var(--font-body-md)",
      "headline-lg": "var(--font-headline-lg)",
      "archivo-black": ["'Archivo Black'", "sans-serif"]
},
      fontSize: {
        "label-md": ["var(--text-label-md)", {
          lineHeight: "var(--text-label-md--line-height)",
          letterSpacing: "var(--text-label-md--letter-spacing)",
          fontWeight: "var(--text-label-md--font-weight)"
        }],
        "body-lg": ["var(--text-body-lg)", {
          lineHeight: "var(--text-body-lg--line-height)",
          fontWeight: "var(--text-body-lg--font-weight)"
        }],
        "headline-lg-mobile": ["var(--text-headline-lg-mobile)", {
          lineHeight: "var(--text-headline-lg-mobile--line-height)",
          fontWeight: "var(--text-headline-lg-mobile--font-weight)"
        }],
        "headline-md": ["var(--text-headline-md)", {
          lineHeight: "var(--text-headline-md--line-height)",
          fontWeight: "var(--text-headline-md--font-weight)"
        }],
        "display": ["var(--text-display)", {
          lineHeight: "var(--text-display--line-height)",
          letterSpacing: "var(--text-display--letter-spacing)",
          fontWeight: "var(--text-display--font-weight)"
        }],
        "body-md": ["var(--text-body-md)", {
          lineHeight: "var(--text-body-md--line-height)",
          fontWeight: "var(--text-body-md--font-weight)"
        }],
        "headline-lg": ["var(--text-headline-lg)", {
          lineHeight: "var(--text-headline-lg--line-height)",
          fontWeight: "var(--text-headline-lg--font-weight)"
        }]
      },
      borderRadius: {
      "DEFAULT": "var(--radius-DEFAULT)",
      "lg": "var(--radius-lg)",
      "xl": "var(--radius-xl)",
      "full": "var(--radius-full)"
},
      boxShadow: {
      "card": "var(--shadow-card)"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 180s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
