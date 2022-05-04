import React from 'react'
import sas from './Message.module.css'

type MessageType = {
    avatar: any
    name: string
    message: string
    time: string
}

const Message = (props:MessageType) => {
    return (
            <div className={sas.message}>
                <span className={sas.ava}>{props.avatar}</span>
                <div className={sas.block}>
                    <div className={sas.name}>{props.name}</div>
                    <div className={sas.title}>{props.message}</div>
                    <div className={sas.time}>{props.time}</div>
                </div>
            </div>
    )
}

export default Message;