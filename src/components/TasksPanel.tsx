import React, { useEffect, useState } from 'react'
import ApiHandler from '../api/ApiHandler'
import TaskComponent from './Task'
import './TasksPanel.css'

interface TasksPanelProps {
  tasks: {id: number, name: string, description: string, done: boolean, priority: number}[]
}

function TasksPanel({ tasks }: TasksPanelProps) {
  return (
      <div className='tasks-panel'>
          {tasks.map(task => (
              <TaskComponent id={task.id} name={task.name} description={task.description} done={task.done} priority={task.priority}/>
          ))}
      </div>
  )
}

export default TasksPanel