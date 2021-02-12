import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  width: 90%;
  max-width: 1120px;

  margin: 0 auto;
  padding-top: 16px;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const FormInput = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 0;
  font-size: 16px;
  padding: 14px;
  width: 100%;
  margin-top: 8px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  margin-bottom: 24px;
`;

export const PostButton = styled.button`
  font-size: 16px;
  padding: 15px 18px;
  margin-left: 16px;
  background-color: #762de7;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border: 0;

  :hover {
    cursor: pointer;
    background-color: #6220c9;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  border: 1px solid #eee;
  padding: 1em;

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const UserName = styled.p`
  margin-top: 12px;
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 32px;
  right: calc((100% - 1120px) / 2);
  z-index: 10;

  width: 58px;
  height: 58px;
  background-color: #762de7;
  border-radius: 29px;

  border: 0;

  :hover {
    cursor: pointer;
    background-color: #6220c9;
  }

  @media (max-width: 1120px) {
    right: 5%;
  }
`;

export const PlusIcon = styled(FiPlus)`
  font-size: 24px;
  color: #fff;
`;
