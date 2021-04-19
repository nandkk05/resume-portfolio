import React from 'react'
import GitHubCalendar from 'react-github-calendar'

export default function Githubcontri() {
    return (
        <div>
        <div className="introduction">
          <h4>OS &hearts;</h4>
           <div className="content">
            <GitHubCalendar username="nandkk05" fontSize={16} />
            <span className="intro-p job-pls">I've been part of my local developer community as well for the past 3 years and contributing to them.</span>
           </div>
          </div>
        </div>
    )
}
