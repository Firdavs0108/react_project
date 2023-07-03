import React from 'react'
import {Container, SidebarItem, SidebarTitle, Img, SidebarList, SidebarListItem, SidebarSocial,  SidebarSocialList,P} from './style'
import img9 from '../../assets/img/img9.jpg'
export const Sidebar = () => {
  return (
    <Container>

        <SidebarItem>

            <SidebarTitle> ABOUT US </SidebarTitle>
            <Img src={img9} alt="" />
            <P>Travel with us around the world easy and cheap. Consumers want to create itineraries, access travel guides, and book flights and hotel rooms conveniently. Your travel technology provider can translate whatever service you want to deliver into a web app. </P>

        </SidebarItem>

        <SidebarItem>

        <SidebarTitle> CATEGORIES </SidebarTitle>
        <SidebarList>

            <SidebarListItem> <a style={{textDecoration: 'none', color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> Hotels  </a></SidebarListItem>
            <SidebarListItem> <a style={{textDecoration: 'none', color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> Flights </a></SidebarListItem>
            <SidebarListItem> <a style={{textDecoration: 'none', color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> Trains  </a></SidebarListItem>
            <SidebarListItem> <a style={{textDecoration: 'none', color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> Attractions&Tours </a></SidebarListItem>
            <SidebarListItem> <a style={{textDecoration: 'none', color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> Car Rentals </a></SidebarListItem>
            <SidebarListItem> <a style={{textDecoration: 'none', color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> Airport Transfers  </a></SidebarListItem>
           
        </SidebarList>
            
        </SidebarItem>
        
        <SidebarItem>

            <SidebarTitle> FOLLOW US </SidebarTitle>
            <SidebarSocial>
            <a style={{color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{fontSize:'16px', marginLeft:'10px', Color: 'blue' , cursor: 'pointer'}} className=" fa-brands fa-square-facebook"></i>  </a> 
            <a style={{color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{fontSize:'16px', marginLeft:'10px', Color: 'blue' ,cursor: 'pointer'}} className="fa-brands fa-twitter"></i>  </a> 
            <a style={{color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{fontSize:'16px', marginLeft:'10px', Color: 'blue' ,cursor: 'pointer'}} className="fa-brands fa-square-pinterest"></i>  </a> 
            <a style={{color:'blue'}} href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{fontSize:'16px', marginLeft:'10px', Color: 'blue' ,cursor: 'pointer'}} className="fa-brands fa-square-instagram"></i>  </a> 
                 
            </SidebarSocial>
            
        </SidebarItem>


        
    </Container>
  )
}


export default Sidebar
