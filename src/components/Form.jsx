import React, { Component } from "react";

class Form extends Component {
  render() {
    const { nameerror, emailerror, passerror, numbererror } = this.props.errors;
    return (
      <div className="col-md-6">
        <form className="form" onSubmit={this.props.onSubmit}>
          <h4 className="" style={{ color: "white", paddingBottom: "5px" }}>
            CONTACT FORM
          </h4>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
              onChange={this.props.nameChange}
            />
            {nameerror.length > 0 && <span className="error">{nameerror}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.props.emailChange}
            />
            {emailerror.length > 0 && (
              <span className="error">{emailerror}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.props.passwordChange}
            />
            {passerror.length > 0 && <span className="error">{passerror}</span>}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="exampleInputPhone1"
              aria-describedby="emailHelp"
              placeholder="Enter mobile number"
              onChange={this.props.phoneChange}
            />
            {numbererror.length > 0 && (
              <span className="error">{numbererror}</span>
            )}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="address"
              onChange={this.props.addressChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
