import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../../Header_utilities/Icon/Icon';
import Search from '../../Header_utilities/Search/Search';
import Settings from '../../Header_utilities/Settings/Settings';
import Help from '../../Header_utilities/Help/Help';
import New from '../../Header_utilities/New/New';

function Header() {

  const [iconOpen, setIconOpen] = useState(false);
  const[searchValue, setSearchValue] = useState('');
  const [settingOpen, setSettingOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);

  return (
    <>
      <header className='sticky shadow z-70 w-full top-0 ' >
        <nav className='bg-[#2564CF] outline-none' >
          <div className='flex flex-wrap mx-auto items-center h-12' >

            <div className='w-12 h-full hover:bg-sky-800 ' onClick={() => setIconOpen(() => !iconOpen)} >
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
                <Link to='/' className='flex items-center text-xl no-underline hover:underline w-fit font-medium text-gray-200 h-full text-sm/7'>To Do</Link>
              </div>
            </div>

            <div className='h-full py-2'>
              <div className='mx-100  bg-white shadow-none rounded-md w-100 h-full hover:shadow-lg'>
                <button >
                  <div>
                    <div className='w-3 h-3 border-[#2564CF] border-2 rounded-full ml-3 mt-2 '></div>
                    <hr className='rotate-135 border-[#2564CF] w-[40%] ml-1.5 border bg-[#2564CF]' />
                  </div>
                </button>
                <input type="search" name="search" placeholder='Search' size = "44" className='ml-2 right-0 outline-none' onChange={(e) => setSearchValue(() => e.target.value)} />
                <Search value = {searchValue}/>
              </div>
            </div>

            <div className='w-12 h-full hover:bg-sky-800' onClick={() => setSettingOpen(() => !settingOpen)} >
              <div className='w-8 h-full flex items-center m-auto justify-center'>⚙</div>
            </div>

            <div className='w-12 h-full hover:bg-sky-800 text-gray-300' onClick={() => setHelpOpen(() => !helpOpen)} >
              <div className='w-8 h-full flex items-center m-auto justify-center'>?</div>
            </div>

            <div className='w-12 h-full hover:bg-sky-800 text-gray-300' onClick={() => setNewOpen(() => !newOpen)} >
              <div className='w-8 h-full flex items-center m-auto justify-center'>n</div>
            </div>

          </div>
        </nav>
      </header>
      <Icon open={iconOpen} />
      <Settings open = {settingOpen}></Settings>
      <New open = {newOpen}/>
      <Help open = {helpOpen}/>
    </>
  )
}

export default Header
