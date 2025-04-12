import { textTypes, fontWeights } from './src/styles/typography';

import type { TextTypes, FontWeights } from './src/styles/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        typography: {
          primary: '#353C49',
          secondary: '#6D7582',
          title: '#1A1E27',
          subTitle: '#8D94A0',
        },
        primary: '#4880EE',
        red: '#E84118',
        gray: '#DADADA',
        lightGray: '#F2F4F6',
        white: '#FFFFFF',
        black: '#222222',
      },
      textTypes,
      fontWeights,
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const types = theme('textTypes') as TextTypes;
      const weights = theme('fontWeights') as FontWeights;

      const utilities = {};

      Object.entries(types).forEach(([type, typeStyle]) => {
        Object.entries(weights).forEach(([weightName, weightValue]) => {
          const utilityName = `.text-${type}-${weightName}`;

          utilities[utilityName] = {
            fontFamily: 'Noto Sans KR',
            fontSize: typeStyle.fontSize,
            lineHeight: typeStyle.lineHeight,
            fontWeight: weightValue,
          };
        });
      });

      addUtilities(utilities);
    },
  ],
};
