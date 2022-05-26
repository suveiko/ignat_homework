import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    return (
        <div className={s.body}>
            <div className={s.input}><SuperInputText value={name} onChange={setNameCallback} onKeyUp={onKeyUpHandler} error={error}/>
            </div>
            <SuperButton onClick={addUser} disabled={name.trim() === ''}>Add</SuperButton>
            <span className={s.users}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
