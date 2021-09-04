import React from "react"
import { useSelector } from "react-redux"
import { mainSelector } from "./mainSlicer"

export const EmailSent = () => {

    const { currentUser } = useSelector(mainSelector)

    return (
        <div>
        </div>
    )
}