import {GrandparentMsg, ParentMsg} from "@/views/context-test/context";
import Child from "./child";

export default function () {
  return (<div>
    <GrandparentMsg.Provider value={'parent'}>
      <Child/>
    </GrandparentMsg.Provider>
  </div>)
}