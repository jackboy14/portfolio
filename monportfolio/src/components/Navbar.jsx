import React, {useState} from "react";
import {FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    //CHANGEMENT DE NAVBAR
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10000) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);


    return (
        <div className={color ? 'navbar navbar-bg' : 'navbar border-b-2 shadow-md shadow-[#202c43] border-[#273347]'}>
            <div className="navbar-logo">
                <img className="hover:scale-125 duration-300" src={Logo} alt="Logo Image" style={{ width: '80px' }}  />
            </div>

            {/* MENU */}
            <ul className="hidden md:flex font-bold text-white">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="experiences" smooth={true} duration={500}>
                        Experiences
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* HUMBERGER */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* MOBILE MENU */}
            <ul className={!nav ? 'hidden' : 'font-bold text-white absolute top-0 left-0 w-full h-screen bg-[#273347] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="experiences" smooth={true} duration={500}>
                        Experiences
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar