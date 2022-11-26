import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Location from './Location';



function Header() {
 const [ { basket,  user}, dispatch] = useStateValue();
  
 const handleAuthenticaton = ()=> {
    if(user){
        auth.signOut();
    }
 }


  return (
    <div className="header">
       
       
             <Link to='/'>
             <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt=""
             />
             </Link>

             <div className='header_option'>
                <span>Hello</span>
                <span className='location'><Location/></span>

             </div>
           
            <div className="header_search">
                <input className="header__searchInput" type="text" />
                <SearchIcon 
                className='header_searchIcon'/>
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className="header_option">
                    <span className="header__optionLineOne">Hello {!user? 'Guest' : user .email}</span>
                    <span className="header__optionLineTwo">{user ? 'sign Out' : 'sign In'}</span>
                </div>
                </Link>

                 <Link to="/Orders">
                <div className="header_option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>


                <div className="header_option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className='header_optionBasket '>
                    <Link to='/Checkout'> <ShoppingBasketIcon className='icon_cart'  />
                    </Link>
                
                <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
            </div>
    </div>
  )
}

export default Header