import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/18853f7e-35cd-42f1-be9b-24d0e5639798" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-400'>Contact</p>
              <p className='text-gray-400 py-4'>// Submit the form bellow or shoot me an email- leonel_ramirez93@hotmail.com.ar</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message"rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborete</button>
      </form>
    </div>
  )
}

export default Contact
