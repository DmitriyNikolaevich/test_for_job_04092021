import { Formik } from "formik"
import React, { useEffect, } from "react"
import s from "./Entrance.module.scss"
import FacebookIcon from "../assets/icons/FacebookIcon.svg"
import GoogleIcon from "../assets/icons/GoogleIcon.svg"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { mainSelector, setIsAuth } from "./mainSlicer"

export const Entrance = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const { users, isAuth } = useSelector(mainSelector)

    const onShowConditionsClick = () => {
        history.push("/forgetpassword")
    }

    const confirmLogin = () => {
        dispatch(setIsAuth(true))
        history.push("/profilepage")
    }

    useEffect(() => {
        isAuth && history.push("/profilepage")
    }, [isAuth])

    return (
        <div className={s.entranceWrapper}>
            <h1>Войти</h1>
            <div className={s.moduleDiscription}>
                Добро пожаловать, рады видеть вас снова 👋
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
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.email || !values.password) {
                        if (!values.email) {
                            errors.email = 'Введите email'
                        } else if (!values.password) {
                            errors.password = 'Введите пароль'
                        }
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i.test(values.email)
                    ) {
                        errors.email = 'Возможно вы ошиблись в указании почтового сервиса'
                    }
                    return errors
                }}
                onSubmit={(values, actions) => {
                    users.some(user => user.email === values.email)
                        ? users.filter(user => user.email === values.email)[0].password === values.password
                            ? confirmLogin()
                            : actions.setStatus('Неверный еmail или пароль')
                        : actions.setStatus('Неверный еmail или пароль')
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
                        <input
                            className={(errors.password || status) && s.errorField}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Пароль"
                        />
                        {errors.email && touched.email && errors.email}
                        {errors.password && touched.password && errors.password}
                        {status && <div className={s.textSuccess}>{status}</div>}
                        <button type="submit">
                            Войти в аккаунт
                        </button>
                    </form>
                )}
            </Formik>
            <span onClick={onShowConditionsClick}>Забыли пароль?</span>
        </div>
    )
}