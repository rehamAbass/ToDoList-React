import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { useState } from 'react'
import './Card.css'

import Tasks from '../Tasks/Tasks.jsx'
const Card = ({ key, card, deleteCard, deleteTaskServer, addTaskServer, background }) => {

    const [text, setText] = useState('');
    //-------------------------------------------------
    const deleteTask = (id) => {
        deleteTaskServer(card.id, id);
    }
    //---------------------------------------------------
    const saveTask = (text) => {
        addTaskServer(card.id, text)
    }
    //---------------------------------------------
    async function onSubmit(e) {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        let sendText = text;
        saveTask(sendText);
        setText('');
    }
    //----------------------------------------------
    return (
        <div className='list'
            style={{ backgroundColor: background }}
        >
            <h6 className='title'>{card.title}</h6>
            <FaTimes
                style={{
                    color: 'rgba(50,30,100, 0.9)', cursor: 'pointer', marginLeft: "20px",
                    marginInlineEnd: "0%", paddingRight: "20px", float: 'right'
                }}
                onClick={() => { deleteCard(card.id) }}
            />
            <form onSubmit={onSubmit}>
                <div >
                    <input

                        type='text'
                        placeholder='Add Task'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button type='submit' className='addbtn'>add Task</button>

            </form>
            <Tasks tasks={card.tasks} deleteTask={deleteTask} />
        </div>
    )
}


export default Card;