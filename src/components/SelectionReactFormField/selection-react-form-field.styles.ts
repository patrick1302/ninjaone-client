import styled from 'styled-components';

export const Select = styled.select`
  width: 300px;
  padding: 8px 12px;
  color: #333333;
  border: 1px solid #ece6f0;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 8px;

  &:focus,
  &:hover {
    outline: none;
    border: 1xp solid #bbb;
  }
`;

export const Option = styled.option`
  background: #fff;
`;
