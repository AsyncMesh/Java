import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
  const [data, setData] = useState("");
    
  return (
    <div>Parent
        <input type='text' value={data} onChange={(e)=>{setData(e.target.value)}}/>
        <div>Child</div>
        <Child data={data}/>
    </div>
  )
}

export default Parent