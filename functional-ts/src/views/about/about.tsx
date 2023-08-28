import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectToken, selectUserInfo} from "@/features/user/userSlice";
import {selectArray, selectObject, selectString, setArray, setObject, setObjectAsync, setString, setStringAsync} from "@/features/app/appSlice";
import {RootDispatch} from "@/store/store";

export default function () {
  const token = useSelector(selectToken)
  const userInfo = useSelector(selectUserInfo)
  const string = useSelector(selectString)
  const array = useSelector(selectArray)
  const object = useSelector(selectObject)
  const dispatch = useDispatch<RootDispatch>()

  return (<>
    <p>about</p>
    <Link to="about1">about1</Link>
    <Link to="about2">about2</Link>
    <div>token：{token}</div>
    <div>userInfo：{JSON.stringify(userInfo)}</div>
    <div>string：{string}</div>
    <div>array：{JSON.stringify(array)}</div>
    <div>object：{JSON.stringify(object)}</div>
    <button onClick={() => dispatch(setString(Date.now().toString(36)))}>修改string</button>
    <button onClick={() => dispatch(setStringAsync('1'))}>异步修改string
    </button>
    <button onClick={() => dispatch(setObjectAsync())}>异步修改object
    </button>
    <button onClick={() => dispatch(setArray([Math.random()]))}>修改array</button>
    <button onClick={() => dispatch(setObject({age: Math.random()}))}>修改object</button>
    <Outlet/>
  </>)
}