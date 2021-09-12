import React from "react";
import {connect} from "react-redux";
class Main extends React.Component{
  render() {
    console.log('main render')
    return <h3>Main</h3>
  }
}

export default connect(state=>({}),{})(Main)
