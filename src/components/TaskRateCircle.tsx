import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface TaskRateCircleProps {
  toDoTasksNumber: number
  doneTasksNumber: number
}

function TaskRateCircle({ toDoTasksNumber, doneTasksNumber }: TaskRateCircleProps) {

  const percentage = () => {
    return (doneTasksNumber / (toDoTasksNumber + doneTasksNumber)) * 100
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