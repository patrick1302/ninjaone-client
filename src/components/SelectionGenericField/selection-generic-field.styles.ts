import styled from 'styled-components';

export const SelectBox = styled.div`
  display: flex;
  align-items: center;

  label,
  span {
    margin-right: 8px;
  }
`;

export const Select = styled.select`
  width: 250px;
  padding: 8px 12px;
  color: #333333;
  border: 1px solid #ece6f0;
  cursor: pointer;
  border-radius: 5px;

  &:focus,
  &:hover {
    outline: none;
    border: 1xp solid #bbb;
  }
`;

export const Option = styled.option`
  background: #fff;
`;
