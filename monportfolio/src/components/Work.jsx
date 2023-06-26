import React from 'react'
import Sign from '../assets/projet2.png'
import Gdsc from '../assets/project6.png'
import P5 from '../assets/project5.png'
import P9 from '../assets/project9.png'
import P8 from '../assets/project8.png'
import C1 from '../assets/c1.png'
import C2 from '../assets/c2.png'

const Work = () => {
  return (
    <div name='work' className='w-full h-[2200px] md:h-screen text-white bg-[#273347]'>
        <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 text-white border-green-500'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            {/* CONTAINER */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>

                {/* GRID ITEM */}
                <div style={{backgroundImage: `url(${Sign})`}} className='rounded-md shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTs */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl text-center font-bold text-red-600 tracking-wider'>
                            Authentification
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Gdsc})`}} className='rounded-md shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTs */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl text-center font-bold text-red-600 tracking-wider'>
                            IAI-GDSC projet's form
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                {/* GRID ITEM */}
                <div style={{backgroundImage: `url(${P5})`}} className='rounded-md shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTs */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl text-center font-bold text-red-600 tracking-wider'>
                            Night mode of form
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${P9})`}} className='rounded-md shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'>

                    {/* HOVER EFFECTs */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl text-center font-bold text-red-600 tracking-wider'>
                            E-commerce website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* GRID ITEM */}
                <div style={{backgroundImage: `url(${C1})`}} className='rounded-md shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTs */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl text-center font-bold text-red-600 tracking-wider'>
                            Chat Web App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${C2})`}} className='rounded-md shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTs */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl text-center font-bold text-red-600 tracking-wider'>
                            CRUD Transaction Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='rounded-md text-center  px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work