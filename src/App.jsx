import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          counts is {count}
        </button>
        <button onClick={() => alert('hello world!')}>
          Alert button
        </button>
      </div>
      
    </>
  )
}

export default App
