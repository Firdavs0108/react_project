import React from 'react'
import {Container, Wrapper,Img, SinglePostTitle, SinglePostEdit, SinglePostInfo, SinglePostAuthor, SinglePostDate, SinglePostDesc} from './style'
import img6 from '../../assets/img/img6.jpg'


const SinglePost = () => {
  return (
    <Container>
        <Wrapper>
            <Img src={img6} alt="" />
            <SinglePostTitle>
                Welcome to Termez!.

                    <SinglePostEdit>
                    <i style={{marginLeft:'10px', cursor: 'pointer'}} class="fa-regular fa-pen-to-square"></i>
                    <i style={{marginLeft:'10px', cursor: 'pointer'}} class="fa-solid fa-trash"></i>

                    </SinglePostEdit>
            </SinglePostTitle>
          
            <SinglePostInfo>
                <SinglePostAuthor>Author: <b>FredRick</b></SinglePostAuthor>
                <SinglePostDate>1 hour ago</SinglePostDate>
            </SinglePostInfo>
            <SinglePostDesc>Termez (Uzbek: Termiz/Термиз; Persian: ترمذ Termez, Tirmiz; Arabic: ترمذ Tirmidh; Russian: Термез; Ancient Greek: Tàrmita, Thàrmis, Θέρμις) is the capital of Surxondaryo Region
                 in southern Uzbekistan. Administratively, it is a 
                 district-level city.[2] Its population is 182,800 (2021).[1] It is notable as the site of Alexander the Great's city Alexandria on the Oxus, as a center of early 
                 Buddhism, as a site of Muslim pilgrimage, and as a base of 
                 Soviet Union military operations in Afghanistan, accessible via the nearby Hairatan border crossing.
                Etymology
                 Some link the name of the city to the Greek word Θέρμος (thermos), meaning "hot", and date the toponym to the rule of Alexander the Great.[3] Others suggest that it 
                 came from Sanskrit तर्मतो (taramato), meaning "on the river bank".[4][5]
                 History Ancient times Buddha with monks, from Fayaz Tepe.
                One of Central Asia's oldest towns, Old Termez, located a few kilometers west of the modern city along the Amu Darya river, was established sometime before the 3rd 
                century BC.[6] The city may have been known to the Achaemenids (the 10th century Shahnameh purports its existence during the mythological Zoroastrian Kayanian dynasty).[7]
                </SinglePostDesc>


        </Wrapper>
    </Container>
  )
}

export default SinglePost