import {combineReducers} from 'redux'
import userInfo from './login_reducer'

export default combineReducers({
  userInfo, count: (state = 3, action) => {
    let {type, data} = action
    switch (type) {
      default:
        return state
    }
  }
})
