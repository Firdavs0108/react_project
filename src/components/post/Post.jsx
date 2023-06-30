import React from 'react'
import {Container,Img,PostInfo, PostCats, PostCatsInfo,PostTitle, PostDate, PostDesc } from './style'
import img4 from '../../assets/img/img4.jpg'

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
                Welcome To Samarkand 
            </PostTitle>
            <hr />
            <PostDate>1 hour ago</PostDate>
        </PostInfo>
                <PostDesc>Samarkand or Samarqand (/ˈsæmərkænd/ SAM-ər-kand; 
                    Uzbek: Самарқанд, romanized: Samarqand, pronounced 
                    [sæmærqænd, -ænt]; Tajik: Самарқанд; Persian: سمرقند; 
                    Sogdian: *smā́rkąθ,smʾrknδH) is a city in southeastern Uzbekistan and among the oldest continuously inhabited cities in Central Asia. There is evidence of human activity in the area of the city from the late Paleolithic Era. Though there is no direct evidence of when Samarkand was founded, several theories propose that it was founded between the 8th and 7th centuries BCE. Prospering from its location on the Silk Road between China, Persia and Europe, at times Samarkand 
                    was one of the largest[2] cities of Central Asia.[3</PostDesc>

    </Container>
  )
}

export default Post