import React from 'react'

const Child = ({...props}) => {
  return (
    <div>
        <div>{props.data}</div>
    </div>
  )
}

export default Child