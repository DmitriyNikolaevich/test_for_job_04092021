import React from "react"
import s from "./EmailSent.module.scss"
import SentMailIcon from "../assets/icons/SentMailIcon.svg"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"

export const EmailSent = () => {

    const { from } = useParams()
    const history = useHistory()

    const onBackOnMainClick = () => {
        history.push("/")
    }

    return (
        <div className={s.emailSentWrapper}>
            <img alt="Письмо отправленно" src={SentMailIcon} />
            <h1>Письмо отправлено</h1>
            <span>
                На указанный вами e-mail было отправлено<br/> письмо для {from === 'didntgetemail' ? 'подтверждения адреса электронной почты' : 'смены пароля'}
            </span>
            <button onClick={onBackOnMainClick}>
                Вернуться на главную
            </button>
        </div>
    )
}