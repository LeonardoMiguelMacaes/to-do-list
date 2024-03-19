import React, { useContext, useEffect, useRef, useState } from 'react'
import ApiHandler from '../api/ApiHandler'
import TaskComponent from './Task'
import './TasksPanel.css'
import { TaskContext } from '../_context/TaskContext'

interface TasksPanelProps {
  receivedTasks: {id: number, name: string, description: string, done: boolean, priority: number}[]
}

function TasksPanel({ receivedTasks }: TasksPanelProps) {
  
  return (
      <div className='tasks-panel'>
          {receivedTasks.map((task, index) => (
            <div className="task-bx">
              <TaskComponent id={task.id} name={task.name} description={task.description} done={task.done} priority={task.priority} className={index >= 1 ? 'bottom' : ''}/>
            </div>
          ))}
      </div>
  )
}

export default TasksPanel