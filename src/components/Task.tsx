import React from 'react'
import './Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function TaskComponent() {
  return (
    <div className="task">
        <div className="task-status">
            <div className="status-value">
                <p className="status">Done</p>
            </div>
            <div className="status-line"></div>
        </div>
        <div className="identifier">
            <div className="task-title">
                <p className="title">Task Title</p>
            </div>
            <div className="task-description">
                <p className="description">Task Description</p>
            </div>
        </div>
        <div className="task-time">
            <div className="task-icon">
            <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="time">5:00 PM</div>
        </div>
    </div>
  )
}

export default TaskComponent