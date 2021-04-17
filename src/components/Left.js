import React from "react"


function Left(){
    return(
        <div className="left">
            <div className="bg-img"></div>
            <div className="left-inner">
              <div className="info">
                <h2 className="name">Nand Kishor</h2>
                <div className="subtext">Frontend Developer</div>
                <div className="jobStatus">Chandigarh Group of Colleges</div>
                <div className="social-links">
                  <a href="{this.props.twitterURL}" target="_blank"><i className="fa fa-twitter"></i></a>
                  <a href="{this.props.instaURL}" target="_blank"><i className="fa fa-instagram"></i></a>
                  <a href="{this.props.githubURL}" target="_blank"><i className="fa fa-github"></i></a>
                  <a href="{this.props.linkedinURL}"  target="_blank"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Left;
