import React from 'react'
import {Container,Img,PostInfo, PostCats, PostCatsInfo,PostTitle, PostDate, PostDesc } from './style'
import img4 from '../../assets/img/img5.jpg'

const Post = (props) => {
  return (
    <Container>
      <Img src={props.info.img} alt="" />

        <PostInfo>
            <PostCats>
                <PostCatsInfo>Ancient</PostCatsInfo>
                <PostCatsInfo>Cities</PostCatsInfo>

            </PostCats>

            <PostTitle>
                 {props.info.title}
            </PostTitle>
            <hr />
            <PostDate>{props.info.time}</PostDate>
        </PostInfo>
                <PostDesc>{props.info.describe} Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eos reiciendis maiores? A voluptate vel praesentium? Dicta nemo repellat ab, id nostrum dolorum iusto repudiandae pariatur, delectus provident voluptate est?</PostDesc>

    </Container>
  )
}

export default Post