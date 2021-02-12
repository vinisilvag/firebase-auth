import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #762de7;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
