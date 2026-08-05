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
        primary: '#2e7d32',
        'primary-dark': '#1b5e20',
        secondary: '#f97316',
        'secondary-dark': '#ea580c',
        'bg-light': '#f8fafc',
        'bg-gray': '#f1f5f9',
        text: '#334155',
        'text-light': '#64748b',
        'border-light': '#e2e8f0',
      },
    },
  },
  plugins: [],
}
export default config
