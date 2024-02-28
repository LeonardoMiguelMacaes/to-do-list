import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import TaskRateCircle from './TaskRateCircle'
import Landing from './Landing'
import TasksPanel from './TasksPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AppPanel.css'
import NewTaskPanel from './NewTaskPanel'
import PrimaryMessage from './PrimaryMessage'

function currentDate() {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
    
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return format(currentDate, 'dd MMM yyyy')
}

function AppPanel() {
  return (
    <div className="app-panel">
        <div className="user-landing">
            <Landing/>
        </div>
        <div className="panel">
        <div className="new-task-panel">
            <NewTaskPanel/>
        </div>
            <div className="user">
                <div className="user-msg">
                    <p>Welcome back,</p>
                    <p className="username">User 👋🏻</p>
                </div>
            </div>
            <div className="top-data">
                <div className="date">
                    <p>{currentDate()}</p>
                </div>
                <div className="user-profile-img">
                        <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
            <div className="tasks-completion">
                <p className='task-msg'>Task completion for today</p>
                <div className="task-rate">
                    <TaskRateCircle percentage={15}/>
                </div>
            </div>
            <div className="tasks">
                <div className="task-management">
                    <div className="tasks-status">
                        <p>To do</p>
                        <p>In Progress</p>
                        <p>Done</p>
                    </div>
                    <div className="new-task">
                        <div className="new-task-icon">
                            <p>+</p>
                        </div>
                        <p className="new-task-msg">Add new</p>
                    </div>
                </div>
                <TasksPanel/>
            </div>
        </div>
    </div>
  )
}

export default AppPanel