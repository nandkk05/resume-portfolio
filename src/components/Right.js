import React from "react"

function Right() {
    return(
        <div className="right">
            <div className="right-inner">
              <div className="introduction">
                <h4>Intro</h4>
                <div className="content">
                  <p className="intro-p">I&#39;m currently in my fourth year (out of five) studying computer science and interaction design at Northeastern University.</p>
                  <p className="intro-p">I enjoy being the bridge between engineering and design, and feel right at home as a front end engineer. I&#39;m experienced in developing and designing products for the web, from simple landing pages to full-fledged web apps.</p>
                  <span className="intro-p job-pls">I&#39;m currently looking for my third and final co-op (from July to December 2017) before I graduate in 2018!</span>
                </div>
              </div>
              <div className="skills">
                <h4>Skills</h4>
                <div className="content">
                  <div className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                    <span>JavaScript (ES6), HTML5, CSS3, Java, Python</span>
                  </div>
                  <div className="skill-category">
                    <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                    <span>jQuery, Bootstrap, Foundation, Handlebars, Node, Backbone, Marionette, Cordova, MongoDB, Angular, Express, React</span>
                  </div>
                  <div className="skill-category">
                    <strong>Tools: &nbsp;</strong>
                    <span>Git &amp; Github, Command Line, Grunt, Postman, Adobe Photoshop, InDesign</span>
                  </div>
                </div>
              </div>
              <div className="education">
                <h4>Education</h4>
                <div className="content">
                  <div className="university"><a href="http://www.northeastern.edu/" target="_blank">Northeastern University</a></div>
                  <div className="college"><a href="http://www.ccis.northeastern.edu/" target="_blank">College of Computer and Information Science</a></div>
                  <div className="major"><strong>Major:</strong> Information Science</div>
                  <div className="minor"><strong>Minor:</strong> Interaction Design</div>
                  <div className="conc"><strong>Concentration:</strong> Human Computer Interaction</div>
                  <div className="study-abroad"><strong>Study Abroad:</strong> Experience Design of Travel in Budapest, Hungary</div>
                  <div className="grad-date">Expected Graduation: May 2018</div>
                </div>
              </div>
              <div className="experience">
                <h4>Experience</h4>
                <div className="content">
                  <div className="exp-item">
                    <div className="job">
                      <a className="company" href="https://starry.com/" target="_blank">Starry, Inc.</a>
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
                      <a className="company" href="http://us.mullenlowe.com/" target="_blank">Mullen Lowe U.S.</a>
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
              <div className="projects">
                <h4>Projects</h4>
                <div className="content">
                  <div className="project-item">
                    <a className="project-title" href="http://brittanychiang.com/" target="_blank">brittanychiang.com</a>
                    <p className="project-desc">Portfolio site designed and coded from scratch to showcase my skills and past work</p>
                  </div>
                  <div className="project-item">
                    <div className="project-title">CourseSource</div>
                    <p className="project-desc">Web app built on the MEAN (MongoDB, Express, Angular, Node) stack for my web development class. Created with the intention of providing students a better experience browsing the courses offered at Northeastern</p>
                  </div>
                  <div className="project-item">
                    <a className="project-title" href="http://nuwit.ccs.neu.edu/" target="_blank">NU Women in Tech</a>
                    <p className="project-desc">Club website redesigned and redeveloped as while serving as web chair on e-board</p>
                  </div>
                  <div className="project-item">
                    <a className="project-title" href="http://onecardforall.mullenloweus.com/" target="_blank">One Card For All</a>
                    <p className="project-desc">2015 Mullen Lowe U.S. holiday site built around an algorithm that generated a holiday greeting to each and every person on the planet</p>
                  </div>
                </div>
              </div>
              <a className="resume" href="{this.props.resumeURL}" target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
            </div>
          </div>
    )
}

export default Right;