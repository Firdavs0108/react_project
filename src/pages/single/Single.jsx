import React from 'react'
import {Container} from './style'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'


const Single = () => {
  return (
    <Container>
        {/* post */}
        <SinglePost/>
        <Sidebar/>
    </Container>
  )
}

export default Single