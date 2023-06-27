import React from 'react'
import {Container, SidebarItem, SidebarTitle, Img, SidebarList, SidebarListItem, SidebarSocial,  SidebarSocialList,P} from './style'
import img9 from '../assets/img/img9.jpg'
export const Sidebar = () => {
  return (
    <Container>

        <SidebarItem>

            <SidebarTitle> ABOUT ME </SidebarTitle>
            <Img src={img9} alt="" />
            <P>Hello, my name is Jesica and I am writing to introduce myself. My interests include photography, art, and music. </P>

        </SidebarItem>

        <SidebarItem>

        <SidebarTitle> CATEGORIES </SidebarTitle>
        <SidebarList>

        </SidebarList>
            <SidebarListItem>Life</SidebarListItem>
            <SidebarListItem>Music</SidebarListItem>
            <SidebarListItem>Style</SidebarListItem>
            <SidebarListItem>Sport</SidebarListItem>
            <SidebarListItem>Tech</SidebarListItem>
            <SidebarListItem>Cinema</SidebarListItem>
            
        </SidebarItem>
        
        <SidebarItem>

            <SidebarTitle> FOLLOW US </SidebarTitle>
            <SidebarSocial>
                 <i className="fa-brands fa-facebook"></i>
                 <i className="fa-brands fa-twitter"></i>
                 <i className="fa-brands fa-square-pinterest"></i>
                 <i className="fa-brands fa-square-instagram"></i>
            </SidebarSocial>
            
        </SidebarItem>


        
    </Container>
  )
}


export default Sidebar
