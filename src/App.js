import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Showform from "./components/Showform";

var initialValue = {
  name: "",
  email: "",
  pass: "",
  number: "",
  address: "",
  toSubmit: false,
  submitform: false,
  nameerror: "enter name",
  emailerror: "enter email",
  passerror: "enter pass",
  numbererror: "enter error"
};
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialValue;
  }

  nameChange = e => {
    e.preventDefault();
    var x =
      e.target.value.length < 5 ? "Full Name must be 5 characters long!" : "";

    this.setState({
      name: e.target.value,
      nameerror: x
    });
    console.log(this.state.name);
  };
  emailChange = e => {
    e.preventDefault();
    var y = validEmailRegex.test(e.target.value) ? "" : "Email is not valid!";
    this.setState({
      email: e.target.value,
      emailerror: y
    });
  };
  passwordChange = e => {
    e.preventDefault();
    var z =
      e.target.value.length < 8 ? "Password must be 8 characters long!" : "";
    this.setState({
      pass: e.target.value,
      passerror: z
    });
  };
  phoneChange = e => {
    e.preventDefault();
    var zz = e.target.value.length < 10 ? "Enter a valid Number!" : "";
    this.setState({
      number: e.target.value,
      numbererror: zz
    });
  };
  addressChange = e => {
    e.preventDefault();
    this.setState({
      address: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.nameerror == "" &&
      this.state.emailerror == "" &&
      this.state.passerror == "" &&
      this.state.numbererror == ""
    ) {
      this.setState({
        toSubmit: true,
        submitform: true
      });
    } else {
      alert("Please Enter The Valid Details.");
    }
    // this.props.history.push("/Showform/");
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Form
              nameChange={this.nameChange}
              emailChange={this.emailChange}
              passwordChange={this.passwordChange}
              phoneChange={this.phoneChange}
              addressChange={this.addressChange}
              onSubmit={this.onSubmit}
              errors={this.state}
            />
            <Showform propsValue={this.state} />
          </div>
        </div>
        )
      </div>
    );
  }
}

export default App;
