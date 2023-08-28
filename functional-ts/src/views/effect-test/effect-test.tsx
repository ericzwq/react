import {useEffect, useState} from "react";

export default function () {
  // 每个effect在更新时根据注册顺序执行
  useEffect(() => {
    console.log('effect单参数')

    return () => console.log('effect单参数返回的函数')
  })

  useEffect(() => {
    console.log('effect空数组')
    setTimeout(() => {
      console.log('更新count')
      setCount(1)
    }, 1000)

    setTimeout(() => {
      console.log('更新count2')
      setCount2(1)
    }, 3000)

    return () => console.log('effect空数组返回的函数')
  }, [])

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('effect count')

    return () => console.log('effect count返回的函数')
  }, [count])

  useEffect(() => {
    console.log('effect count2')

    return () => console.log('effect count2返回的函数')
  }, [count2])

  useEffect(() => {
    console.log('obj update')
  }, [{}])

  return (<>
    {count} {count2}
  </>)
}