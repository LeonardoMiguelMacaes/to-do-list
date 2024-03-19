import React from 'react'
import './TaskStatus.css'

interface TaskStatusProps {
    textValue: string
    taskValue: number
    className: string
}

function TaskStatus({ textValue, taskValue, className }: TaskStatusProps) {
  return (
    <div className={`task-group ${className}`}>
        <p>{textValue} ({taskValue})</p>
    </div>
  )
}

export default TaskStatus