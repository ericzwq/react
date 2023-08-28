import style from './layout.module.scss'
import {Outlet, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export default function () {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (<div className={style.layoutBox}>
    <header>header</header>
    <main>
      <div className={style.left}>left</div>
      <div>
        <button onClick={logout}>logout</button>
        <button onClick={() => navigate('/home')}>to home</button>
        <button onClick={() => navigate('/about')}>to about</button>
        <button onClick={() => navigate('/effect-test')}>to effect-test</button>
        <button onClick={() => navigate('/ref-test')}>to ref-test</button>
        <button onClick={() => navigate('/context-test')}>to context-test</button>
        <Outlet/>
      </div>
      <div className={style.right}>right</div>
    </main>
    <footer>footer</footer>
  </div>)
}