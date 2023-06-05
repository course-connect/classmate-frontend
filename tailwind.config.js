/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'classmate-green-1': 'var(--classmate-green-1)',
        'classmate-green-2': 'var(--classmate-green-2)',
        'classmate-green-3': 'var(--classmate-green-3)',
        'classmate-green-4': 'var(--classmate-green-4)',
        'classmate-green-5': 'var(--classmate-green-5)',
        'classmate-green-6': 'var(--classmate-green-6)',
        'classmate-gray-1': 'var(--classmate-gray-1)',
        'classmate-gray-2': 'var(--classmate-gray-2)',
        'classmate-pink-1': 'var(--classmate-pink-1)',
        'classmate-gold-1': 'var(--classmate-gold-1)',
        'classmate-tan-1': 'var(--classmate-tan-1)',
        'classmate-tan-2': 'var(--classmate-tan-2)',
      },
    },
  },
  plugins: [],
};
