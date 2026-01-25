import React from 'react'

function Icon(props) {
    
    if (props.open) {
        return (
            <div className='w-48 h-64 z-50'
            >
                <div className='bg-gray-100 rounded-3xl shadow-xl/40 p-8'>
                    <div>
                        <div>
                            <button>search</button>
                            <input type="search" name="" id="" placeholder='search' />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export default Icon
