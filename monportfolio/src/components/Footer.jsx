import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa';


const Footer = () => {

  return (
    <div name='footer' className=' h-[80px] bg-[#0c203f] flex justify-center items-center'>
        <div className='flex justify-between items-center'>
            <div className='leger  text-gray-500'>
                <AiOutlineCopyright size={15}/>
            </div>
            <p className='leger text-gray-500'>
                All rights reserved | Designed by Dave_code 
            </p>
        </div>
        
    </div>
  )
}

export default Footer