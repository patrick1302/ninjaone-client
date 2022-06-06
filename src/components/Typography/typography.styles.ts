import styled from 'styled-components';

interface IStyledTypography {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
}
export const StyledTypography = styled.span<IStyledTypography>`
  display: block;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-weight: ${(props) => props.fontWeight || ''};
  line-height: ${(props) => props.lineHeight || ''};
  color: ${(props) => props.color || 'rgba(0, 0, 0, 0.85)'};
`;
