import React from 'react'

function Help(props) {
  if(props.open) {
    return (
        <div className='h-full w-96 z-50 right-0 float-right fixed'>
            <h1>Help</h1>
            <h2>Learn more</h2>
            <p>Up to date</p>
        </div>
    )
  }
  else{
    return(
        <>
        </>
    )
  }
}

export default Help
