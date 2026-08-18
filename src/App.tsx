import heroImg from './assets/hero.svg'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero mt-12">
          <img src={heroImg} className="base" width="250" height="250" alt="" />
        </div>
        <div>
          <h1>Koicuts</h1>
          <p>
           Under <code> 🚧 construction </code> 
          </p>
        </div>
        <div className="buttons">
          <div className="button">
            <a id="ghent" href="https://koicutsgent.youcanbook.me/?utm_source=ig&utm_medium=website">Booking Ghent</a>
            <label htmlFor="ghent">Ghent @purble___palace </label>
          </div>
          <div className="button">
            <a id="brussels" href="https://koicutsbrussel.youcanbook.me/?utm_source=ig&utm_medium=website">Booking Brussels</a>
            <label htmlFor="brussels">Brussels @canape.bx </label>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App
