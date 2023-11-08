import React, { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  

let [flag, setFlag] = useState(false)


  return (
    <>
      {flag == true ? <Timer flag={flag}/> : ""}
      
      <button onClick={() => setFlag(!flag)}>{flag?'Hide':'Show'}</button>
      
    </>
  )
}

export default App
