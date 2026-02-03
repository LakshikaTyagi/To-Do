import React from 'react'

function Tasks(props) {
  return (
    <div className={`${!props.open && "hidden"} h-screen bg-amber-400 border-b-emerald-800 border`}>
      tasks
    </div>
  )
}

export default Tasks
