import {SAVE_USER_INFO} from "../action_types";

export const createSaveUserInfoAction = data => ({type: SAVE_USER_INFO, data})
export const createSaveUserInfoAsyncAction = (data, timeout = 1000) => dispatch => setTimeout(() => dispatch({
  type: SAVE_USER_INFO,
  data
}), timeout)
