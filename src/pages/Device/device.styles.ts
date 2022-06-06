import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 850px;
  margin-top: 100px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  color: #fff;
  background: #294b7b;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
    transition: all 0.5s ease-out;
  }
`;
