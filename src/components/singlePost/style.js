import styled from "styled-components";



export const Container = styled.div`
    flex: 9;
`

export const Wrapper = styled.div`
 padding: 20px;
 padding-right: 0;
  
`

export const Img = styled.img`
width:100%;
height: 300px;
border-radius: 5px;
object-fit: cover;
  
`

export const SinglePostTitle = styled.h1`
text-align: center;
margin: 10px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 28px;
  
`

export const SinglePostEdit = styled.div`
float:right;
font-size: 16px;
  
`

export const SinglePostInfo = styled.div`
margin-bottom: 20px;
display: flex;
justify-content:space-between;
font-size: 16px;
color: #b39656;
font-family: Verdana, Geneva, Tahoma, sans-serif;

  
`

export const SinglePostAuthor = styled.span`
  
`

export const SinglePostDate = styled.span`
  
`
export const SinglePostDesc = styled.p`
    color: #666;
    font-size: 18px;
    line-height:25px;
    ::first-letter{
    margin-left:20px;
    font-size: 30px;
    font-weight: 600;
}
`