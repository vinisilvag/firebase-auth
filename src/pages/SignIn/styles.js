import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 460px;
  padding: 0 20px;
`;

export const Label = styled.label`
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 0;
  margin-bottom: ${(props) => (props.margin ? `${28}px` : 0)};
  font-size: 16px;
  padding: 14px;
`;

export const ForgotPassword = styled.button`
  font-size: 16px;
  align-self: flex-end;
  border: 0;
  color: #762de7;
  margin-bottom: 24px;
  margin-top: 8px;
  background-color: transparent;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SubmitButton = styled.button`
  font-size: 16px;
  height: 52px;
  background-color: #762de7;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: #6220c9;
  }
`;

export const SignUpText = styled(Link)`
  text-decoration: none;
  margin-top: 12px;
  text-align: center;
  color: #6220c9;

  :hover {
    text-decoration: underline;
  }
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.modalIsOpen ? 1 : 0)};
  visibility: ${(props) => (props.modalIsOpen ? 'visible' : 'hidden')}; ;
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 2.4rem;

  width: 90%;
  max-width: 500px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  color: #6220c9;

  margin-bottom: 24px;
  font-size: 26px;
`;

export const CloseButton = styled(FiX)`
  font-size: 26px;

  :hover {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalSubmitButton = styled.button`
  font-size: 16px;
  width: 180px;
  height: 52px;
  background-color: #762de7;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: #6220c9;
  }
`;
