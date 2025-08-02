module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: "media", // or 'media' or 'class'
    theme: {
      extend: {
        boxShadow :
        {
          neon : "0 0 5px theme('colors.purple.300'), 0 0 20px theme('colors.purple.700')"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }