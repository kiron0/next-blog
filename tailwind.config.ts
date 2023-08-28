import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pink: "rgba(238, 174, 202, 1) 0%",
        blue: "rgba(148, 187, 233, 1) 100%",
        violet: "#cf9aff",
        blue2: "#95c0ff",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
    ],
  },
  plugins: [require('daisyui')],
}
export default config
