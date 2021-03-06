import React from "react"
import "../Components/css/About.css"

function About() {
  return (
    <div className="aboutDiv">
      <div className="meetTheTeam">
        Meet the<div className="team">team</div>
      </div>
      <div className="picsAbout">
        {/* Pictures go here */}

        <div className="picDiv">
          <img
            src="/images/team/andrew.png"
            alt="andrew"
            className="image"
          ></img>
          Andrew Cummings<h3>Backend Developer</h3>
        </div>
        <div className="picDiv">
          <img
            src="/images/team/becca.jpeg"
            alt="becca"
            className="image"
          ></img>
          Rebbeca Ogden<h3>Frontend Developer</h3>
        </div>
        <div className="picDiv">
          <img
            src="/images/team/Brendon.png"
            alt="brendon"
            className="image"
          ></img>
          Brendon Hawkins<h3>Project Lead</h3>
        </div>
        <div className="picDiv">
          <img src="/images/team/cain.jpg" alt="cain" className="image"></img>
          Cain Palmer<h3>Junior Developer</h3>
        </div>
        <div className="picDiv">
          <img
            src="/images/team/jonah.jpeg"
            alt="jonah"
            className="image"
          ></img>
          Jonah Tillman<h3>Sr. Fullstack Developer</h3>
        </div>
        <div className="picDiv">
          <img
            src="/images/team/nelson.jpeg"
            alt="nelson"
            className="image"
          ></img>
          Nelson Maldonado<h3>Fullstack Developer</h3>
        </div>
      </div>

      {/* Bottom section */}
      
    </div>
  )
}

export default About
