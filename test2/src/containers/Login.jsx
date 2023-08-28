import React from "react";
import {connect} from 'react-redux'
import {createLoginAction} from "../action_creators";

function Card() {
  return (<div>Card</div>)
}

function Child(props, c) {
  console.log(props, c)
  const {name, children} = props
  return (<div>
    name:{name}
    {children}
  </div>)
}

class Login extends React.Component {
  click = () => {
    console.log(this)
    this.props.saveLogin({username: 'sdf'})
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.error('login will update')
  }

  render() {
    console.log('Login render---------', this)
    return (
      <div className="login">
        <Child c={1}><Card/></Child>
        {this.props.username}
        <button onClick={this.click}>登录</button>
      </div>
    )
  }
}

export default connect(({userInfo}) => ({username: userInfo.username}), {saveLogin: createLoginAction})(Login)
