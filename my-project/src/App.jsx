import { useState } from 'react'
import './index.css'
export default function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      This is a testing
    </h1>
      <div className="border-2 border-red-500 button">
        <button onClick={() => setCount((count) => count + count * 2)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

