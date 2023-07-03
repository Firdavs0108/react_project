import styled from "styled-components";
import img10 from '../../assets/img/img11.jpg'



export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
    rgba(225,255,255,0.5), 
    rgba(225,255,255,0.5)), url(${img10});
    background-size:cover;


`
export const LoginTitle = styled.span`
   font-size: 50px;
   color: black;

`

export const LoginForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

`

export const FormLabel = styled.label`
    margin: 10px 0;
    color: black;
    font-size: 18px;
    font-weight: bold;
`

export const LoginInput = styled.input`
    padding: 10px 0;
    background-color: white;
    border: none;
    width: 250px;

`

export const LoginButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: lightcoral;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;

`

export const LoginRegButton = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;

`
