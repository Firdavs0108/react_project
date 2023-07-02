import React from 'react';
import { Container } from './style';
import Post from '../post/Post';
import { cardInfo } from './data';

export const Posts = () => {
  return (
    <Container>
      {cardInfo.map((value) => (
        <Post info={value} key={value.id} />
      ))}
    </Container>
  );
};

export default Posts;

