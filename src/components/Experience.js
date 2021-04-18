import React from 'react'

export default function Experience() {
    return (
        <div className="experience">
        <h4>Experience</h4>
        <div className="content">
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://www.linkedin.com/company/dsccgc" target="_blank" rel="noopener noreferrer">Developer Student Clubs</a>
              <div className="duration">Aug 2019 &mdash; July 2020</div>
            </div>
            <div className="title">Lead</div>
            <ul className="description">
              <li>Developer Student Club powered by Google Developers is a platform to help solve the challenges university graduates were facing securing employment in the tech industry. </li>
              <li>DSC aims to provide students with the resources, opportunities and, experience necessary to be industry-ready, all while still pursuing their degrees. Google Developers supports and recognizes DSCs, but does not own or manage DSCs.</li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://www.linkedin.com/company/developercirclesfromfacebook" target="_blank" rel="noopener noreferrer">Facebook Developer Circle Chandigarh</a>
              <div className="duration">July &mdash; Dec 2015</div>
            </div>
            <div className="title">Campus representative</div>
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
