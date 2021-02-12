import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FiMessageCircle, FiUsers, FiArchive } from 'react-icons/fi';

export const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div``;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarTitle = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  color: #333;
`;

export const NavItem = styled(Link)`
  padding: 10px 12px;
  border-radius: 50%;
  margin: 0 4px;

  :hover {
    background-color: #eee;
  }
`;

export const ChatIcon = styled(FiMessageCircle)`
  font-size: 24px;
  color: #333;
`;

export const ArchiveIcon = styled(FiArchive)`
  font-size: 24px;
  color: #333;
`;

export const UsersIcon = styled(FiUsers)`
  font-size: 24px;
  color: #333;
`;

export const Avatar = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
  border-radius: 23px;
  margin-left: 12px;

  :hover {
    cursor: pointer;
  }
`;
