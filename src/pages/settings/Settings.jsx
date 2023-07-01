import React from 'react'
import {Container, SettingTitle, SettingUpTitle, Img, Wrapper,SettingDelTitle, SettingsForm, SettingsPP, SettingsSubmit, SettingsLabel,Forms} from './style'
import Sidebar from '../../components/sidebar/Sidebar'
import img4 from '../../assets/img/img4.jpg'


const Settings = () => {
  return (
    <Container>
        <Wrapper>  

          <SettingTitle>
            <SettingUpTitle>Update Your Account</SettingUpTitle>
            <SettingDelTitle>Delete Account</SettingDelTitle>
          </SettingTitle>

          <SettingsForm>
            <SettingsLabel> Profile Picture</SettingsLabel>
            <SettingsPP>
              <Img src={img4} alt="" />
              <SettingsLabel htmlFor="fileInput">
              <i class="fa-solid fa-user" style={{width: '25px', height: '25px', borderRadius:'50%', backgroundColor:'lightcoral',
               color:'white', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'10px', cursor:'pointer'}}></i>
              </SettingsLabel>
              <Forms type="file" id='fileInput' style={{display: 'none'}} />
            </SettingsPP>

              <SettingsLabel>Username</SettingsLabel>
              <Forms type="text" placeholder='FredRick' />
              <SettingsLabel>Email</SettingsLabel>
              <Forms type="email" placeholder='fredrick@gamil.com' />
              <SettingsLabel>Password</SettingsLabel>
              <Forms type="password" />
              <SettingsSubmit>Update</SettingsSubmit>

          </SettingsForm>


        </Wrapper>
        
        <Sidebar/>
    </Container>
  )
}

export default Settings