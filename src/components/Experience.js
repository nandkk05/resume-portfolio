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
              <li className="introduction">Organized both online and offline events throughout my working span, you can find  <a style={{fontWeight:500}} className="intro-p job-pls" href="https://drive.google.com/drive/folders/1x9a5LKxC3W6eP51qlgoAgXxPELwr1L5n?usp=sharing" target="_blank" rel="noopener noreferrer">detail of all the events here</a></li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://www.linkedin.com/company/developercirclesfromfacebook" target="_blank" rel="noopener noreferrer">Facebook Developer Circle Chandigarh</a>
              <div className="duration">July &mdash; Dec 2015</div>
            </div>
            <div className="title">Campus representative</div>
            <ul className="description">
              <li>Organized events at campus on behalf of Facebook Developer Circle with all the team members</li>
              <li>Supported students by providing systematic learning resources</li>
            </ul>
          </div>
        </div>
      </div>
    )
}
