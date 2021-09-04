import { Formik } from "formik"
import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import s from "./DidntGetEmail.module.scss"
import { mainSelector } from "./mainSlicer"

export const DidntGetEmail = () => {

    const history = useHistory()

    const { users } = useSelector(mainSelector)

    const resendMailr = () => {
        history.push("/emailsent/didntgetemail")
    }

    const onAbbortClick = () => {
        history.push("/emailconfirmation")
    }

    return (
        <div className={s.didntGetEmailWrapper}>
            <h1>Мне не пришло письмо</h1>
            <div className={s.text}>
            Письмо может прийти с задержкой в 5-10 минут. <br/>
            Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам". 
            Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку <span>support@livedune.ru</span> и мы активируем ваш аккаунт.
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
                    users.some(user => user.email === values.email) ? resendMailr() : actions.setStatus('Пользователя с указанным email не существует')
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    status,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className={(errors.email || status) && s.errorField}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="email"
                        />
                        {errors.email && touched.email && errors.email}
                        {status && <div className="text-success">{status}</div>}
                        <button type="submit">
                            Отправить заново
                        </button>
                    </form>
                )}
            </Formik>
            <span onClick={onAbbortClick}>Отменить</span>
        </div>
    )
}