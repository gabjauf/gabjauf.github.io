module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      'print': { 'raw': 'print' },
      // xl: '1280px',
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.5rem 0 0 0',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4d00ff",

          "secondary": "#FFFFFF",

          "accent": "#00d2f9",

          "neutral": "#27241f",

          "base-100": "#052739",

          "info": "#00f9ff",

          "success": "#419500",

          "warning": "#ff8500",

          "error": "#ff0033",
        },
      },
    ],
  },
};
