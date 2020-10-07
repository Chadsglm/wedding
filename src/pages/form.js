import React from 'react'


function form(props) {
  return (
    <div className="wrapper style2" >
      <form id="form" className="inner" name="contact" method="POST" action="/contact">
        <div className="">
          <div id="name" className="">
            <label className="color1">
              Your Name
              <span className="" aria-hidden="true">*</span>
            </label>

            <div className="form-inline color1">
              <input
                className="color1"
                type="text"
                name="firstName"
                maxLength="30"
                required
                placeholder="First Name" />

              <input
                className="lname-input"
                type="text"
                name="lastName"
                maxLength="30"
                required
                placeholder="Last Name" />
            </div>
          </div>

          <div id="email" className="">
            <label className="color1" htmlFor="email">
              Email
              <span className="" aria-hidden="true">*</span>
            </label>
            <input
              className="color1"
              type="email"
              name="email"
              required
              placeholder="Your Email Address" />
          </div>

          <div className="">
            <label className="color1" htmlFor="attending">
              Will you be attending?
                <span className="required" aria-hidden="true">*</span>
            </label>

            <select className="form-select color1"
              id="attending"
              name="attending1"
              required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="">
            <label className="color1" htmlFor="attending">
              Will you be bringing a guest?
                <span className="" aria-hidden="true">*</span>
            </label>

            {/* <select className="form-select color1"
              id="attending"
              name="attending2"
              required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select> */}
            <input className="color1" type="checkbox" id="attending2" name="attending2" value="yes" />
            <label className="color1" htmlFor="attending2">Yes</label>
            <input className="color1" type="checkbox" id="attending3" name="attending3" value="no" />
            <label className="color1" htmlFor="attending3">No</label>
          </div>

          <div className="form-section">
            <label className="title color1">
              Name of Guest
            </label>

            <div className="form-inline">
              <input className="fname-input color1"
                type="text"
                name="gfistName"
                maxLength="30"
                data-title="First"
                placeholder="First Name" />

              <input className="lname-input color1"
                type="text"
                name="glastName"
                maxLength="30"
                data-title="Last"
                placeholder="Last Name" />
            </div>
          </div>

          <div id="food-restrictions" className="form-section">
            <label className="color1" htmlFor="food-restrictions">
              Any food restrictions?
              <span className="" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="food-restrictions"
              className="color1"
              required
              name="foodRest" />
          </div>

          <div className="form-section">
            <label className="color1" htmlFor="questions">
              Questions or comments?
            </label>
            <textarea className="color1" name="message"></textarea>
          </div>
        </div>

        <div data-netlify-recaptcha="true"></div>

        <div>
          <input className="button primary" type="submit" value="Send" />
        </div>
      </form>
    </div>

  );
}


export default form;