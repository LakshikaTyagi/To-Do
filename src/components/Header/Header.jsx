import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideButton from '../SideButton/SideButton'
import Search from '../Search/Search'

function Header() {
  
  return (
    <>
      <header className='sticky shadow z-50 w-full top-0 ' >
        <nav className='bg-[#2564cf]' >
          <div className='flex flex-wrap mx-auto items-center h-12' >
            <div className='w-1/32 h-full '>
              <Link to='/' className='flex items-center flex-column'>
              
              </Link>
            </div>
            <div className='flex flex-row justify-between items-center w-31/32 '>
              <Link to="/" className='text-[#A19F9D] no-underline hover:underline' >
              To Do
              </Link>
              <Link to="#" className='flex justify-center items-center m-auto'>
              <input type="search" className='bg-white margin-auto'   />
              </Link>
              <div>
                <Link to="/setting" className='' >
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OiL34vtU1cGNsFglsqFMNI8lwUHi7DUF5A&s" alt="" className='h-12 w-12' /> */}
                ⚙
                </Link>
                <Link className=''>?
                </Link>
                <Link></Link>
              </div>
              <div>
                <Link></Link>
                <Link></Link>
                <Link></Link>
              </div>
            </div>
            <div></div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
