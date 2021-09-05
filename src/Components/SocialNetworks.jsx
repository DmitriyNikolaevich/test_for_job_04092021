import React from "react"
import s from "./SocialNetworks.module.scss"
import FacebookIcon from "../assets/icons/FacebookIcon.svg"
import GoogleIcon from "../assets/icons/GoogleIcon.svg"

export const SocialNetworks = () => {
    return (
        <div className={s.socialNetworksWrapper}>
            <button>
                <img alt="Facebook" src={FacebookIcon} /> Войти через Facebook
            </button>
            <button>
                <img alt="Google" src={GoogleIcon} /> Войти через Google
            </button>
        </div>
    )
}