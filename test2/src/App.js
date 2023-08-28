import React from "react";
import Login from "./containers/Login";
import {connect} from "react-redux";
import {createLoginAction} from "./action_creators";

class App extends React.Component {
  componentDidMount() {
    this.props.saveLogin({username: 'lisi'})
  }
  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.error('app update')
  }

  render() {
    console.log('app render------', this)
    return (
      <div className="app">
        app
        <button onClick={() => this.props.saveLogin({username: 'lisi'})}>按钮</button>
        {/*<h3>app--username:{this.props.userInfo.username}</h3>*/}
        <Login/>
      </div>
    )
  }
}

export default connect(state => ({userInfo: state.userInfo}), {saveLogin: createLoginAction})(App)
