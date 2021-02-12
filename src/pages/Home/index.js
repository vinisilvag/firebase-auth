import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useAuth } from '../../contexts/AuthContext';
import { useFirebase } from '../../contexts/FirebaseContext';

import {
  Container,
  Navbar,
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  NavbarTitle,
  Avatar,
  Main,
  Label,
  FormInput,
  FormContainer,
  PostButton,
  PostContainer,
  UserName,
  AddButton,
  PlusIcon,
} from './styles';

const Home = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const { currentUser, signOut } = useAuth();
  const { db } = useFirebase();

  async function getAllPosts() {
    const data = await db.collection('posts').get();
    const filteredData = data.docs.map((doc) => {
      const uid = doc.id;
      const docData = doc.data();

      return { uid, data: docData };
    });

    setPosts(filteredData);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

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

  async function handleSubmitPost(e) {
    e.preventDefault();

    if (post) {
      const data = {
        text: post,
        name: currentUser.displayName,
        authorId: currentUser.uid,
      };

      await db.collection('posts').add(data);
    }

    setPost('');
  }

  return (
    <Container>
      <Navbar>
        <NavbarContainer>
          <NavbarLeft>
            <NavbarTitle>Dashboard</NavbarTitle>
          </NavbarLeft>
          <NavbarRight>
            <Avatar
              src={currentUser.photoURL}
              alt={currentUser.displayName}
              onClick={handleSignOut}
            />
          </NavbarRight>
        </NavbarContainer>
      </Navbar>

      <Main>
        <form onSubmit={handleSubmitPost}>
          <Label htmlFor="post">Post</Label>
          <FormContainer>
            <FormInput
              type="text"
              id="post"
              placeholder="Descreva seu post"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <PostButton type="submit">Postar</PostButton>
          </FormContainer>
        </form>

        <ul>
          {posts.map((singlePost) => (
            <PostContainer key={singlePost.uid}>
              {singlePost.data.text}
              <UserName>{singlePost.data.name}</UserName>
            </PostContainer>
          ))}
        </ul>
        <AddButton>
          <PlusIcon />
        </AddButton>
      </Main>
    </Container>
  );
};

export default Home;
