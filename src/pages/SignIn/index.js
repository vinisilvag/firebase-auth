import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  FormContainer,
  Label,
  FormInput,
  ForgotPassword,
  Spinner,
  SubmitButton,
  SignUpText,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  ModalSubmitButton,
} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { signIn, resetPassword } = useAuth();

  function handleModalBehavior() {
    setResetPasswordEmail('');
    setModalIsOpen((prev) => !prev);
  }

  async function handleSignInForm(e) {
    e.preventDefault();

    if (email && password) {
      try {
        setLoading(true);
        await signIn(email, password);
      } catch {
        toast.error('Falha ao realizar o login!', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoading(false);
      }
    }
  }

  async function handleResetPasswordForm(e) {
    e.preventDefault();

    if (resetPasswordEmail) {
      try {
        setResetPasswordLoading(true);
        await resetPassword(resetPasswordEmail);

        toast.success('E-mail de recuperação enviado com sucesso!', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch {
        toast.error('Falha ao enviar e-mail de recuperação!', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setResetPasswordLoading(false);
      setModalIsOpen(false);
    }
  }

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSignInForm}>
          <Label htmlFor="email">Seu e-mail</Label>
          <FormInput
            type="text"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin
          />

          <Label htmlFor="password">Sua senha</Label>
          <FormInput
            type="password"
            id="password"
            placeholder="Sua melhor senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ForgotPassword type="button" onClick={handleModalBehavior}>
            Esqueceu sua senha? Clique aqui!
          </ForgotPassword>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Entrar'}
          </SubmitButton>

          <SignUpText to="/signup">
            Não tem uma conta? Crie uma clicando aqui!
          </SignUpText>
        </FormContainer>
      </Container>

      <ModalOverlay modalIsOpen={modalIsOpen}>
        <Modal>
          <ModalHeader>
            <ModalTitle>Recuperar Senha</ModalTitle>
            <CloseButton onClick={handleModalBehavior} />
          </ModalHeader>

          <form onSubmit={handleResetPasswordForm}>
            <ModalBody>
              <Label htmlFor="reset-password">Seu e-mail</Label>
              <FormInput
                type="email"
                id="reset-password"
                placeholder="E-mail cadastrado na aplicação"
                value={resetPasswordEmail}
                onChange={(e) => setResetPasswordEmail(e.target.value)}
                margin
              />
            </ModalBody>

            <ModalFooter>
              <ModalSubmitButton type="submit" disabled={resetPasswordLoading}>
                {resetPasswordLoading ? <Spinner /> : 'Enviar'}
              </ModalSubmitButton>
            </ModalFooter>
          </form>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default SignIn;
