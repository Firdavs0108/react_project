import React from 'react'
import {Container} from './style'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import { Sidebar } from '../../sidebar/Sidebar'


export default function Home() {
  return (
       <>
       
      <Header/>
      
    <Container>
       <Posts/>
       <Sidebar/>
    </Container>
       
       </>
  )
}
