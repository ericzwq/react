import {combineReducers} from 'redux'
import userInfo from './login_reducer'
import adminInfo from './admin_reducer'
export default combineReducers({
  userInfo, adminInfo, a: function () {
    console.error('a reducer')
    return 1
  }
})
