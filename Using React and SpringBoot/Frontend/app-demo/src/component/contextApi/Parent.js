import React, { useState } from 'react'
import Child1 from './Child1'
import ContextProvider from './ContextProvider';
const Parent = () => {
    const [data, setData] = useState("");
    return (
        <div>Parent<br />

            <input type='text' value={data} onChange={(e) => { setData(e.target.value) }} />
            <ContextProvider data={data}>
            <Child1 />
            </ContextProvider>
        </div>
    )
}

export default Parent