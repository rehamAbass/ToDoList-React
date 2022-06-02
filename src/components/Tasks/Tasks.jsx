import React from 'react'
import './Tasks.css'
import Task from '../Task/Task'


const Tasks = ({ tasks, deleteTask, toggleTask }) => {
    return (
        <div className='tasks'>
            {tasks.map((t, i) =>
                <Task
                    index={i}
                    key={i}
                    task={t}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            )}
        </div>
    )
}

export default Tasks;