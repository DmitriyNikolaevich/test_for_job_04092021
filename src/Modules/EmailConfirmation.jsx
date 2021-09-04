import React from "react"
import s from "./EmailConfirmation.module.scss"
import { useSelector } from "react-redux"
import { mainSelector } from "./mainSlicer"
import { useHistory } from "react-router"

export const EmailConfirmation = () => {

    const history = useHistory()

    const { currentUser } = useSelector(mainSelector)

    const onSendAgainClick = () => {
        history.push("/didntgetemail")
    }

    const onToMailClick = () => {
        alert("Переходим к Вашей почте")
    }

    return (
        <div className={s.emailConfirmationWrapper}>
            <h1>Подтвердите ваш e-mail</h1>
            <div className={s.text}>
            {currentUser.name}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.
            </div>
            <button onClick={onToMailClick}>
                Перейти к почте
            </button>
            <span onClick={onSendAgainClick}>Мне не пришло письмо</span>
        </div>
    )
}