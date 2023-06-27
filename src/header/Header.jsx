import React from 'react'
import {Container,HeaderTitles,Span, Span1, Img} from './style'
import img8 from '../assets/img/img8.jpg'
const Header = () => {
  return (
    <Container>


        <HeaderTitles>

            <Span>React & Node</Span>
            <Span1>Blog</Span1>

        </HeaderTitles>

        <Img src={img8} alt="" />

     

        
    </Container>
  )
}

export default Header