import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../../Header_utilities/Icon/Icon';


function Header() {

  const [iconOpen, setIconOpen] = useState(false);
  
  
  return (
    <>
      <header className='sticky shadow z-70 w-full top-0 ' >
        <nav className='bg-[#2564CF] outline-none' >
          <div className='flex flex-wrap mx-auto items-center h-12' >
            <div className='w-12 h-full ' onClick={() => setIconOpen(()=> !iconOpen)} >
              <div className='w-8 h-full items-center m-auto relative'>
                <div className='w-full h-4 absolute top-4 m-auto flex flex-col gap-1'>
                  <div className='flex flex-row gap-1'>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                  </div>
                  <div className='flex flex-row gap-1'>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                  </div>
                  <div className='flex flex-row gap-1'>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                    <div className='w-1 h-1 border-white bg-white rounded-full '></div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='h-full '>
              <div className='pr-3 pl-2 h-full'>
                <div className=' text-gray-200  h-full'>
                  <Link to='/' className= 'pt-4 top-3 no-underline hover:underline w-fit '>To Do</Link>
                </div>
              </div>
            </div>
          </div>
          
        </nav>
      </header>
      <Icon open = {iconOpen} />
    </>
  )
}

export default Header
