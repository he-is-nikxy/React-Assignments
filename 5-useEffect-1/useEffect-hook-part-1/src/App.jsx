import { useState, useEffect } from 'react'
// import Title from './components/Title.jsx'
import './App.css'



function App() {

  useEffect( () => {
    document.title = `Clicked ${count} times`
  } )
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
