import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number// need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name.trim() !== '' ? s.name : s.error// need to fix with (?:)
    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div className={s.body}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyUp={onKeyUpHandler}/>
            <span>{error}</span>
            <button onClick={addUser} disabled={name.trim() === ''}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{name.trim() !== '' ? error : 'Enter something!'}</div>
        </div>
    )
}

export default Greeting
