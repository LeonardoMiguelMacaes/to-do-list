import { useContext, useEffect, useState } from 'react'

import { format } from 'date-fns'

import ApiHandler from '../api/ApiHandler'

import TaskRateCircle from './TaskRateCircle'
import Landing from './Landing'
import TasksPanel from './TasksPanel'
import NewTaskPanel from './NewTaskPanel'
import Task from '../_interface/TaskInterface'
import TaskStatus from './TaskStatus'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { TaskContext } from '../_context/TaskContext'

import './AppPanel.css'

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
    const {tasks, updateTasks} = useContext(TaskContext)

    const [selectedTaskGroup, setSelectedTaskGroup] = useState<Task[]>([])
    
    const [taskGroups, settaskGroups] = useState<{textValue: string, taskValue: number, className: string}[]>([])

    useEffect(() => {
        const apiHandler = new ApiHandler()
        
        const initializeTasks = async () => {
            const data = await apiHandler.fetchData()
            setSelectedTaskGroup(data)
        }
        
        initializeTasks()
        updateTasks()

        settaskGroups([
            {textValue: 'All', taskValue: tasks.length, className: 'selected'},
            {textValue: 'To Do', taskValue: toDoTasks.length, className: 'unselected'},
            {textValue: 'Done', taskValue: doneTasks.length, className: 'unselected'}
        ])

    }, [])

    const [toDoTasks, setToDoTasks] = useState<Task[]>([])
    const [doneTasks, setDoneTasks] = useState<Task[]>([])

    useEffect(() => {
        const toDo = tasks.filter(element => !element.done)
        const done = tasks.filter(element => element.done)
        setToDoTasks(toDo)
        setDoneTasks(done)
    }, [tasks])
        
    useEffect(() => {
        settaskGroups(prevTaskStatus => [
            {...prevTaskStatus[0], taskValue: tasks.length},
            {...prevTaskStatus[1], taskValue: toDoTasks.length},
            {...prevTaskStatus[2], taskValue: doneTasks.length}
        ])
    }, [tasks, toDoTasks, doneTasks])

    const defineTaskGroup = (value: number) => value == 0 ? tasks : value == 1 ? toDoTasks : doneTasks

    const handleTaskStatusClick = (value: number) => {
        setSelectedTaskGroup(defineTaskGroup(value))
        
        settaskGroups(prevtaskGroups =>
            prevtaskGroups.map((taskStatus, index) => ({
                ...taskStatus,
                className: index != value ? 'unselected' : 'selected'
            }))
        )
    }

    useEffect(() => {
        const value = taskGroups.findIndex(element => element.className == 'selected')
        
        setSelectedTaskGroup(defineTaskGroup(value))
    }, [tasks, toDoTasks, doneTasks])

    const [isNewTaskOpen, setIsNewTaskOpen] = useState(false)

    const handleNewTaskClose = () => {
        setIsNewTaskOpen(false)
    }

    return (
        <div className="app-panel">
            <div className="user-landing">
                <Landing />
            </div>
            <div className="panel">
                {isNewTaskOpen && <div className="new-task-panel">
                    <NewTaskPanel 
                        panelTitle='Add a new task' 
                        isOnEditMode={false} 
                        task={null} 
                        onCloseButtonClick={handleNewTaskClose} 
                    />
                </div>}
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
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
                <div className="tasks-completion">
                    <p className='task-msg'>Task completion for today</p>
                    <div className="task-rate">
                        <TaskRateCircle 
                            toDoTasksNumber={toDoTasks.length} 
                            doneTasksNumber={doneTasks.length}
                        />
                    </div>
                </div>
                <div className="tasks">
                    <div className="task-management">
                        <div className="task-groups">
                            {taskGroups.map((taskStatus, index) => (
                                <div className="task-group-bx" onClick={() => handleTaskStatusClick(index)}>
                                    <TaskStatus 
                                        textValue={taskStatus.textValue} 
                                        taskValue={taskStatus.taskValue} 
                                        className={taskStatus.className}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="new-task" onClick={() => setIsNewTaskOpen(true)}>
                            <div className="new-task-icon">
                                <p>+</p>
                            </div>
                            <p className="new-task-msg">Add new</p>
                        </div>
                    </div>
                    <div className="tasks-bx">
                        <TasksPanel receivedTasks={selectedTaskGroup} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppPanel