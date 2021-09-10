import React from "react";

let store, subscribeList = [], mainState = {}, reducerMap = {}, reducerKeys = [], updateList = []

function update() {
  updateList.forEach(f => f())
}

export const connect = function (mapStateToProps, mapDispatchToProps) { // connect({}, {})(Component)
  let state = {}, dispatch = {}, changed, updateState = () => {
    let newState = mapStateToProps(mainState)
    changed = state !== newState
    if (changed) state = newState
    for (let k in mapDispatchToProps) {
      dispatch[k] = data => store.dispatch(mapDispatchToProps[k](data))
    }
  }
  return UIComponent => (class Container extends React.Component {
    state = {
      key: 0
    }

    componentWillMount() {
      updateState()
    }

    updateKey = () => {
      this.setState({key: this.state.key + 1})
    }

    componentDidMount() {
      updateList.push(this.updateKey.bind(this))
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log(arguments)
      return changed
    }

    componentWillUpdate() {
      updateState()
    }

    render() {
      return <UIComponent {...state} {...dispatch}/>
    }
  })
}

export const subscribe = sub => subscribeList.push(sub)
export const createStore = function (reducer) { // function (state = initState, action)
  mainState = reducer(undefined, {type: '@@action_'}) // 没有使用combineReducers
  console.log({mainState})
  return {
    dispatch(action) { // {type: SAVE_LOGIN, data}
      // console.log({action, mainState, reducerKeys, reducerMap})
      let res = reducerKeys.find(k => {
        let preState = mainState[k]
        let newState = reducerMap[k](preState, action)
        let changed = preState !== newState
        if (changed) mainState[k] = newState
        return changed
      })
      if (!res) return false
      update()
      return true
    },
    getState() {
      return mainState
    }
    // replaceReducer
    // subscribe
  }
}
// {userInfo: 1}
export const combineReducers = function (reducers) {
  return function (state, action) {
    for (let k in reducers) {
      let reducer = reducers[k]
      mainState[k] = reducer(state, action)
      reducerMap[k] = reducer
      reducerKeys.push(k)
    }
    // reducerKeys = Object.keys(mainState)
    return mainState
  }
}

export class Provider extends React.Component {
  render() {
    let {store: _store, children: App} = this.props
    store = _store
    return <div>{App}</div>
  }
}
