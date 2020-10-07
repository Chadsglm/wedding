import React from 'react'

function header(props) {
  return (
    <header id="header" className="alt">
      <div className="header-flex">
        <a href="#when">
          <p className="header-p header-mobile">When & Where</p>
        </a>
        <a href="#banner">
          <p className="header-p header-center header-mobile">Olive me loves olive you!</p>

        </a>

        <ul className="header-btn header-mobile header-mobile-btn">
          <li><a href="#form" className="button primary">RSVP</a></li>
        </ul>
      </div>
    </header>
  )
}

export default header
