import React from 'react'

function New(props) {
  if(props.open) {
    return (
        <div className='h-full w-96 z-50 right-0 float-right fixed '>
            <h1>What's New</h1>
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

export default New
