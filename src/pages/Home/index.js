import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { useFirebase } from '../../contexts/FirebaseContext';

import Navbar from '../../components/Navbar';

import {
  Container,
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

  const { currentUser } = useAuth();
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
      <Navbar />

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
