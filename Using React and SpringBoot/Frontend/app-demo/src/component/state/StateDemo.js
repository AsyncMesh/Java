import React, { useState } from 'react'

const StateDemo = () => {
  const [state,setState]=useState('');
  const changeRajat=()=>{
    setState('')
  }
 
  return (
    <div> StateDemo </div>
  )
}

export default StateDemo