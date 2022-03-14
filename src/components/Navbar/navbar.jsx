import React from 'react'
import "./navbar.css"
import { images } from '../../constants'
import { MdShoppingCart } from "react-icons/md";
import { MdPersonAddAlt1, MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import LoginComponent from '../Login/LoginComponent';
import { useUserContext } from '../../context/user_context';

const Navbar = (props) => {
  const { isLogin, logoutUser } = useUserContext()

  const [showscreen, setShowlogin] = React.useState(false);


  return (
    <nav className='sticky'>
      <marquee direction="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorum corrupti, praesentium in itaque possimus consequatur dolor iure reprehenderit nesciunt?</marquee>
      <div className='navbar__wrapper'>
        <Link className="nav__logo" to={{ pathname: '/' }}>
          <img src={images.medex_m_logo} alt="medex m logo" className='m_logo' />
          <img src={images.medex_text_logo} alt="medex text logo" className='text_logo' />
        </Link>
        <div className="nav_serchbar">
          {/* <Paper
         component="form"
         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, border: '2px solid #81cfdb' }}
        >
          <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Medicine"
          inputProps={{ 'aria-label': 'search' }}
          className="input_text"
          />
          <IconButton type="submit" sx={{ p: '10px' }} className="serchbar" aria-label="search">
          <SearchIcon  className="serchbar_icon"/>
          </IconButton>
       </Paper>  */}
          <div class="search-box">
            <input class="search-input" type="text" name="" placeholder="Search" />
            <a href="#" class="search-btn">
              <i class="fas fa-search"></i>
            </a>
          </div>

        </div>

        <div className="nav__logos">
          <Link to={{ pathname: "/cart" }} >
            <MdShoppingCart className='nav_alt_logo' />
          </Link>
          {isLogin ?
            <MdLogout className='nav_alt_logo' onClick={() => logoutUser()} />
            :
            <MdPersonAddAlt1 className='nav_alt_logo' onClick={() => setShowlogin(true)} />
          }
        </div>

      </div>
      <LoginComponent showscreen={showscreen} setShowlogin={setShowlogin} />
    </nav>
  )
}

export default Navbar