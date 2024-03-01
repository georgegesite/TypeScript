import { useState } from 'react'
import './index.css'
export default function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      This is a testing
    </h1>
      <div >
        <button className ="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + count * 2)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

