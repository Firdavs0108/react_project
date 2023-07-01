import React from 'react'
import { Container, LoginForm } from './style'

const Save = () => {
  return (
    <Container>
        <LoginForm>
            <label>Email</label>
            <input type="text" placeholder='Enter Your Email..' />
            <label>Password</label>
            <input type="text" placeholder=' Enter Your Password..' />
        </LoginForm>
    </Container>
  )
}

export default Save