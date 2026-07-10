import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world! from react app</h1>
      <button className="btn btn-danger col-6 mx-auto" type="button">Send</button>
     
    </>
  )
}

export default App
