import React from 'react'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'

function NewTaskPanel() {
  return (
    <div className="new-task-bx">
      <div className="new-task-content">
          <div className="new-task-panel-title">
              <p>Add New Task</p>
          </div>
          <div className="new-task-fields">
            <div className="new-task-fields-bx">
              <PrimaryInput className='task-name-input' placeholder='Task Name'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewTaskPanel