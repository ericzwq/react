import React from "react";
// import {connect} from 'react-redux'
import {connect} from "../MyRedux";
import {createLoginAction} from "../action_creators";

class Login extends React.Component {
  click = () => {
    this.props.saveLogin({username: 'sdf'})
  }

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.error('login will update')
  }

  render() {
    console.log('Login render---------', this)
    return (
      <div>
        <button onClick={this.click}>登录</button>
      </div>
    )
  }
}

export default connect(state => ({a: 1}), {saveLogin: createLoginAction})(Login)
