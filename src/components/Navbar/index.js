import React from 'react';

import { toast } from 'react-toastify';

import { useAuth } from '../../contexts/AuthContext';

import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLeft,
  NavbarTitle,
  NavbarRight,
  NavItem,
  ArchiveIcon,
  ChatIcon,
  UsersIcon,
  Avatar,
} from './styles';

const Navbar = () => {
  const { currentUser, signOut } = useAuth();

  async function handleSignOut() {
    try {
      await signOut();
    } catch {
      toast.error('Falha ao realizar logout!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLeft>
          <NavbarTitle to="/app">Dashboard</NavbarTitle>
        </NavbarLeft>
        <NavbarRight>
          <NavItem>
            <ArchiveIcon />
          </NavItem>
          <NavItem to="/chat">
            <ChatIcon />
          </NavItem>
          <NavItem>
            <UsersIcon />
          </NavItem>
          <Avatar
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            onClick={handleSignOut}
          />
        </NavbarRight>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
