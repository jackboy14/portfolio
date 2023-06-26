import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Me from '../assets/moi.svg'

const Home = () => {
  return (
    <div name='home' className='w-full h-[800px] pb-44 bg-[#273347]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='mt-44 mb-5 text-green-700 font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-white'>Kokou David KALIPE</h1>
            <h2 className='text-3xl sm:text-3xl font-bold text-[#c5cbff]'>I'm a full Stack web and mobile Developer,
                <p> one of <a className='font-bold inline border-b-4 border-yellow-500' href='/'>Digital Craft</a> member.</p></h2>
            <p  className='text-[#c5cbff] py-5 max-w-[500px]'>I'm a full-stack developer specializing
                 in front-end with React, in back-end
                  with ASP.NET Core and as far as concerned
                   a mobile, I use .NET MAUI. Currently, I'm focused
                    on building responsive full-stack web application</p>
            <div>
                <button to='about' className=' shadow-md shadow-green-500 hover:scale-110 duration-700 text-white group px-6 py-3 my-2 flex items-center  bg-green-700 '>
                    <Link to="about" smooth={true} duration={500}>
                        View more
                    </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                </button>

                {/*PNG EN GRAND ECRAN*/}
                <div className='moi flex-row hidden lg:flex justify-end absolute top-[33%] right-0'>
                    <img className='mr-24' src={Me} alt='jackboy-digital-craft' style={{width: "460px"}}/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Home