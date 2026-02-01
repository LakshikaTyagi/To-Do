import React from 'react'

function Profile(props) {
  if(props.open) {
    return (
        <div className='h-24 w-96 z-50 right-0 float-right fixed'>
            <h1>microsoft</h1>
            <h2>sign out</h2>
            <p>my microsoft account</p>
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

export default Profile
