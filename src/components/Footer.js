import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="col-md-12" style={{marginTop: "20px"}}>
          <p> Contact Me at </p>
          <span><i class="fa fa-phone"></i> +15106039366</span>  &nbsp; &nbsp;
          <span><i class="fa fa-envelope"></i> chinmayi.sunku@sjsu.edu</span>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
