import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

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

    const onClickHandler = (FilterType: FilterType) => {
        p.setFilter(FilterType)
    }

    return (
        <div className={s.body}>
            <div>{mappedAffairs}</div>
            <div className={s.button}>
                <button className={s.button_style} onClick={() => onClickHandler('all')}>All</button>
                <button className={s.button_style} onClick={() => onClickHandler('high')}>High</button>
                <button className={s.button_style} onClick={() => onClickHandler('middle')}>Middle</button>
                <button className={s.button_style} onClick={() => onClickHandler('low')}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
