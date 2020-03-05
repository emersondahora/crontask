import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  flex: 1;
  justify-content: center;
  max-width: 700px;
  align-items: center;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 75px;
  color: #fff;
`;

export const ContainerTimers = styled.div`
  padding: 10px;
  background: #eee;
  border-radius: 15px;
`;

export const TimerContainer = styled.div`
  min-height: 50px;
  border: 1px solid #333;
  margin: 5px;
  padding: 5px;
  button {
    background: #fff;
    padding: 5px;
    border-radius: 4px;
    margin-left: 5px;
  }
`;
