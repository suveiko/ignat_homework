import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix


    const priorityColor = props.affair.priority === 'high'
        ? s.high : props.affair.priority === 'middle' ? s.middle
            : props.affair.priority === 'low' ? s.low : ''

    return (
        <tbody>
        <tr className={s.body}>
            <td className={s.name}>{props.affair.name}</td>
            <td className={priorityColor}>{props.affair.priority}</td>
            <td>
                <SuperButton onClick={deleteCallback}>X</SuperButton>
                {/*<button className={s.button} onClick={deleteCallback}>X</button>*/}
            </td>
        </tr>
        </tbody>
    )
}

export default Affair
