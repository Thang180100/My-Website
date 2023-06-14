import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open' : 'close'}>
                <img src={logo} />
                <div className='hiddenLinks '>
                    <Link to='/'>THẮNG AUTO</Link>
                    <Link to='/menu'>SẢN PHẨM</Link>
                    <Link to='/about'>GIỚI THIỆU</Link>
                    <Link to='/contact'>LIÊN HỆ</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'> THẮNG AUTO</Link>
                <Link to='/menu'>SẢN PHẨM</Link>
                <Link to='/about'>GIỚI THIỆU</Link>
                <Link to='/contact'>LIÊN HỆ</Link>
                <button onClick={toggleNavbar}>
                    <DensityMediumIcon />
                </button>
            </div>

        </div>
    );
}

export default Navbar;