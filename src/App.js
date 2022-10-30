import React, { useState, useRef } from 'react'

function Sub(props) {
    return (
      <>
        <h2>CLICK BUTTON TO ADD NUMBER : {props.num}</h2>
        <button onClick={()=>props.setNum(props.num+1)}>Add</button>
      </>
    )
}

function App() {
   const [num, setNum] = useState(1)
   return <Sub num={num} setNum={setNum} />
}

export default App;
