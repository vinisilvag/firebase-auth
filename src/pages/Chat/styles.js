import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;

export const Main = styled.main`
  width: 90%;
  max-width: 1120px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: row;
`;

export const Sidebar = styled.aside`
  width: 460px;
  background-color: #eee;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ababab;
`;
