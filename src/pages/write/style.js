import styled from "styled-components";



export const Container = styled.div`
    padding-top: 50px;
   

`
export const WriteImg= styled.img`
     margin-left: 150px;
     width: 70vw;
     height: 250px;
     border-radius: 10px;
     object-fit: cover;

`

export const WriteForm = styled.form`
    position: relative;

    
`
export const FormGroup = styled.div`
    margin-left: 150px;
    display: flex;
    align-items: center;

`

export const WriteInput = styled.input`
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;
    :focus{
        outline:none
    }
`

export const WriteFormGroup = styled.div`
       
`

export const WriteText = styled.textarea`
    font-size: 20px;
    border: none;
    padding: 20px;
    width: 70vw;
    height: 70vh;
    :focus{
        outline:none
    }
`

export const WriteSubmit = styled.button`
    position:absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
  
`