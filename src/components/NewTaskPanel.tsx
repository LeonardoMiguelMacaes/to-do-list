import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import PrimaryInput from './PrimaryInput'
import './NewTaskPanel.css'
import PrimarySelector from './PrimarySelector'
import PrimaryTextArea from './PrimaryTextArea'
import PrimaryButton from './PrimaryButton'
import PrimaryMessage from './PrimaryMessage'
import ApiHandler from '../api/ApiHandler'
import SelectorConverter from '../__selector-converter/SelectorConverter'
import { TaskContext } from '../_context/TaskContext'

interface TaskPanelProps {
  panelTitle: string
  isOnEditMode: boolean;
  task: [taskId: number, taskName: string, taskDescription: string, taskPriority: string] | null
  onCloseButtonClick: (clicked: boolean) => void
}

function NewTaskPanel({ panelTitle, isOnEditMode, task, onCloseButtonClick }: TaskPanelProps) {
  const {updateTasks} = useContext(TaskContext)
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState(false)

  const handleCloseButtonClick = () => {
    setIsCloseButtonClicked(true)
    onCloseButtonClick(true)
  }

  //Define os valores a serem passados pro componente PrimarySelector
  const prioritySelectorIcons: { key: string; icon: IconDefinition; color: string }[] = [
    { key: 'High', icon: faCaretUp, color: 'var(--primary-green)' },
    { key: 'Medium', icon: faMinus, color: 'var(--primary-yellow)' },
    { key: 'Low', icon: faCaretDown, color: 'var(--primary-red)' }
  ]
  //------------------------------------------------------------------------------------

  var taskId: number, defaultTaskName: string, defaultTaskDescription: string, defaultTaskPriority: string

  taskId = task ? task[0] : 0
  defaultTaskName = task ? task[1] : ''
  defaultTaskDescription = task ? task[2] : ''
  defaultTaskPriority = task ? task[3] : 'High'

  //Variáveis responsáveis por atualizarem o valor dos campos, usando funções de callback

  const [taskName, setTaskName] = useState(defaultTaskName)
  const getTaskName = (value: string) => {
    setTaskName(value)
  }

  const [taskDescription, setTaskDescription] = useState(defaultTaskDescription)
  const getTaskDescription = (value: string) => {
    setTaskDescription(value)
  }

  const [taskPriority, setTaskPriority] = useState(defaultTaskPriority)
  const getTaskPriority = (value: string) => {
    setTaskPriority(value)
  }


  //--------------------------------------------------------------------------------------

  //Define as mensagens quando uma tarefa é postada
  const [submitMessages, setSubmitMessages] = useState<Array<{ id: number; backgroundColor: string; message: string }>>([])

  //Função responsável por adicionar e remover as mensagens na array
  function addSubmitMessage(backgroundColor: string, message: string) {

    const submitMessage = { id: new Date().getTime(), backgroundColor, message }
    setSubmitMessages((prevSubmitMessages) => [submitMessage, ...prevSubmitMessages])

    setTimeout(() => {
      setSubmitMessages((prevSubmitMessages) => prevSubmitMessages.filter((msg) => msg.id !== submitMessage.id))
    }, 8000)
  }
  //----------------------------------------------------------------------------------------

  //Função responsável por definir se a tarefa pode ser postada ou não, definindo a mensagem e fazendo uma requisição na api
  function submitTask() {

    if (!isOnEditMode) {
      if (taskName.trim().length == 0 || taskDescription.trim().length == 0) {
        addSubmitMessage('var(--primary-red)', 'Fill all fields before assining a new task')
      }
      else {
        addSubmitMessage('var(--primary-green)', 'Task created successfully')
        handleTaskPost()
      }
    }
    else {
      if(taskName == defaultTaskName && taskDescription == defaultTaskDescription && taskPriority == defaultTaskPriority) {
        addSubmitMessage('var(--primary-red)', 'Values should not be the same')
      }
      else {
      addSubmitMessage('var(--primary-green)', 'Task editted successfully')
      handleTaskPost()
      }
    }
  }
//---------------------------------------------------------------------------------------

//Função responsável por criar o objeto ApiHandler e passar os valores para a requisição
function handleTaskPost() {
  const apiHandler = new ApiHandler()
  const converter = new SelectorConverter()
  const postTaskPriority = converter.convertStringToId(taskPriority, SelectorConverter.Priority)
  if(!isOnEditMode) {
    apiHandler.postData(taskName, taskDescription, postTaskPriority).then(() => {
      updateTasks()
    })
  }
  else {
    apiHandler.editData(taskId, taskName, taskDescription, postTaskPriority).then(() => {
      updateTasks()
    })
  }
}

return (
  <div className="new-task-overlay">
    <div className="messages-bx">
        {submitMessages.map((submitMessage) => (
          <PrimaryMessage
            key={submitMessage.id}
            backgroundColor={submitMessage.backgroundColor}
            message={submitMessage.message}
          />
        ))}
      </div>
    <div className="new-task-component">
      <div className="new-task-content">
        <div className="new-task-panel-title">
          <p>{panelTitle}</p>
        </div>
        <div className="close-bx" onClick={handleCloseButtonClick}>
          <p className="close">x</p>
        </div>
        <div className="new-task-fields">
          <PrimaryInput
            className='task-name-input'
            placeholder='Task Name'
            height='50px'
            defaultValue={taskName}
            onInputChange={getTaskName}
          />
          <PrimaryTextArea
            className='task-description-textarea'
            placeholder='Task Description'
            height='80px'
            defaultValue={taskDescription}
            onTextAreaChange={getTaskDescription}
          />
          <div className="selectors">
            <PrimarySelector
              className='priority-selector'
              icons={prioritySelectorIcons}
              defaultValue={taskPriority}
              selectorTitle='Task Priority'
              onSelectedChange={getTaskPriority}
            />
          </div>
          <PrimaryButton
            className='send-task-button'
            buttonValue='Send Task'
            width='96px'
            height='35px'
            onClickedAction={submitTask}
          />
        </div>
      </div>
    </div>
  </div>
)
}

export default NewTaskPanel