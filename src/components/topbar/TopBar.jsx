import './topbar.css'
import img3 from '../../assets/img/img3.jpg'
import { Link } from 'react-router-dom'

const TopBar = () => {
  const user = false
  return (
    <div className='top'>
        <div className="topLeft">
       <a  href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{color:'blue'}} className="topIcon fa-brands fa-square-facebook"></i>  </a> 
       <a  href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{color:'blue'}} className="topIcon fa-brands fa-twitter"></i>  </a> 
       <a  href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{color:'blue'}} className="topIcon fa-brands fa-square-pinterest"></i>  </a> 
       <a  href="https://www.lonelyplanet.com/uzbekistan"target='blank'> <i style={{color:'blue'}} className="topIcon fa-brands fa-square-instagram"></i>  </a> 
        
  

        </div>
        <div className="topCentre">
            <ul className="topList">
                <li className='topListItem'>
                  <Link className='link' to='/'>HOME</Link>
                </li>
                <li className='topListItem'><Link className='link' to='/'>ABOUT</Link> </li>
                <li className='topListItem'> <Link className='link' to='/'>CONTACT</Link> </li>
                <li className='topListItem'><Link className='link' to='/write'>WRITE</Link> </li>
                <li className='topListItem'>
                  {user && 'LOGOUT'}
                   </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className='topImg' src={img3} 
              alt="" />
            )
            :
            (
              <ul className='topList'>
                <li className='topListItem'>
              <Link className='link' to='/save'>LOGIN</Link>
                </li>

                <li className='topListItem'>
              <Link className='link' to='/register'>REGISTER</Link>
                </li>
              </ul>
            )
          }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar