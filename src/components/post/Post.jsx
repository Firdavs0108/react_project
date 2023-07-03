import React from 'react'
import {Container,Img,PostInfo, PostCats, PostCatsInfo,PostTitle, PostDate, PostDesc } from './style'
import img4 from '../../assets/img/img5.jpg'

const Post = (props) => {
  return (
    <Container>
      <a  href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <Img src={props.info.img} alt="" />  </a>

        <PostInfo>
            <PostCats>
                <PostCatsInfo>Ancient</PostCatsInfo>
                <PostCatsInfo>Cities</PostCatsInfo>

            </PostCats>

            <PostTitle>
               
                 <a style={{textDecoration: 'none', color: '#be9656'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'>   {props.info.title}   </a>

                 
            </PostTitle>
            <hr />
            {/* <PostDate>{props.info.watched}</PostDate> */}
        </PostInfo>
                <PostDesc>{props.info.describe} Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eos reiciendis maiores? A voluptate vel praesentium? Dicta nemo repellat ab, id nostrum dolorum iusto repudiandae pariatur, delectus provident voluptate est?</PostDesc>

    </Container>
  )
}

export default Post