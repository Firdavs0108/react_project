import React from 'react'
import {Container,HeaderTitles,Span, Span1, Img} from './style'
import img5 from '../../assets/img/img11.webp'
const Header = () => {
  return (
    <Container>


        <HeaderTitles>

            <Span>Travel Around</Span>
            <Span1>Uzbekistan</Span1>

        </HeaderTitles>

        <Img src={img5} alt="" />

     

        
    </Container>
  )
}

export default Header