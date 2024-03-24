import React from 'react'
import './TaskStatus.css'

interface TaskStatusProps {
    textValue: string
    taskValue: number
    className: string
}

//Componente que mostra um grupo de tarefas com base no status da tarefa
//Recebe o nome do grupo e a quantidade de tarefas

function TaskStatus({ textValue, taskValue, className }: TaskStatusProps) {
  return (
    <div className={`task-group ${className}`}>
        <p>{textValue} ({taskValue})</p>
    </div>
  )
}

export default TaskStatus