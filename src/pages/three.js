import React from 'react'

function three(props) {
  return (
    <section id="three" className="wrapper style2 special">
      <div className="inner ">
        <header className="major">
          <h2 className="p color1">Accommodation</h2>
          <p className="three-p color1">Mystras Grand Palace Resort & Spa</p>
          <p className="three-p three-mgn color1">The hotel offers discount for the wedding guests.
          Just mention the Stella & George wedding when you reserve
          </p>
          <a href="tel:+30 2731 021111">
            <p className="three-p mobile-p three-mgn color1">Tel: +30 2731 021111</p>
          </a>

          <a href="mailto:reservations@mystraspalace.com">
            <p className="three-p mobile-p three-mgn color1">Email: reservations@mystraspalace.com</p>
          </a>

          <a className="button primary three-mgn color1"
            target="_blanket"
            href="https://mystrasgrandpalaceresort.reserve-online.net/?lang=en&_ga=2.91257945.255847182.1601894883-1777221965.1601894883">
            <p>Book Online</p>
          </a>
        </header>
      </div>
    </section>
  )
}

export default three
