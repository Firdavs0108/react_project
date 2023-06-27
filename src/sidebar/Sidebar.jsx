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

            <SidebarListItem>Life</SidebarListItem>
            <SidebarListItem>Music</SidebarListItem>
            <SidebarListItem>Style</SidebarListItem>
            <SidebarListItem>Sport</SidebarListItem>
            <SidebarListItem>Tech</SidebarListItem>
            <SidebarListItem>Cinema</SidebarListItem>
        </SidebarList>
            
        </SidebarItem>
        
        <SidebarItem>

            <SidebarTitle> FOLLOW US </SidebarTitle>
            <SidebarSocial>
                 <i style={{fontSize:'16px', marginLeft:'10px', cursor: 'pointer'}}  class="fa-brands fa-square-facebook"></i>
                 <i style={{fontSize:'16px', marginLeft:'10px', cursor: 'pointer'}} className="fa-brands fa-twitter"></i>
                 <i style={{fontSize:'16px', marginLeft:'10px', cursor: 'pointer'}} className="fa-brands fa-square-pinterest"></i>
                 <i style={{fontSize:'16px', marginLeft:'10px', cursor: 'pointer'}} className="fa-brands fa-square-instagram"></i>
            </SidebarSocial>
            
        </SidebarItem>


        
    </Container>
  )
}


export default Sidebar
