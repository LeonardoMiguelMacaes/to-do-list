import React from 'react'
import ApiHandler from '../api/ApiHandler'
import TaskComponent from './Task'

function TasksPanel() {
    const values = ApiHandler()
  return (
    <div>
        {values.map(task => (
            <TaskComponent name={task.name} description={task.description} done={task.done} priority={task.priority}/>
        ))}
    </div>
  )
}

export default TasksPanel