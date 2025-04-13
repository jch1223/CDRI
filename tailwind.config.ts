import { colors } from './src/config/tailwind/colors';
import { textTypes, fontWeights } from './src/config/tailwind/typography';

import type { TextTypes, FontWeights } from './src/config/tailwind/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
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
