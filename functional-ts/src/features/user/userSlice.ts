import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    userInfo: {
      username: ''
    }
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    }
  }
})

export const {setToken, setUserInfo} = userSlice.actions

export const selectToken = (state: RootState) => state.user.token
export const selectUserInfo = (state: RootState) => state.user.userInfo

export default userSlice.reducer