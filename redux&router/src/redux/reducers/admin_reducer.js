let initState = {}
export default function (state = initState, action) {
  console.error('admin reducer')
  let {type, data} = action
  switch (type) {
    default:
      return state
  }
}
