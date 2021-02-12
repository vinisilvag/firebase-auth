import React from 'react';

import Navbar from '../../components/Navbar';

import { Container, Main, Sidebar, Content } from './styles';

const Chat = () => (
  <Container>
    <Navbar />

    <Main>
      <Sidebar />
      <Content />
    </Main>
  </Container>
);

export default Chat;
