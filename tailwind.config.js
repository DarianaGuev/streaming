// tailwind.config.js
module.exports = {
  content: ["./**/*.html"], //./*.html
  theme: {
    extend: {
      colors: {
        primary: '#a855f7', // Purple color in slider and icons
        purple: '#8e44ad', // Customize to match the purple button color
        lightGray: '#f0f0f0', // Background color of the card
      info: {
        primary: '#7c3aed',
        'primary-dark': '#6d28d9'
      }
      },
      borderRadius: {
        lg: '12px', // Card and button border radius
      },
    },
  },
  plugins: [],
 
}

