import React from 'react'
import {Container, FormGroup, WriteForm, WriteFormGroup, WriteInput, WriteSubmit, WriteText, WriteImg} from './style'
import img5 from '../../assets/img/img5.jpg'


const Write = () => {
  return (
    <Container>
      <WriteImg src={img5} alt="" />
        <WriteForm>
          <FormGroup>
                 <label htmlFor="fileInput">
                 <i class="fa-solid fa-plus" style={{width:'25px', height:'25px',borderRadius:'50%', border: '1px solid', 
                 display: 'flex', alignItems:'center', justifyContent:'center', fontSize: '20px', color:'gray', cursor:'pointer'}}></i>
                 </label>
                 <input type="file" id='fileInput' style={{display: 'none'}} />
                 <WriteInput type="text" placeholder='Title' autoFocus={true} />
          </FormGroup>
              <FormGroup>
                <WriteText placeholder='Tell your story...' type='text'>

                </WriteText>
             </FormGroup>
             <WriteSubmit>Publish</WriteSubmit>
        </WriteForm>
    </Container>
  )
}

export default Write