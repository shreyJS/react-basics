import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  // values change between 0 to 20
  
  const addValue = ()=>{
    if (count<20) {
      // using useState's callback function
      setCount(count => count + 1)
      setCount(count => count + 1)
      setCount(count => count + 1)
      setCount(count => count + 1)
    }
  }

  const reduceValue = ()=>{
    if (count>0) {
      setCount(count - 1) 
    }
   }
  return (
    <>
      <div className="card">
        <h1>Counter value: {count}</h1>
        <button onClick={addValue}>Add</button>
        <button onClick={reduceValue}>Reduce</button>
      </div>
    </>
  )
}

export default App
