import React, { useContext } from 'react'
import { mycontext } from './mycontext';

const Child3 = () => {
    const data=useContext(mycontext);
  return (
    <div>Child3
        {data}
    </div>
  )
}

export default Child3