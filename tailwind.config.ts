import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const globalColors = {
  brand: colors.blue,
  neutral: colors.slate,
  error: colors.red,
  success: colors.green,
  warning: colors.yellow
};

// fontFamily: {
//   display: ['IBM Plex Mono', 'Menlo', 'monospace'],
//   body: ['IBM Plex Mono', 'Menlo', 'monospace'],
// },
// colors: {
//   primary: {
//     50: '#f9fafb',
//     100: '#f3f4f6',
//     200: '#e5e7eb',
//     300: '#d1d5db',
//     400: '#9ca3af',
//     500: '#6b7280',
//     600: '#4b5563',
//     700: '#374151',
//     800: '#1f2937',
//     900: '#111827',
//   },
//   secondary: {
//     50: '#f0fdfa',
//     100: '#ccfbf1',
//     200: '#99f6e4',
//     300: '#5eead4',
//     400: '#2dd4bf',
//     500: '#14b8a6',
//     600: '#0d9488',
//     700: '#0f766e',
//     800: '#115e59',
//     900: '#134e4a',
//   },

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },
    extend: {
      colors: globalColors,
      backgroundColor: {
        "brand-primary": globalColors.brand[600],
        "brand-primary-hover": globalColors.brand[500],
        "brand-secondary": globalColors.brand[100],
        "brand-secondary-hover": globalColors.brand[200],
        "neutral-primary": colors.white,
        "neutral-secondary": globalColors.neutral[50],
        // ...your other global colors like errors, success, warning
      },
      borderColor: {
        "brand-primary": globalColors.brand[400],
        "neutral-primary": globalColors.brand[300],
        // ...your other global colors like neutrals, errors, success, warning
      },
      textColor: {
        "brand-onprimary": colors.white,
        "brand-onsecondary": globalColors.brand[800],
        // NOTE: "neutral-*" can even be "primary", "secondary", and "emphasis" given most text is neutral
        "neutral-primary": globalColors.neutral[800],
        "neutral-secondary": globalColors.neutral[500],
        "neutral-emphasis": globalColors.neutral[900],
        // ...your other global colors like errors, success, warning
      },
    },
  },
  plugins: [],
} satisfies Config

