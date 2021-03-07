import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from '../Button/Button';

function Navbar(){
    const [click, setClick]=useState(false);
    const [button, setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        } else{
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);
    

    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>P.F.E.T.A.</Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-ellipsis-v':'fas fa-ellipsis-h'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>Donate</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-outline'>sign up</Button>}
                </div>

            </nav>
        </>
    );
}

export default Navbar;