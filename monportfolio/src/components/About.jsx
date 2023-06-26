import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-[1100px] bg-[#273347] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-10 pl-6'>
                    <p className='text-5xl font-bold inline border-b-4 border-green-500'>About</p>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm David, nice to meet you.
                           Please take a look to the side.</p>
                    </div>
                    <div className='text-2xl'>
                        <p>
                        Extremely motivated
                             to constantly develop my skills and
                              evolve in the field of IT. I am confident in my 
                              ability to propose interesting
                               ideas for solving a given problem.
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About