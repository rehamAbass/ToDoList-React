import './Task.css'
import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({ key, index, task, deleteTask }) => {

    return (
        <div className='task'>
            <h4 key={key}>
                {index}. {task.text}
                <FaTimes
                    style={{
                        color: 'red', cursor: 'pointer', marginLeft: "20px",
                        marginInlineEnd: "0%", paddingRight: "0px", float: 'right'
                    }}
                    onClick={() => { deleteTask(task.id) }}
                />
            </h4>
        </div>
    )

}



export default Task;

