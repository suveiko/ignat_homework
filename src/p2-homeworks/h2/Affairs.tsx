import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: DataArrayType[]
    setFilter: (FilterType: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

type DataArrayType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

function Affairs(p: AffairsPropsType) {
    const mappedAffairs = p.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={p.deleteAffairCallback}
        />
    ))

    const onClickHandlerAllHandler = () => p.setFilter('all')
    const onClickHandlerHighHandler = () => p.setFilter('high')
    const onClickHandlerMiddleHandler = () => p.setFilter('middle')
    const onClickHandlerLowHandler = () => p.setFilter('low')

    return (
        <div>
            <div className={s.body}>
                <div>{mappedAffairs}</div>
            </div>
            <div className={s.button}>
                <SuperButton onClick={onClickHandlerAllHandler}>All</SuperButton>
                <SuperButton onClick={onClickHandlerHighHandler}>High</SuperButton>
                <SuperButton onClick={onClickHandlerMiddleHandler}>Middle</SuperButton>
                <SuperButton onClick={onClickHandlerLowHandler}>Low</SuperButton>
                {/*<button className={s.button_style} onClick={onClickHandlerAllHandler}>All</button>*/}
                {/*<button className={s.button_style} onClick={onClickHandlerHighHandler}>High</button>*/}
                {/*<button className={s.button_style} onClick={onClickHandlerMiddleHandler}>Middle</button>*/}
                {/*<button className={s.button_style} onClick={onClickHandlerLowHandler}>Low</button>*/}
            </div>
        </div>

    )
}

export default Affairs

