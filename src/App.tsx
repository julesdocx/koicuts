import { useState } from 'react'
import heroImg from './assets/hero.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero mt-12">
          <img src={heroImg} className="base" width="300" height="300" alt="" />
        </div>
        <div>
          <h1>Koicuts</h1>
          <p>
           Under <code> 🚧 construction </code> 
          </p>
        </div>

      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App
