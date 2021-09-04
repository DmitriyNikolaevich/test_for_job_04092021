import React from "react"
import s from "./ForgetPassword.module.scss"
import LockIcon from "../assets/icons/LockIcon.svg"
import { Formik } from "formik"
import loader from "../assets/icons/loader.gif"
import { useSelector } from "react-redux"
import { mainSelector } from "./mainSlicer"
import { useHistory } from "react-router"

export const ForgetPassword = () => {

    const history = useHistory()

    const { users } = useSelector(mainSelector)

    const onAbbortClick = () => {

    }

    return (
        <div className={s.recoverPasswordWrapper}>
            <img alt="Процедура смены пароля" src={LockIcon} />
            <h1>Восстановить пароль</h1>
            <div className={s.text}>
            Введите e-mail, на который регистрировались ранее
            </div>
            <Formik
                initialValues={{ email: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                            errors.email = 'Необходимо заполнить это поле'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i.test(values.email)
                    ) {
                        errors.email = 'Возможно вы ошиблись в указании почтового сервиса'
                    }
                    return errors
                }}
                onSubmit={(values, actions) => {
                    if (users.some(user => user.email === values.email)) {
                        history.push('/emailsent/recovery')
                    } else {
                        actions.setStatus('Пользователя с указанным email не существует')
                        actions.setSubmitting(false)
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    status,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className={(errors.email || status) ? s.errorField : isSubmitting && s.isSubmitting}
                            disabled={isSubmitting}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="email"
                        />
                        {errors.email && touched.email && errors.email}
                        {status && <div className="text-success">{status}</div>}
                        <div className={s.submitButtonWrapper}>
                            {isSubmitting && <img alt="Идет отправка запроса" src={loader}  />}
                            <button type="submit" disabled={isSubmitting}>
                                Отправить
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            <span onClick={onAbbortClick}>Отменить</span>
        </div>
    )
}