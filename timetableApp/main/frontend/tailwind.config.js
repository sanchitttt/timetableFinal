/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: '0px',
      desktop: '768px',
      biggerDesktops: '1280px'
    },
    colors: {
      '01': '#7C5DFA',
      '02': '#9277FF',
      '03': '#1E2139',
      '04': '#252945',
      '05': '#DFE3FA',
      '06': '#888EB0',
      '07': '#7E88C3',
      '08': '#0C0E16',
      '09': '#EC5757',
      '10': '#FF9797',
      '11': '#F8F8FB',
      '12': '#141625',
      '13': '#858BB2',
      'paidBg': 'rgba(51, 214, 159, 0.1)',
      'pendingBg': 'rgba(255, 143, 0, 0.1)',
      'draftBg': 'rgba(55, 59, 83, 0.1)',
      'draftBgDark': 'rgba(223, 227, 250, 0.1)',
      '14': '#ffffff',
      '15' : "#373B53"
    },
    extend: {},
  },
  plugins: [],
}