import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import REACT from '../assets/react.png'
import KOTLIN from '../assets/kotlin.png'
import FLUTTER from '../assets/flutter.png'
import BOOTSTRAP from '../assets/bootstrap.png'
import DJANGO from '../assets/django.png'
import SQL from '../assets/sql.png'
import FIREBASE from '../assets/firebase.png'
import JAVA from '../assets/java.png'
import GIT from '../assets/git.png'
import Tailwindcss from '../assets/tailwindcss.png'


const Experiences = () => {
  return (
    <div name='experiences' className='w-full h-[1100px] bg-[#0a192f] text-gray-300 py-4'>
        {/* CONTAINER */}
        <div className='max-w-[1000px]  mx-auto p-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-red-400 '>Experiences</p>
                <p className='py-4 text-2xl'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-28 mx-auto my-4' src={JAVA} alt="BOOTSTRAP icon" />
                    <p className='my-8'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={BOOTSTRAP} alt="BOOTSTRAP icon" />
                    <p className='my-8'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={REACT} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={Tailwindcss} alt="REACT icon" />
                    <p className='my-4'>Tailwindcss</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto my-3' src={SQL} alt="SQL icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-0' src={FIREBASE} alt="SQL icon" />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-0' src={DJANGO} alt="FLASK icon" />
                    <p className='my-4'>DJANGO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={FLUTTER} alt="FLUTTER icon" />
                    <p className='my-4'>FLUTTER</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={KOTLIN} alt="KOTLIN icon" />
                    <p className='my-4'>KOTLIN</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-32 mx-auto my-4' src={GIT} alt="BOOTSTRAP icon" />
                    <p className='my-8'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences