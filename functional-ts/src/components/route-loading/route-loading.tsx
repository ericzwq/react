import React, {forwardRef} from "react"

const RouteLoading: React.ForwardRefRenderFunction<any, any> = (props, ref) => {
  console.log('RouteLoading', props, ref)
  return (<div>loading...</div>)
}

console.log(forwardRef(RouteLoading))

export default forwardRef(RouteLoading)