import React from 'react'
import { Container, LoginButton, LoginForm, LoginRegButton, LoginTitle, FormLabel,LoginInput } from './style'

const Save = () => {
  return (
    <Container>
            <LoginTitle>Login</LoginTitle>
        <LoginForm>
            <FormLabel>Email</FormLabel>
            <LoginInput type="text" placeholder='Enter Your Email..'/>
            <FormLabel>Password</FormLabel>
            <LoginInput type="text" placeholder=' Enter Your Password..'/>
            <LoginButton>Login</LoginButton>
        </LoginForm>
        <LoginRegButton>Register</LoginRegButton>
    </Container>
  )
}

export default Save