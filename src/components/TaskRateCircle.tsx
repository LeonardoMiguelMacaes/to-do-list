import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface TaskRateCircleProps {
  toDoTasksNumber: number
  doneTasksNumber: number
}

//Componente que mostra a porcentagem de tarefas feitas por meio de um círculo e um número
//Recebe o número de tarefas feitas e o número de tarefas a fazer

function TaskRateCircle({ toDoTasksNumber, doneTasksNumber }: TaskRateCircleProps) {

  //Calcula a porcentagem de tarefas feitas
  const percentage = () => {
    return Math.floor((doneTasksNumber / (toDoTasksNumber + doneTasksNumber)) * 100)
  }
  
  return (
    <div>
        <CircularProgressbar
        value={percentage()}
        text={`${percentage()}%`}
        styles={buildStyles({
            textColor: 'white',
            pathColor: 'white',
            trailColor: '#72a0b3'
        })}/>
    </div>
  )
}

export default TaskRateCircle