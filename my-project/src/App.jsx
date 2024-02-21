import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + count * 2)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
