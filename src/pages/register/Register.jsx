import React from 'react'
import { Container, RegisterButton, RegisterForm, RegisterLogButton, RegisterTitle, FormLabel,RegisterInput } from './style'

const Register = () => {
  return (
    <Container>
            <RegisterTitle>Register</RegisterTitle>
        <RegisterForm>
            <FormLabel>Username</FormLabel>
            <RegisterInput type="text" placeholder='Enter Your Username.'/>
            <FormLabel>Email</FormLabel>
            <RegisterInput type="text" placeholder='Enter Your Email..'/>
            <FormLabel>Password</FormLabel>
            <RegisterInput type="text" placeholder=' Enter Your Password..'/>
            <RegisterButton>Register</RegisterButton>
        </RegisterForm>
        <RegisterLogButton>Login</RegisterLogButton>
    </Container>
  )
}

export default Register