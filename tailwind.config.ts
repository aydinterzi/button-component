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
      default: '#E0E0E0',
      primary: '#2962FF',
      secondary: '#455A64',
      danger: '#D32F2F',
    },
    
  },
  },
  plugins: [],
}
export default config
