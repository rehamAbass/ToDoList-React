import React from 'react'
import './Tasks.css'
import Task from '../Task/Task'


const Tasks = ({ tasks, deleteTask }) => {
    return (
        <div className='tasks'>
            {tasks.map((t, i) =>
                <Task
                    index={i}
                    key={i}
                    task={t}
                    deleteTask={deleteTask}
                />
            )}
        </div>
    )
}

export default Tasks;