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
      <div className="aboutParagraph">
        <img
          src="/images/our-approach.png"
          alt="approach"
          className="aboutApproach"
        ></img>
        <div className="ourTeamPara">
          <div className="weApproachDiv">
            We approach every challenge with an exploratory mindset. We don’t
            have easy, pre-written answers to our client’s questions; we have a
            constantly evolving, highly rigorous, and interdisciplinary
            framework for solving problems – and it works, because we hire folks
            who know a lot, and grow a lot
          </div>
          <div className="leftAndRightDiv">
            <div className="paraDivLeft">
              <div className="paragraph">
                <h2>Adaptable</h2>
                We operate within a cooperative framework, predicated on
                versatility, that puts data and research at the core of our
                approach. The flexible conceptualization and implementation of
                ideas allows us to make adjustments informed by ongoing
                analysis.
              </div>
              <div className="paragraph">
                <h2>Interdisciplinary</h2> Our fully in-house team is comprised
                of accomplished developers, creatives, strategists, writers,
                marketers, and account managers. We rely on one another to share
                best practices, inform decisions around production, and lend
                perspectives for a more complete vision.
              </div>
              <div className="paragraph">
                <h2>Process-Oriented</h2> As technologies and trends shift, we
                improve and build upon our methodology - constantly adjusting
                procedures from research and ideation, to implementation, and
                ongoing assessment.
              </div>
            </div>
            <div className="aboutPic">
              <img
                src="/images/pic02.jpeg"
                alt="produce_about"
                className="aboutPicImg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
