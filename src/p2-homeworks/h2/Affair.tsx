import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.body}>
            <span className={s.name}>*{props.affair.name}* </span>
            <span className={s.text}>*{props.affair.priority}*</span>
            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
