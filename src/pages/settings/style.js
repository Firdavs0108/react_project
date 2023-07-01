import styled from "styled-components";



export const Container = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    flex:9;
    padding:20px;
`

export const SettingTitle = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;

`
export const SettingUpTitle = styled.span`
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;

`

export const SettingDelTitle = styled.span`
    color: red;
    font-style: 12px;
    cursor: pointer;
`

export const SettingsForm = styled.form`
    display: flex;
    flex-direction: column;

`

export const SettingsPP = styled.div`
     display: flex;
     align-items:center;
     margin: 10px 0;

`

export const Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
`

export const SettingsLabel = styled.label`
    font-size: 20px;
    margin-top: 20px;
    
`

export const Forms = styled.input`
    color: gray;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
    :focus{
        outline:none
    }
    
`

export const SettingsSubmit = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;

`