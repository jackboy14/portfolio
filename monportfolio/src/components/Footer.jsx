import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {BsFillEnvelopeFill} from "react-icons/bs";


const Footer = () => {

  return (
    <div name='footer' className=' h-[80px] bg-[#334155] flex justify-center items-center'>
        <div className='flex justify-between items-center'>
            <div className='text-white'>
                <AiOutlineCopyright size={15}/>
            </div>
            <p className='leger text-white pl-2'>
                2023 | Jackboy -
                <a title='Startup' href='/'> Digital Craft</a>
            </p>
            <a href='mailto:kalipedavid@gmail.com' className='m-4 text-white hover:text-[#2d8e6a]'>
                <BsFillEnvelopeFill size={20}/>
            </a>
        </div>

    </div>

  )
}

export default Footer