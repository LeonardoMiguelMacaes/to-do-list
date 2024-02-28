import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'
import PrimarySelector from './PrimarySelector'
import PrimaryTextArea from './PrimaryTextArea'
import PrimaryButton from './PrimaryButton'
import PrimaryMessage from './PrimaryMessage'
import ApiHandler from '../api/ApiHandler'

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
  
  const [submitMessages, setSubmitMessages] = useState<Array<{id: number; backgroundColor: string; message: string}>>([])
  const [isTaskSuccessful, setIsTaskSuccesful] = useState(true)

  function addSubmitMessage(backgroundColor: string, message: string) {
    
    const submitMessage = {id: new Date().getTime(), backgroundColor, message}
    setSubmitMessages((prevSubmitMessages) => [submitMessage, ...prevSubmitMessages])
    
    setTimeout(() => {
      setSubmitMessages((prevSubmitMessages) => prevSubmitMessages.filter((msg) => msg.id !== submitMessage.id))
    }, 8000)
  }
  
  function verifyFieldsValues() {
    
    if(taskNameValue.trim().length == 0 || taskDescriptionValue.trim().length == 0) {
      setIsTaskSuccesful(false)
      addSubmitMessage('var(--primary-red)', 'Fill all fields before assining a new task')
    }
    else{
      setIsTaskSuccesful(true)
      addSubmitMessage('var(--primary-green)', 'Task created successfully')
    }
  }

  
  function handleTaskPost() {
    verifyFieldsValues()
    if(isTaskSuccessful) {
      const apiHandler = new ApiHandler()
      apiHandler.postData(taskNameValue, taskDescriptionValue, taskPriorityValue)
    }
  }
  
  return (
    <div className="new-task-wrapper">
      <div className="messages-bx">
        {submitMessages.map((submitMessage) => (
          <PrimaryMessage key={submitMessage.id} backgroundColor={submitMessage.backgroundColor} message={submitMessage.message}/>
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
                <PrimaryButton className='send-task-button' buttonValue='Send Task' width='96px' height='35px' onClickedAction={handleTaskPost}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewTaskPanel