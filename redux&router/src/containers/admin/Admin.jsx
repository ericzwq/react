import React from "react";
import {connect} from "react-redux";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

class Admin extends React.Component {
  render() {
    console.log('admin render')
    if (!this.props.userInfo.isLogin) return <Redirect to="/login"/>
    return (
      <div>
        <h3>Admin：username--{this.props.userInfo.username}</h3>
        <NavLink to="/admin/header">Header</NavLink>&nbsp;
        <NavLink to="/admin/main">Main</NavLink>
        <Switch>
          <Route path="/admin/header" component={Header}/>
          <Route path="/admin/main" component={Main}/>
          <Redirect to="/admin/header"/>
        </Switch>
      </div>
    )
  }
}

export default connect(state => ({userInfo: state.userInfo}), {})(Admin)
