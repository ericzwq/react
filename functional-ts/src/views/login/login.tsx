import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {setToken, setUserInfo} from "@/features/user/userSlice";
import {RootDispatch} from "@/store/store";

export default function () {
  const navigate = useNavigate()
  const dispatch = useDispatch<RootDispatch>()
  const onLogin = () => {
    localStorage.setItem('token', '1')
    dispatch(setToken('token'))
    navigate('/about')
    setTimeout(() => dispatch(setUserInfo({age: 66})), 500)
  }

  return (<div>
    <button onClick={onLogin}>login</button>
  </div>)
}