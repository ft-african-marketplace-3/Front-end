import React from "react"
// import "./css/Contact.css"
import emailjs from "emailjs-com"
import Map from "../Components/Map"
import "../Components/css/Contact.css"
// import "./css/Contact"

const Contact = () => {
  function sendEmail(e) {
    alert("Message sent successfully")
    e.preventDefault()
    emailjs
      .sendForm(
        "google",
        "template_p410dpx",
        e.target,
        "user_9ye5yJl0gcKpo4DOb3EhL"
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="contactMainDiv">
      <h1>Contact Page</h1>
      <div className="middleDiv">
        <div className="leftSideDiv">
          <div className="contactInfo">
            <p>
              Get in touch with us for more information about Sauti and our
              services. We are happy to answer any questions you may have!
            </p>
            <div className="contactDetails">
              <p className="contactTitle">Contact Details Page</p>
              <p>
                {" "}
                The Foundry, Viking House, Waiyaki way, Westlands, Nairobi,
                Kenya
              </p>
            </div>
          </div>
        </div>
        <div className="formSideDiv">
          Form goes here
          <form className="form" onSubmit={sendEmail}>
            <label>name</label>
            <input type="text=" name="name" />

            <label>Email</label>
            <input type="email" name="user_email" />

            <label>Message</label>
            <textarea name="message" rows="4" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="googleMap">Google Map</div>
      <Map />
    </div>
  )
}

export default Contact
