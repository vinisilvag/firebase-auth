import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useFirebase } from '../../contexts/FirebaseContext';
import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  FormContainer,
  Label,
  PhotoContainer,
  PhotoPreview,
  PhotoLabel,
  PhotoIcon,
  FormInput,
  Spinner,
  SubmitButton,
  SignInText,
} from './styles';

const SignUp = () => {
  const [photo, setPhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { currentUser, signUp } = useAuth();
  const { storage } = useFirebase();

  useEffect(() => {
    if (currentUser) {
      history.push('/app');
    }
  }, []);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      // eslint-disable-next-line func-names
      reader.onload = function (fileEvent) {
        setPreviewPhoto(fileEvent.target.result);
        setPhoto(e.target.files[0]);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    if (photo && name && email && password) {
      try {
        setLoading(true);
        signUp(email, password).then(async (res) => {
          const storageRef = storage.ref();
          const fileRef = storageRef.child(res.user.uid);
          await fileRef.put(photo);

          const photoURL = await fileRef.getDownloadURL();

          await res.user.updateProfile({
            displayName: name,
            photoURL,
          });

          history.push('/app');
        });
      } catch {
        toast.error('Falha ao criar a conta!', {
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

  return (
    <Container>
      <FormContainer onSubmit={handleSubmitForm}>
        <PhotoContainer>
          {previewPhoto ? (
            <PhotoPreview src={previewPhoto} alt={name} />
          ) : (
            <PhotoPreview
              src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
              alt="Imagem padrão"
            />
          )}
          <PhotoLabel htmlFor="photo-upload">
            <PhotoIcon />
          </PhotoLabel>
          <input
            id="photo-upload"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
            hidden
          />
        </PhotoContainer>

        <Label htmlFor="name">Seu nome</Label>
        <FormInput
          type="text"
          id="name"
          placeholder="Seu incrível nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label htmlFor="email">Seu e-mail</Label>
        <FormInput
          type="text"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="password">Sua senha</Label>
        <FormInput
          type="password"
          id="password"
          placeholder="Sua melhor senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton type="submit" disabled={loading}>
          {loading ? <Spinner /> : 'Cadastrar'}
        </SubmitButton>
        <SignInText to="/">Já tem uma conta? Entre clicando aqui!</SignInText>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
