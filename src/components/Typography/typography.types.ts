export type ElementType = 'p' | 'span' | 'label' | 'h1';

export type FontWeigth = '400' | '500' | '600';

export type FontSize = '16' | '18' | '20' | '24';

export interface ITypography {
  as?: ElementType;
  htmlFor?: string;
  children: React.ReactNode;
  fontWeight?: FontWeigth;
  fontSize?: FontSize;
  lineHeight?: string;
  className?: string;
  required?: boolean;
  color?: string;
  style?: any;
}
