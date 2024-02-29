import './Task.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface TaskComponentProps {
    name:string,
    description:string,
    done: boolean,
    priority:number
}

function TaskComponent(props: TaskComponentProps) {

    const taskName = props.name
    const taskDescription = props.description
    const taskDone = props.done ? "Done" : "To Do"
    var taskPriority = "High priority"

    if(props.priority == 2) {
        taskPriority = "Medium priority"
    }
    else if(props.priority == 3) {
        taskPriority = "Low priority"
    }

    return (
        <div className="task">
            <div className="task-status">
                <div className="status-value">
                    <p className="status">{taskDone}</p>
                </div>
                <div className="status-line"></div>
            </div>
            <div className="identifier">
                <div className="task-title">
                    <p className="title">{taskName}</p>
                </div>
                <div className="task-description">
                    <p className="description">{taskDescription}</p>
                </div>
            </div>
            <div className="task-priority">
                <p className="priority">{taskPriority}</p>
            </div>
        </div>
    )
}

export default TaskComponent