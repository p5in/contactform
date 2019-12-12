import React, { Component } from "react";

class Showform extends Component {
  render() {
    // console.log(this.props.propsValue);
    if (this.props.propsValue.submitform) {
      if (
        this.props.propsValue.nameerror == "" &&
        this.props.propsValue.emailerror == "" &&
        this.props.propsValue.passerror == "" &&
        this.props.propsValue.numbererror == ""
      ) {
        return (
          <div className="col-md-6">
            <div className="formsubmit">
              <h4 className="" style={{ color: "white", paddingBottom: "5px" }}>
                SUBMITTED DETAILS
              </h4>
              <div className="alert alert-success" role="alert">
                NAME : {this.props.propsValue.name}
              </div>
              <div className="alert alert-success" role="alert">
                EMAIL : {this.props.propsValue.email}
              </div>
              <div className="alert alert-success" role="alert">
                PASSWORD : {this.props.propsValue.pass}
              </div>
              <div className="alert alert-success" role="alert">
                MOBILE : {this.props.propsValue.number}
              </div>
              <div className="alert alert-success" role="alert">
                ADDRESS : {this.props.propsValue.address}
              </div>
            </div>
          </div>
        );
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export default Showform;
