import {GrandparentMsg} from "@/views/context-test/context";
import Parent from "./parent";

export default function () {
  console.log(GrandparentMsg)
  return (<div>
    <GrandparentMsg.Provider value={'grandparent'}>
      <Parent/>
    </GrandparentMsg.Provider>
  </div>)
}