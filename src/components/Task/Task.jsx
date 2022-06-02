import './Task.css'
import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({ key, index, task, deleteTask, toggleTask }) => {

    return (
        <div className={task.completed ? 'task strike' : 'task'}>
            <h6 key={key}>
                <button
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(0,0,0,0)"
                    }}
                    onClick={toggleTask(task.id)}>
                {index}. {task.text}
                </button>
                <FaTimes
                    style={{
                        color: 'red', cursor: 'pointer', marginLeft: "5px",
                        marginInlineEnd: "0%", paddingRight: "0px", float: 'right',
                    }}
                    onClick={() => { deleteTask(task.id) }}
                />
            </h6>
        </div>
    )

}



export default Task;

