import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'
import TaskPrioritySelector from './PrimarySelector'

function NewTaskPanel() {
  const prioritySelectorIcons: { key: string; icon: IconDefinition; color: string}[] = [
    {key: 'High', icon: faCaretUp, color: 'var(--primary-green)'}, 
    {key: 'Medium', icon: faMinus, color: 'var(--primary-yellow)'}, 
    {key: 'Low', icon: faCaretDown, color: 'var(--primary-red)'}
  ]
  
  return (
    <div className="new-task-bx">
      <div className="new-task-content">
          <div className="new-task-panel-title">
              <p>Add New Task</p>
          </div>
          <div className="new-task-fields">
            <div className="new-task-fields-bx">
              <PrimaryInput className='task-name-input' placeholder='Task Name'/>
              <TaskPrioritySelector className='priority-selector' icons={prioritySelectorIcons} defaultValue='High' defaultIcon={faCaretUp} defaultIconColor='var(--primary-green)' selectorTitle='Task Priority'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewTaskPanel