import styled from 'styled-components';
import { IInput } from './device-modal.types';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: block;
  }
`;
export const Form = styled.form`
  margin-top: 16px;
`;

export const FormGroup = styled.div`
  height: 70px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const Input = styled.input<IInput>`
  display: block;
  height: 32px;
  width: 300px;
  border-radius: 4px;
  padding: 4px 6px;
  border: ${({ hasError }) => (hasError ? '1px solid #DD3344' : ' 1px solid #ece6f0')};
  margin-top: 8px;
`;

export const Button = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 24px;
  color: #fff;
  background: #294b7b;
  border-radius: 5px;

  &:hover,
  &:disabled {
    opacity: 0.8;
    transition: all 0.5s ease-out;
  }
`;
