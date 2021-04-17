import React from "react"
import Introduction from "./Introduction";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

function Right(props) {
    return(
        <div className="right">
            <div className="right-inner">
              <Introduction/>
              <Skills/>
              <Education/>
              <Experience/>
              <Projects/>
              <a className="resume" href="{props.resumeURL}" target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
            </div>
          </div>
    )
}

export default Right;