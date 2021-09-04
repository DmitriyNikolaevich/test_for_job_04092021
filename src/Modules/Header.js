import React, { useEffect, useState } from "react"
import s from "./Header.module.scss"
import LiveDuneLogoBig from "../assets/icons/LiveDuneLogoBig.svg"
import { useDispatch, useSelector } from "react-redux"
import { mainSelector, setIsAuth } from "./mainSlicer"
import { useHistory } from "react-router"

export const Header = () => {

    const { isAuth } = useSelector(mainSelector)

    const history = useHistory()
    const dispatch = useDispatch()

    const [pathname , setPathname] = useState('')

    const path = history.location.pathname.slice(1)

    const onButtonClick = () => {
        if(isAuth) {
            dispatch(setIsAuth())
            history.push("/")
            setPathname("")
        } else {
            if(pathname === 'registration') {
                history.push("/")
                setPathname("")
            } else {
                history.push("/registration")
                setPathname("registration")
            }
        }
    }

    useEffect(() => {
        setPathname(history.location.pathname.slice(1))
    }, [path, pathname])
    
    return (
        <header className={s.headerWrapper}>
            <div>
                <img alt="LiveDune" src={LiveDuneLogoBig} />
            </div>
            <div className={s.controllPanel}>
                <div className={s.text}>
                    {!isAuth && (pathname ? pathname === 'registration' ? " Уже есть аккаунт?" : '' : "У вас нет аккаунта?")}
                </div>
                <button className={`${isAuth ? s.exitButton : s.blueButton}`} onClick={onButtonClick}>
                    {isAuth ? 'Выйти' : pathname === 'registration' ? 'Войти' : 'Регистрация'}
                </button>
            </div>
        </header>
    )
}