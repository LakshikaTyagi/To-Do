import React from 'react'

function Planned(props) {
  return (
    <div className={`${!props.open && "hidden"} h-screen bg-amber-400 border-b-emerald-800 border`}>
      planned
    </div>
  )
}

export default Planned
