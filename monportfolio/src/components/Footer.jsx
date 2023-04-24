import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'


const Footer = () => {

  return (
    <div name='footer' className=' h-[80px] bg-[#0c203f] flex justify-center items-center'>
        <div className='flex justify-between items-center'>
            <div className='leger  text-gray-500'>
                <AiOutlineCopyright size={15}/>
            </div>
            <p className='leger text-gray-500 pl-2'>
                2023 - All rights reserved | Designed by Dave_code 
            </p>
        </div>
        
    </div>
  )
}

export default Footer