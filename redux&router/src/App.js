import React from "react";
import 'antd/dist/antd.css'
import {Switch, Redirect, Route} from 'react-router-dom'
import Admin from "./containers/admin/Admin";
import Login from "./containers/login/Login";

export default class App extends React.Component {
  render() {
    console.log('app render')
    return (
      <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
        <Redirect to="/login"/>
      </Switch>
    )
  }
}
