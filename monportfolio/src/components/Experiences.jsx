import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import REACT from '../assets/react.png'
import BOOTSTRAP from '../assets/bootstrap.png'
import SQL from '../assets/sql.png'
import JAVA from '../assets/java.png'
import GIT from '../assets/git.png'
import Tailwindcss from '../assets/tailwindcss.png'
import ASP from '../assets/asp.png'
import C from '../assets/c.png'
import Jetbrains from '../assets/jetbrains.png'
import Mongo from '../assets/mongo.png'
import Alpin from '../assets/alpinjs.png'


const Experiences = () => {
  return (
    <div id="bg" name='experiences' className='w-full h-[1100px] bg-[#273347] text-white py-4'>
        {/* CONTAINER */}
        <div className='max-w-[1000px]  mx-auto p-10 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-green-500 '>Experiences</p>
                <p className='py-4 text-2xl'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-12'>
                <div className='shadow-md shadow-[#122136]  -hover:scale-110 hover:bg-[#2d8e6a] -duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-20 mx-auto my-4' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-28 mx-auto my-4' src={JAVA} alt="BOOTSTRAP icon" />
                    <p className='my-8'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-20 mx-auto my-4' src={BOOTSTRAP} alt="BOOTSTRAP icon" />
                    <p className='my-8'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-20 mx-auto my-4' src={REACT} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-20 mx-auto my-8' src={Alpin} alt="REACT icon" />
                    <p className='my-4'>AlpinJs</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-20 mx-auto my-4' src={Tailwindcss} alt="REACT icon" />
                    <p className='my-4'>Tailwindcss</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-24 mx-auto my-3' src={SQL} alt="SQL icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-24 mx-auto my-4' src={Mongo} alt='Mongo icon'/>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-24 mx-auto my-3' src={C} alt="" />
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-28 mx-auto my-0' src={ASP} alt="SQL icon" />
                    <p className='my-4'>ASP .NET Core</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-32 mx-auto my-4' src={GIT} alt="BOOTSTRAP icon" />
                    <p className='my-8'>Github</p>
                </div>
                <div className='shadow-md shadow-[#122136] -hover:scale-110 hover:bg-[#2d8e6a] duration-500'>
                    <img className='w-24 mx-auto my-4' src={Jetbrains} alt="BOOTSTRAP icon" />
                    <p className='my-0'>Jetbrains Tools</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences