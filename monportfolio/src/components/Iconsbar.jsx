import React from 'react'
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {BsFillEnvelopeFill} from "react-icons/bs";


    const Iconbar = () => {
        return (
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] ">
                        <a className="flex justify-between items-center w-full text-white"
                           href="https://github.com/jackboy14">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-700">
                        <a className="flex justify-between items-center w-full text-white"
                           href="https://linkedin.com/in/david-kalipe-4663a525b">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6f89c2]">
                        <a className="flex justify-between items-center w-full text-white"
                           href="mailto:kalipedavid@gmail.com">
                            Email <BsFillEnvelopeFill size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#38b840]">
                        <a className="flex justify-between items-center w-full text-white"
                           href="https://wa.me/0022870616506">
                            WhatsApp <FaWhatsapp size={30}/>
                        </a>
                    </li>
                </ul>

            </div>
        )
    }
export default Iconbar