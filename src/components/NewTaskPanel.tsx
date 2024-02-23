import React from 'react'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'
import PrimarySelector from './PrimarySelector'

function NewTaskPanel() {
  const prioritySelectorValues = ['High', 'Medium', 'Low']
  return (
    <div className="new-task-bx">
      <div className="new-task-content">
          <div className="new-task-panel-title">
              <p>Add New Task</p>
          </div>
          <div className="new-task-fields">
            <div className="new-task-fields-bx">
              <PrimaryInput className='task-name-input' placeholder='Task Name'/>
              <PrimarySelector className='priority-selector' values={prioritySelectorValues}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewTaskPanel