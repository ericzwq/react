import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {AppState, RootState} from '@/store/store'

// export const setStringAsync = createAsyncThunk('app/setString', async (data) => {
//   await new Promise(resolve => setTimeout(resolve, 500))
//   return Date.now().toString(36)
// })

export const setStringAsync = createAsyncThunk('app/setString', async (data: string) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return Date.now().toString(36)
})

export const setObjectAsync = createAsyncThunk('app/setObject', async (data) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return {age: 99}
})

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    string: '',
    array: [],
    object: {
      age: 0
    }
  },
  reducers: {
    setString(state, action) {
      state.string = action.payload
    },
    setArray(state, action) {
      state.array = action.payload
    },
    setObject(state, action) {
      state.object = action.payload
    }
  },
  extraReducers: {
    [setStringAsync.fulfilled.type](state, action) {
      state.string = action.payload
    },
    [setObjectAsync.fulfilled.type](state, action) {
      state.object = action.payload
    }
  }
})

export const {setString, setArray, setObject} = appSlice.actions

export const selectString = (state: RootState) => state.app.string
export const selectArray = (state: RootState) => state.app.array
export const selectObject = (state: RootState) => state.app.object

export default appSlice.reducer