import React from 'react'
import {Container,Img,PostInfo, PostCats, PostCatsInfo,PostTitle, PostDate } from './style'
import img4 from '../assets/img/img4.jpg'

const Post = () => {
  return (
    <Container>
            <Img src={img4} alt="" />

        <PostInfo>
            <PostCats>
                <PostCatsInfo>Music</PostCatsInfo>
                <PostCatsInfo>Life</PostCatsInfo>

            </PostCats>

            <PostTitle>
                Lorem ipsum dolor sit amet consectetur 
            </PostTitle>
            <hr />
            <PostDate>1 hour ago</PostDate>




        </PostInfo>
    </Container>
  )
}

export default Post