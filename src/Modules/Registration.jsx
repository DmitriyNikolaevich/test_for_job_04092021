import React, { useState } from "react"
import s from "./Registration.module.scss"
import FacebookIcon from "../assets/icons/FacebookIcon.svg"
import GoogleIcon from "../assets/icons/GoogleIcon.svg"

import { Formik } from 'formik'
import { useHistory } from "react-router"
import { useSelector } from "react-redux"
import { addUser, mainSelector, setCurrentUser, setIsAuth } from "./mainSlicer"
import { useDispatch } from "react-redux"

export const Registration = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const { users } = useSelector(mainSelector)

    const [usePromocode, setUsePromocode] = useState(false)

    const onShowPromoClick = () => {
        setUsePromocode(true)
    }

    const onShowConditionsClick = () => {
        history.push("/conditions")
    }

    const registrateUser = (user) => {
        dispatch(addUser(user))
        dispatch(setIsAuth(true))
        dispatch(setCurrentUser({ name: user.name, email: user.email}))
        history.push('/emailconfirmation')

    }

    return (
        <div className={s.registrationWrapper}>
            <h1>Регистрация</h1>
            <div className={s.moduleDiscription}>
                Зарегистрируйся и получи доступ к аналитике аккаунтов.
            </div>
            <div className={s.socialNetworks}>
                <button>
                    <img alt="Facebook" src={FacebookIcon} /> Войти через Facebook
                </button>
                <button>
                    <img alt="Google" src={GoogleIcon} /> Войти через Google
                </button>
            </div>
            <div className={s.moduleDiscription}>
                или
            </div>

            <Formik
                initialValues={{ name: '', email: '', password: '', promocode: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.email || !values.name || !values.password) {
                        if (!values.name) {
                            errors.name = 'Необходимо заполнить это поле'
                        } else if (!values.email) {
                            errors.email = 'Необходимо заполнить это поле'
                        } else if (!values.password) {
                            errors.password = 'Необходимо заполнить это поле'
                        }
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i.test(values.email)
                    ) {
                        errors.email = 'Возможно вы ошиблись в указании почтового сервиса'
                    }
                    return errors
                }}
                onSubmit={(values) => {
                    users.some(user => user.name === values.name)
                        ? alert(`Пользователь с именем ${values.name} уже существует`)
                        : users.some(user => user.email === values.email)
                            ? alert(`Пользователь с таким email уже существует`)
                            : registrateUser({name: values.name, email: values.email, password: values.password})
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className={errors.name && s.errorField}
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Имя"
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            className={errors.email && s.errorField}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="email"
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            className={errors.password && s.errorField}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Пароль"
                        />
                        {errors.password && touched.password && errors.password}

                        {usePromocode
                        ? <input
                            className={errors.promocode && s.errorField}
                            type="promocode"
                            name="promocode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.promocode}
                            placeholder="Промокод"
                        />
                        : <><br/><span onClick={onShowPromoClick}>У меня есть промокод</span></>
                        }
                        {errors.promocode && touched.promocode && errors.promocode}
                        <button type="submit">
                            Создать аккаунт
                        </button>
                    </form>
                )}
            </Formik>
            <div className={s.condition}>
                Создавая аккаунт, я согласен с <span onClick={onShowConditionsClick}>условиями оферты</span>
            </div>
        </div>
    )
}