import styled from "styled-components";
import img10 from '../../assets/img/img10.jpg'



export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
    rgba(225,255,255,0.4), 
    rgba(225,255,255,0.4)), url(${img10});
    background-size:cover;


`
export const RegisterTitle = styled.span`
   font-size: 50px;
   color: black;

`

export const RegisterForm = styled.form`
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

export const RegisterInput = styled.input`
    padding: 10px 0;
    background-color: lightgreen;
    border: none;
    font-size: 13px;
    width: 250px;

`

export const RegisterButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;

`

export const RegisterLogButton = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;

`
