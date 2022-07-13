import React , {useState} from 'react';
import './Navbar.css';
import logo1 from '../images/logo1.png';
import mlg from '../pdf/mentionlegales.pdf'
import cgu from '../pdf/CGU.pdf'
import {FaBars, FaTimes} from 'react-icons/fa';
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo1} alt='logo'/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'><a href={cgu}>CGU</a></li>
            <li className='nav-item'><a href={mlg}>Mentions legales</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}
        </div>
    </div>)
}
export default Navbar 