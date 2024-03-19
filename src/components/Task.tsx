import './Task.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useRef, useState } from 'react'
import NewTaskPanel from './NewTaskPanel'
import SelectorConverter from '../__selector-converter/SelectorConverter'
import ApiHandler from '../api/ApiHandler'
import Task from '../_interface/TaskInterface'
import { TaskContext } from '../_context/TaskContext'

function TaskComponent(props: Task & {className: string}) {
    const {updateTasks} = useContext(TaskContext)
    const apiHandler = new ApiHandler()
    const converter = new SelectorConverter()

    const [isOptionsClicked, setIsOptionsClicked] = useState(false)
    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)
    const optionsDivRef = useRef<HTMLDivElement>(null)

    var taskId = props.id
    var taskName = props.name
    var taskDescription = props.description
    var taskDone = props.done ? "Done" : "To Do"
    var taskDoneBackgroundColor = props.done ? "var(--primary-green)" : "var(--secondary-color)"
    var taskPriority = converter.convertIdToString(props.priority, SelectorConverter.Priority)
    
    const handleEditTaskClose = () => {
        setIsEditTaskOpen(false)
    }

    function handleOptionsClick() {
        const optionsPanelStatus = isOptionsClicked == false ? true : false
        setIsOptionsClicked(optionsPanelStatus)
    }

    function handleUpdateStatusClick() {
        const isTaskDone = props.done == false ? true : false
        apiHandler.updateStatus(taskId, isTaskDone).then(() => {
            updateTasks()
        })
    }

    function handleEditTaskClick() {
        setIsEditTaskOpen(true)
    }

    function handleDeleteTaskClick() {
        apiHandler.deleteData(taskId).then(() => {
            updateTasks()
        })
    }

    useEffect(() => {
        function handleOutsideOptionsDivClick(event: MouseEvent) {
            if(optionsDivRef.current && !optionsDivRef.current.contains(event.target as Node)) {
                setIsOptionsClicked(false)
            }
        }
        document.addEventListener('click', handleOutsideOptionsDivClick)

        return () => {
            document.removeEventListener('click', handleOutsideOptionsDivClick)
        }

    }, [])
    
    return (
            <div className={`task ${props.className}`} id={`${taskId}`}>
                {isEditTaskOpen && <NewTaskPanel panelTitle='Edit task' isOnEditMode={true} task={[taskId, taskName, taskDescription, taskPriority]}onCloseButtonClick={handleEditTaskClose}/>}
                <div className="task-wrapper">
                    <div className="task-status">
                        <div className="status-value" style={{backgroundColor: taskDoneBackgroundColor}}>
                            <p className="status">{taskDone}</p>
                        </div>
                        <div className="status-line" style={{backgroundColor: taskDoneBackgroundColor}}></div>
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
                        <p className="priority">{taskPriority + " priority"}</p>
                    </div>
                    <div className="task-options" onClick={handleOptionsClick} ref={optionsDivRef}>
                        <FontAwesomeIcon className="task-options-icon" icon={faList}/>
                        {isOptionsClicked && <div className="options">
                            <div className="update-status" onClick={handleUpdateStatusClick}>Update status</div>
                            <div className="edit-task" onClick={handleEditTaskClick}>Edit task</div>
                            <div className="delete-task" onClick={handleDeleteTaskClick}>Delete task</div>
                        </div>}
                    </div>
                </div>
            </div>
    )
}

export default TaskComponent