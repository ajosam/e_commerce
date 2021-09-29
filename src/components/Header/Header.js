import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {

    const login = ()=>{
        auth.signOut();
    }

    const [{basket,user}] = useStateValue();

    return (
        <nav className='header'>
            <Link to='/'>
            <img className='header__logo'
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className='header__Search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='header__LineOne'>Hi {user?.email}</span>
                        <span className='header__LineTwo'>{user ? 'Sign Out' : 'sign In'}</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__LineOne'>Returns</span>
                        <span className='header__LineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__LineOne'>Your</span>
                        <span className='header__LineTwo'>Prime</span>
                    </div>
                </Link>
                
                <Link to='/checkout' className='header__link'>
                    <div className='header__basket'>
                        <AddShoppingCartIcon />
                        <span className='header__LineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
