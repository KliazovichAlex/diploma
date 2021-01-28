import React, { Component } from "react";
import { connect } from "react-redux";

import { onChangeName, onChangePassword, signIn } from "../../action";
import "./style.css";
import SignInView from "./view";

class SignInPageContainer extends Component {
  onChange = (event) => {
    this.props.onChangeName(event.target.value);
  };

  onSignIn = () => {
    const { name, pass } = this.props;
    this.props.signIn({ name, password: pass });
  };

  render() {
    return (
      <SignInView
        onChange={this.onChange}
        name={this.props.name}
        pass={this.props.pass}
        onChangePassword={this.props.onChangePassword}
        onSignIn={this.onSignIn}
        isSignedIn={this.props.isSignedIn}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    pass: state.auth.password,
    isSignedIn: !!state.auth.token,
  };
};

const actionsCreators = {
  onChangeName,
  onChangePassword,
  signIn,
};

export default connect(mapStateToProps, actionsCreators)(SignInPageContainer);
