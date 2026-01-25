import React from 'react'

function Settings(props) {
  if(props.open) {
    return (
        <div className='h-full w-96 z-50 right-0 float-right '>
            <h1>Settings</h1>
            <h2>General</h2>
            <p>Confirm before deleting</p>
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

export default Settings
