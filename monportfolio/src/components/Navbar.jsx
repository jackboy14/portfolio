import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/Sans titre.png';
import {Link} from 'react-scroll'

const Navbar = () =>{
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" style={{width: '70px'}}/>
            </div>

            {/* MENU */ }
                <ul className="hidden md:flex">
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
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* MOBILE MENU */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="experiences" smooth={true} duration={500}>
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

            {/* SOCIAL ICONS */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/jackboy14">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-700">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://linkedin.com/in/david-kalipe-4663a525b">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6f89c2]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="mailto:kalipedavid@gmail.com">
                            Email <BsFillEnvelopeFill size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#38b840]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://wa.me/0022870616506">
                            WhatsApp <FaWhatsapp size={30}/>
                        </a>
                    </li>
                </ul>

            </div>
            

        </div>
    )
}

export default Navbar