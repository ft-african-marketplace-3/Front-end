import React from "react"
import "../Contact.css"

function Contact() {
  return (
    <div className="contactMainDiv">
      <h1>Contact Page</h1>
      <div className="leftSideDiv">
        <div className="contactInfo">
          <p>
            Get in touch with us for more information about Sauti and our
            services. We are happy to answer any questions you may have!
          </p>
          <div className="contactDetails">
            <p className="contactTitle">Contact Details</p>
            <p>
              {" "}
              The Foundry, Viking House, Waiyaki way, Westlands, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
      <div className="formSideDiv">Form goes here</div>
    </div>
  )
}

export default Contact
