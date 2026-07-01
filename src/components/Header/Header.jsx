import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../../Header_utilities/Icon/Icon';
import Search from '../../Header_utilities/Search/Search';
import Settings from '../../Header_utilities/Settings/Settings';
import Help from '../../Header_utilities/Help/Help';
import New from '../../Header_utilities/New/New';
import Profile from '../../Header_utilities/Profile/Profile';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [openIcon, setOpenIcon] = useState("none");

  return (
    <>
      <header className='sticky shadow z-70 w-full top-0 ' >
        <nav className='bg-[#2564CF] outline-none py-2' >
          <div className='flex items-center justify-between ' >

            {/* to do and svg */}
            <div className='flex items-center gap-4 pl-4'>
              
              <svg className='cursor-pointer' onClick={() => {
                openIcon === "icon" ? setOpenIcon("none") : setOpenIcon("icon")
              }
              } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3-icon lucide-grid-3x3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
              <Link to='/' className='flex items-center text-xl no-underline hover:underline w-fit font-medium text-gray-200 h-full text-sm/7'>To Do</Link>
            </div>

            <div className=''>
              <div className=' bg-white shadow-none rounded-md h-full hover:shadow-lg'>
                <button >
                  <div>
                    <div className='w-3 h-3 border-[#2564CF] border-2 rounded-full ml-3 mt-2 '></div>
                    <hr className='rotate-135 border-[#2564CF] w-[40%] ml-1.5 border bg-[#2564CF]' />
                  </div>
                </button>
                <input type="search" name="search" placeholder='Search' size="44" className='ml-2 right-0 outline-none' onChange={(e) => setSearchValue(() => e.target.value)} />
                <Search value={searchValue} />
              </div>
            </div>

            <div className='flex gap-4 items-center pr-3'>
              <div className=' hover:bg-sky-800' onClick={() => {
                openIcon === "settings" ? setOpenIcon("none") : setOpenIcon("settings")
              }
              }
              >
                <div className='w-8 h-full flex items-center m-auto justify-center'>⚙</div>
              </div>

              <div className='  hover:bg-sky-800 text-gray-300 text-2xl font-normal' onClick={() => {
                openIcon === "help" ? setOpenIcon("none") : setOpenIcon("help")
              }
              }>
                <div className=' flex items-center m-auto justify-center'> ? </div>
              </div>

              <div className='  hover:bg-sky-800 text-gray-300' onClick={() => {
                openIcon === "new" ? setOpenIcon("none") : setOpenIcon("new")
              }
              } >
                <div className=' flex items-center m-auto justify-center'> n </div>
              </div>

              <div className=' hover:bg-sky-800 flex flex-end' onClick={() => {
                openIcon === "profile" ? setOpenIcon("none") : setOpenIcon("profile")
              }
              }>
                <div className='w-8 h-full flex justify-center items-center m-auto '>
                  <div className=' w-full h-8 border border-gray-100 rounded-full  '>
                    <div className='w-full h-full flex justify-center items-center flex-wrap text-gray-100 text-sm'>LT</div>
                  </div>
                </div>
              </div>
            </div>

            

          </div>
        </nav>
      </header>
      <Icon open={openIcon === "icon"} />
      <Settings open={openIcon === "settings"} />
      <New open={openIcon === "new"} />
      <Help open={openIcon === "help"} />
      <Profile open={openIcon === "profile"} />
    </>
  )
}

export default Header
