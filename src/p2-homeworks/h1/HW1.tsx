import React from 'react'
import Message from "./Message";
import avka from './icon/icon.jpg'

const messageData = {
    avatar: <img src={avka} alt="ava"/>,
    name: 'Sasha',
    message: 'Hi, How are you?',
    time: '22:22',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1:

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
