import './Task.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import ApiHandler from '../api/ApiHandler'

interface TaskComponentProps {
    name:string,
    description:string,
    done: boolean,
    priority:number
}

function TaskComponent(props: TaskComponentProps) {
    
    const values = ApiHandler()

    if (values.length === 0 || !values[0]) {
        return <div></div>;
    }

    const taskName = props.name
    const taskDescription = props.description
    const taskDone = props.done ? "Done" : "To Do"
    var taskPriority = "High"

    if(props.priority == 2) {
        taskPriority = "Medium"
    }
    else if(props.priority == 3) {
        taskPriority = "Low"
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