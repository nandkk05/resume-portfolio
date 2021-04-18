import React from 'react'
import GitHubCalendar from 'react-github-calendar'

export default function Githubcontri() {
    return (
        <div>
        <div className="projects">
          <h4>OS &hearts;</h4>
           <div className="content">
            <GitHubCalendar username="nandkk05" color="hsl(203, 82%, 33%)" fontSize={16} />
           </div>
          </div>
        </div>
    )
}
