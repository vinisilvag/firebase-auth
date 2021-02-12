import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';

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
  margin-bottom: 28px;
  font-size: 16px;
  padding: 14px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-bottom: 32px;
`;

export const PhotoPreview = styled.img`
  width: 178px;
  height: 178px;
  border-radius: 89px;
  object-fit: cover;
`;

export const PhotoLabel = styled.label`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const PhotoIcon = styled(FiCamera)`
  font-size: 24px;
  color: #762de7;
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

export const SignInText = styled(Link)`
  text-decoration: none;
  margin-top: 12px;
  text-align: center;
  color: #6220c9;

  :hover {
    text-decoration: underline;
  }
`;
