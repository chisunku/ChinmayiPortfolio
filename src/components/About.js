import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <a href = "https://www.linkedin.com/in/chinmayi-sunku/" title="LinkedIn" style={{color: "black"}}><i className="fab fa-linkedin" style={{fontSize:'38px', paddingRight:'30px', paddingTop: '20px'}}/></a>
                  <a href = "https://github.com/chisunku" title="GitHub" style={{color: "black"}}><i className="fab fa-github" style={{fontSize:'38px', paddingRight:'30px', paddingTop: '20px'}}/></a>
                  <a href = "https://drive.google.com/file/d/1I7h1Ea4luvvi3lVty9A5znH28G2Uw_e_/view?usp=drive_link" title="Resume" style={{color: "black"}}><i class="fa fa-file" style={{fontSize:'38px', paddingTop: '20px'}}></i></a>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
