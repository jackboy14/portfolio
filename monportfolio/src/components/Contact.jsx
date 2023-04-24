import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center py-10 p-8'>
        <form method='POST' action="https://getform.io/f/e53e1a60-3484-4374-9fa4-7f305a9859ff" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-red-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - kalipedavid@gmail.com</p>
            </div>
            <input required className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input required className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-400 hover:border-red-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact