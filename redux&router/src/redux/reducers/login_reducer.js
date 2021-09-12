import {SAVE_USER_INFO} from "../action_types";

let initState = {username: '', token: '', isLogin: false}
export default function (state = initState, action) {
  console.error('login reducer')
  let {type, data} = action
  if (type === SAVE_USER_INFO) {
    return {username: data.username, token: 1, isLogin: true}
  } else {
    return state
  }
  switch (type) {
    case SAVE_USER_INFO:
      return {username: data.username, token: 1, isLogin: true}
    default:
      return state
  }
}
