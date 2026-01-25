import React from 'react'

function Search(props) {
  if(props.value === ''){
    return(
      <>
      </>
    )
  }

  else{
    return(
      <>
      <h1>
        that's all we got!
      </h1>
      </>
    )
  }
}

export default Search
