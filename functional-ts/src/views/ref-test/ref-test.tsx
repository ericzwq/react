import {Button, Spin} from 'antd'
import React, {useEffect, useRef, forwardRef, LegacyRef, useState} from "react";

export default function () {
  const buttonRef = useRef(null)
  const spinRef = useRef(null)
  const div = useRef<HTMLDivElement | null>()
  const [div2, setDiv2] = useState<HTMLDivElement | null>(null) // useRef不是唯一选择

  useEffect(() => console.log(buttonRef, spinRef, div, div2), [])

  setTimeout(() => console.log(div2), 2000)

  const PSpin = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => <div ref={ref} {...props}><Spin/></div>)
  return (<>
    <Button ref={buttonRef}>
      <PSpin ref={spinRef}/>
    </Button>
    <div ref={ref => div.current = ref}>div</div>
    <div ref={ref => {
      console.log('div2', ref)
      setDiv2(ref)
    }}>div
    </div>
  </>)
}