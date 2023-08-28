import {useContext} from "react";
import {GrandparentMsg, ParentMsg} from "@/views/context-test/context";

export default function () {
  const grandparentMsg = useContext(GrandparentMsg)
  const parentMsg = useContext(ParentMsg)
  console.log(grandparentMsg, parentMsg)
  return (<div>child-{grandparentMsg}-{parentMsg}</div>)
}