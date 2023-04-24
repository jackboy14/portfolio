import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kokou David KALIPE</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full Stack web and mobile Developer</h2>
            <p  className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing
                 in front-end with React, in back-end
                  with Flask/Django and as far as concerned
                   a mobile, I use Flutter/Kotlin. Currently, I'm focused
                    on building responsive full-stack web application</p>
            <div>
                <button to='about' className='text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-red-400 hover:border-red-400'>
                    <Link to="about" smooth={true} duration={500}>
                        View work
                    </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home