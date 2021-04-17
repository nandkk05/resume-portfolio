import React from 'react'

export default function Projects() {
    return (
        <div className="projects">
                <h4>Projects</h4>
                <div className="content">
                  <div className="project-item">
                    <a className="project-title" href="http://brittanychiang.com/" target="_blank" rel="noopener noreferrer">brittanychiang.com</a>
                    <p className="project-desc">Portfolio site designed and coded from scratch to showcase my skills and past work</p>
                  </div>
                  <div className="project-item">
                    <div className="project-title">CourseSource</div>
                    <p className="project-desc">Web app built on the MEAN (MongoDB, Express, Angular, Node) stack for my web development class. Created with the intention of providing students a better experience browsing the courses offered at Northeastern</p>
                  </div>
                  <div className="project-item">
                    <a className="project-title" href="http://nuwit.ccs.neu.edu/" target="_blank" rel="noopener noreferrer">NU Women in Tech</a>
                    <p className="project-desc">Club website redesigned and redeveloped as while serving as web chair on e-board</p>
                  </div>
                  <div className="project-item">
                    <a className="project-title" href="http://onecardforall.mullenloweus.com/" target="_blank" rel="noopener noreferrer">One Card For All</a>
                    <p className="project-desc">2015 Mullen Lowe U.S. holiday site built around an algorithm that generated a holiday greeting to each and every person on the planet</p>
                  </div>
                </div>
              </div>
    )
}
