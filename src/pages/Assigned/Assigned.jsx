import React from 'react'

function Assigned(props) {
  return (
    <div className={`${!props.open && "hidden"} h-screen bg-amber-400 border-b-emerald-800 border`} >
      Assigned
      
    </div>

  )
}

export default Assigned
