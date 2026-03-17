import React from 'react'

function Assigned(props) {
  return (
    <div className={`${!props.open && "hidden"} h-screen flex flex-col bg-[#FAF9F8]`} >
      
      <div className='flex justify-between items-center my-4 mx-6 text-[20px] text-[#457E21]'>
        <div className='flex items-center'>
          <div className='py-1.5 px-2 flex items-center'>
            <svg class="fluentIcon listTitle-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 14C19 14 20 15 20 16.25v.57c0 .9-.32 1.76-.9 2.44C17.53 21.1 15.15 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5zm0 1.5H6.25a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C7.3 19.76 9.26 20.5 12 20.5c2.74 0 4.7-.74 5.96-2.21.35-.41.54-.93.54-1.47v-.57a.75.75 0 00-.75-.75zM12 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="currentColor"></path></svg>
            <div className='ml-2'>Assigned to me</div>
          </div>
          <div className='p-1 ml-0.5 items-center text-center'>
            <button >...</button>
          </div>
          <div className='py-2 px-3 ml-1.5 flex items-center'>
            <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-4c0-.83.67-1.5 1.5-1.5h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4zm-9-9C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 012 7.5v-4C2 2.67 2.67 2 3.5 2h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0111 7.5v-4c0-.83.67-1.5 1.5-1.5h4z" fill="currentColor"></path></svg>
            <div className='ml-2'>Grid</div>
          </div>
          <div className='py-2 px-3 ml-1.5 flex items-center'>
            <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H12.5zm5-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-.98l.1-.01H17.5zm-4-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5z" fill="currentColor"></path></svg>
            <div className='ml-2 '>List</div>
          </div>
        </div>
        <div className='py-0.5 px-3 ml-1 right-0 flex items-center'>
          <svg class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
          <div className='ml-1 '>Sort</div>
        </div>
      </div>

    </div>

  )
}

export default Assigned
