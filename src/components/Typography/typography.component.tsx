import React from 'react';
import { StyledTypography } from './typography.styles';
import { ITypography } from './typography.types';

function Typography({
  as,
  htmlFor,
  children,
  fontWeight,
  fontSize,
  lineHeight,
  className,
  color,
  style,
  required
}: ITypography) {
  return (
    <StyledTypography
      as={as}
      htmlFor={htmlFor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      className={className}
      color={color}
      style={style}
    >
      {children}
      {required && ' *'}
    </StyledTypography>
  );
}

export default Typography;
