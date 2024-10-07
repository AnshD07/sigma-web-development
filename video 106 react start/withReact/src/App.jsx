import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hey</div>
      <div>
        <div >{count}</div>
        <button onClick={() => { setCount((prevcount) => prevcount + 1) }}> Click on Me </button>
      </div>
      <div>Hey i am ansh dholakiya from babra</div>
      <div>Hey</div>

      <div>
        Parth dholakiya Raj Dholakiya ansh dholakiya ansh dholakiya ansh dholakiya ansh dholakiya
      </div>
    </>
  )
}

export default App