import React from "react";
import {connect} from "react-redux";
import {createSaveUserInfoAsyncAction} from "../../redux/action_creators/login_action";
class Header extends React.Component {
  componentDidMount() {
      console.warn('header update')
      // this.props.saveUserInfoAsync({username: 'jj'})
  }

  render() {
    console.log('header render')
    return <h3>Header</h3>
  }
}

export default connect(state => state.userInfo,{saveUserInfoAsync:createSaveUserInfoAsyncAction})(Header)
