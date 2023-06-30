import styled from "styled-components";



export const Container = styled.div`
width: 385px;
margin: 0px 25px 40px 25px;
`

export const Img = styled.img`
width: 100%;
height: 280px;
object-fit: cover;
border-radius: 7px;
`

export const PostInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
`

export const PostCats = styled.div`
font-family: 'Varela Round', sans-serif;
font-size: 11px;
color: #be9656;
line-height: 20px;
margin-top: 15px;
margin-right: 10px;
cursor: pointer;
`
export const PostCatsInfo = styled.span`

  
`

export const PostTitle = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 24px;
font-weight: 700;
margin-top: 15px;
cursor: pointer;
text-align: center;

`

export const PostDate = styled.span`

font-family: 'Lora', serif;
font-style: italic;
font-size: 13px;
color: #999;
margin-top: 15px;
  
`

export const PostDesc = styled.p`
font-family: 'Varela Round', sans-serif;
font-size: 14px;
color: #444;
line-height: 24px;
margin-top: 15px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
`

