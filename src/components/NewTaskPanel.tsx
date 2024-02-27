import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'
import TaskPrioritySelector from './PrimarySelector'
import PrimaryTextArea from './PrimaryTextArea'
import PrimaryButton from './PrimaryButton'

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
            <div className="close-bx">
              <p className="close">x</p>
            </div>
          <div className="new-task-fields">
              <PrimaryInput className='task-name-input' placeholder='Task Name' height='50px'/>
              <PrimaryTextArea className='task-description-textarea' placeholder='Task Description' height='80px'/>
              <div className="selectors">
              <TaskPrioritySelector className='priority-selector' icons={prioritySelectorIcons} defaultValue='High' defaultIcon={faCaretUp} defaultIconColor='var(--primary-green)' selectorTitle='Task Priority'/>
              </div>
              <PrimaryButton className='send-task-button' buttonValue='Send Task' width='96px' height='35px'/>
          </div>
        </div>
    </div>
  )
}

export default NewTaskPanel