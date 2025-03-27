import React from 'react'
import { Link } from 'react-router-dom'



const Explore = () => {
  return (
    <section id="Explore">
        <div className="container">
          <div className="row row__column">
            <h2>
              Explore more <span className="purple">Book</span>
            </h2>
            <Link to="/book">
              <button className="btn">Explore books</button>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Explore