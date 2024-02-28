import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'
import PrimarySelector from './PrimarySelector'
import PrimaryTextArea from './PrimaryTextArea'
import PrimaryButton from './PrimaryButton'
import PrimaryMessage from './PrimaryMessage'

function NewTaskPanel() {
  const prioritySelectorIcons: { key: string; icon: IconDefinition; color: string}[] = [
    {key: 'High', icon: faCaretUp, color: 'var(--primary-green)'}, 
    {key: 'Medium', icon: faMinus, color: 'var(--primary-yellow)'}, 
    {key: 'Low', icon: faCaretDown, color: 'var(--primary-red)'}
  ]
  const [taskNameValue, setTaskNameValue] = useState('')
  const getTaskName = (value: string) => {
    setTaskNameValue(value)
  }
  
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('')
  const getTaskDescription = (value: string) => {
    setTaskDescriptionValue(value)
  }

  const [taskPriorityValue, setTaskPriorityValue] = useState(1)
  const getTaskPriority = (value: number) => {
    setTaskPriorityValue(value)
  }
  
  const [submitMessages, setSubmitMessages] = useState<Array<{backgroundColor: string; message: string; messageTimestamp: number}>>([])
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false)
  const [isMessageActive, setIsMessageActive] = useState(false)
  const [isTaskSuccessful, setIsTaskSuccesful] = useState(true)

  function addSubmitMessage(backgroundColor: string, message: string) {

    const messageTimestamp = Date.now()
    setSubmitMessages((prevSubmitMessages) => [...prevSubmitMessages, { backgroundColor, message, messageTimestamp }])
  }
  function verifyFieldsValues() {
    setIsMessageActive(true)
    setIsSubmitButtonClicked(true)
    
    if(taskNameValue.trim().length == 0 || taskDescriptionValue.trim().length == 0) {
      setIsTaskSuccesful(false)
      addSubmitMessage('var(--primary-red)', 'Fill all fields before assining a new task')
    }
    else{
      setIsTaskSuccesful(true)
      addSubmitMessage('var(--primary-green)', 'Task created successfully')
    }
  }
  
  return (
    <div className="new-task-wrapper">
      <div className="messages-bx">
        {submitMessages.map((submitMessage, index) => (
          <PrimaryMessage key={index} backgroundColor={submitMessage.backgroundColor} message={submitMessage.message}/>
        ))}
      </div>
      <div className="new-task-bx">
        <div className="new-task-content">
              <div className="new-task-panel-title">
                  <p>Add New Task</p>
              </div>
              <div className="close-bx">
                <p className="close">x</p>
              </div>
            <div className="new-task-fields">
                <PrimaryInput className='task-name-input' placeholder='Task Name' height='50px' onInputChange={getTaskName}/>
                <PrimaryTextArea className='task-description-textarea' placeholder='Task Description' height='80px' onTextAreaChange={getTaskDescription}/>
                <div className="selectors">
                <PrimarySelector 
                  className='priority-selector'
                  icons={prioritySelectorIcons}
                  defaultValue='High'
                  defaultIcon={faCaretUp}
                  defaultIconColor='var(--primary-green)' 
                  selectorTitle='Task Priority'
                  onSelectorChange={getTaskPriority}/>
                </div>
                <PrimaryButton className='send-task-button' buttonValue='Send Task' width='96px' height='35px' onClickedAction={verifyFieldsValues}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewTaskPanel