import React from 'react'
import Gitl from '../assets/github.png'


function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
              <p className='py-6'>// Check out some of my recent work</p>
          </div>

            {/*Container*/}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {/*Grid Item*/}
              <div
              style={{background:`url(${Gitl})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/*Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                        Weather Application
                      </span>
                      <div className='pt-8 text-center'>
                          <a href="https://github.com/Tronjheim/weather-app" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                          </a>
                          
                      </div>
                  </div>
              </div>
              <div
              style={{background:`url(${Gitl})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/*Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                        Todo App
                      </span>
                      <div className='pt-8 text-center'>
                          <a href="https://github.com/Tronjheim/todo-app" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                          </a>
                          
                      </div>
                  </div>
              </div>
              <div
              style={{background:`url(${Gitl})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  {/*Hover Effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                      Compound interest calculator
                      </span>
                      <div className='pt-8 text-center'>
                          <a href="https://github.com/Tronjheim/compound-interest-calculator"target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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
