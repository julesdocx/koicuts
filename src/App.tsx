import heroImg from './assets/eline_exports.jpeg'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Koicuts</h1>
        </div>
        <div className="hero mt-12">
          <img src={heroImg} className="base" width="350" height="350" alt="" />
        </div>
      <div className="buttons">
          <label htmlFor="ghent">Ghent @purble___palace </label>
        <div className="button">
          <a id="ghent" className="cta-btn" href="https://koicutsgent.youcanbook.me/?utm_source=ig&utm_medium=website">
            <span className="cta-btn__outer">
              <span className="cta-btn__inner">
                <span>Booking <b>Ghent</b></span>
              </span>
            </span>
          </a>
        </div>
          <label htmlFor="brussels">Brussels @canape.bx </label>
        <div className="button">
          <a id="brussels" className="cta-btn" href="https://koicutsbrussel.youcanbook.me/?utm_source=ig&utm_medium=website">
            <span className="cta-btn__outer">
              <span className="cta-btn__inner">
                <span>Booking <b>Brussels</b></span>
              </span>
            </span>
          </a>
        </div>
      </div>
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App
