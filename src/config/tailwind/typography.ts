interface TextStyle {
  fontSize: string;
  lineHeight: string;
}

type TextTypeNames = 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3' | 'caption';

export type TextTypes = {
  [key in TextTypeNames]: TextStyle;
};

export const textTypes: TextTypes = {
  h1: {
    fontSize: '24px',
    lineHeight: '24px',
  },
  h2: {
    fontSize: '22px',
    lineHeight: '24px',
  },
  h3: {
    fontSize: '18px',
    lineHeight: '18px',
  },
  b1: {
    fontSize: '20px',
    lineHeight: '20px',
  },
  b2: {
    fontSize: '14px',
    lineHeight: '14px',
  },
  b3: {
    fontSize: '10px',
    lineHeight: '10px',
  },
  caption: {
    fontSize: '16px',
    lineHeight: '16px',
  },
};

type FontWeightNames = 'bold' | 'medium' | 'regular';

export type FontWeights = {
  [key in FontWeightNames]: '700' | '500' | '400';
};

export const fontWeights: FontWeights = {
  bold: '700',
  medium: '500',
  regular: '400',
};
