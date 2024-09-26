import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const customColors = {
  melrose: {
    50: "#f4f3ff",
    100: "#ece9fe",
    200: "#dbd6fe",
    300: "#c8befd",
    400: "#a18bfa",
    500: "#835df5",
    600: "#733bec",
    700: "#6429d8",
    800: "#5422b5",
    900: "#461d95",
    950: "#2a1065",
  },
  negroni: {
    50: "#fff6ed",
    100: "#fee3c6",
    200: "#fdd3ab",
    300: "#fbb376",
    400: "#f8883f",
    500: "#f5681a",
    600: "#e64e10",
    700: "#bf390f",
    800: "#982e14",
    900: "#7a2914",
    950: "#421208",
  },
  jungleMist: {
    50: "#f5f9fa",
    100: "#eaf2f4",
    200: "#d0e2e7",
    300: "#b7d4da",
    400: "#78aeb8",
    500: "#5794a0",
    600: "#437986",
    700: "#37626d",
    800: "#31525b",
    900: "#2d464d",
    950: "#1e2e33",
  },
  pastelPink: {
    50: "#fdf3f5",
    100: "#fbe8eb",
    200: "#f3c4cd",
    300: "#efb2bd",
    400: "#e6869b",
    500: "#d85b7a",
    600: "#c33b62",
    700: "#a32d52",
    800: "#89284a",
    900: "#762544",
    950: "#411021",
  },
};

const brandColors = {
  violet: customColors.melrose[300],
  yellow: customColors.negroni[100],
  green: customColors.jungleMist[300],
  red: customColors.pastelPink[200],
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
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      default: ["IBM Plex Mono", "Menlo", "monospace"],
    },
    extend: {
      colors: {
        ...customColors,
        brandColors,
      },
      // backgroundColor: {
      //   "brand-primary": globalColors.primary[600],
      //   "brand-primary-hover": globalColors.primary[500],
      //   "brand-secondary": globalColors.primary[100],
      //   "brand-secondary-hover": globalColors.primary[200],
      //   "neutral-primary": colors.white,
      //   "neutral-secondary": globalColors.neutral[50],
      //   // ...your other global colors like errors, success, warning
      // },
      // borderColor: {
      //   "brand-primary": globalColors.primary[400],
      //   "neutral-primary": globalColors.primary[300],
      //   // ...your other global colors like neutrals, errors, success, warning
      // },
      // textColor: {
      //   "brand-onprimary": colors.white,
      //   "brand-onsecondary": globalColors.primary[800],
      //   // NOTE: "neutral-*" can even be "primary", "secondary", and "emphasis" given most text is neutral
      //   "neutral-primary": globalColors.neutral[800],
      //   "neutral-secondary": globalColors.neutral[500],
      //   "neutral-emphasis": globalColors.neutral[900],
      //   // ...your other global colors like errors, success, warning
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
