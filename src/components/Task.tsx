import './Task.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import NewTaskPanel from './NewTaskPanel'
import SelectorConverter from '../__selector-converter/SelectorConverter'

interface TaskComponentProps {
    id:number,
    name:string,
    description:string,
    done: boolean,
    priority:number
}

function TaskComponent(props: TaskComponentProps) {
    const converter = new SelectorConverter()

    const [isOptionsClicked, setIsOptionsClicked] = useState(false)
    const [isUpdateStatusClicked, setIsUpdatedStatusClicked] = useState(false)
    const [isDeleteTaskClicked, setIsDeleteTaskClicked] = useState(false)
    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)

    var taskId = props.id
    var taskName = props.name
    var taskDescription = props.description
    var taskDone = props.done ? "Done" : "To Do"
    var taskPriority = converter.convertIdToString(props.priority, SelectorConverter.Priority)
    
    const handleEditTaskClose = () => {
        setIsEditTaskOpen(false)
    }

    function handleOptionsClick() {
        if(isOptionsClicked) {
            setIsOptionsClicked(false)
        }
        else {
            setIsOptionsClicked(true)
        }
    }

    function handleUpdateStatusClick() {
        setIsUpdatedStatusClicked(true)
    }

    function handleEditTaskClick() {
        setIsEditTaskOpen(true)
    }

    function handleDeleteTaskClick() {
        setIsDeleteTaskClicked(true)
    }
    
    return (
            <div className="task">
                {isEditTaskOpen && <NewTaskPanel isOnEditMode={true} task={[taskId, taskName, taskDescription, taskPriority]}onCloseButtonClick={handleEditTaskClose}/>}
                <div className="task-wrapper">
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
                        <p className="priority">{taskPriority + " priority"}</p>
                    </div>
                    <div className="task-options" onClick={handleOptionsClick}>
                        <FontAwesomeIcon className="task-options-icon" icon={faList}/>
                        {isOptionsClicked && <div className="options">
                            <div className="update-status">Update status</div>
                            <div className="edit-task" onClick={handleEditTaskClick}>Edit task</div>
                            <div className="delete-task">Delete task</div>
                        </div>}
                    </div>
                </div>
            </div>
    )
}

export default TaskComponent