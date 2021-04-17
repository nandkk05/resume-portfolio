import React from 'react'

export default function Experience() {
    return (
        <div className="experience">
        <h4>Experience</h4>
        <div className="content">
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://starry.com/" target="_blank" rel="noopener noreferrer">Starry, Inc.</a>
              <div className="duration">July 2016 &mdash; Present</div>
            </div>
            <div className="title">Software Engineer Co-op</div>
            <ul className="description">
              <li>Build out major features of Starry’s customer-facing android app with Cordova, utilizing JavaScript (ES6), Handlebars, CSS3, Node.js, and Backbone.js</li>
              <li>Propose and implement design and engineering solutions to ensure optimal and coherent user experiences for Starry’s iOS and android apps</li>
              <li>Engineer and maintain RESTful cloud services responsible for communicating with the Starry Station router</li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="http://us.mullenlowe.com/" target="_blank" rel="noopener noreferrer">Mullen Lowe U.S.</a>
              <div className="duration">July &mdash; Dec 2015</div>
            </div>
            <div className="title">Creative Technologist Co-op</div>
            <ul className="description">
              <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
              <li>Tested code in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
              <li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Dept. of Defense, and more</li>
            </ul>
          </div>
        </div>
      </div>
    )
}
