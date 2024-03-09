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
import SelectorConverter from '../__selector-converter/SelectorConverter'

interface TaskPanelProps {
  isOnEditMode: boolean;
  task: [taskId: number, taskName: string, taskDescription: string, taskPriority: string] | null
  onCloseButtonClick: (clicked: boolean) => void
}

function NewTaskPanel({ isOnEditMode, task, onCloseButtonClick }: TaskPanelProps) {
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

  //Define os valores a serem inicializados nos campos quando no modo de edição de tarefa
  const [defaultSelectorValue, setDefaultSelectorValue] = useState('')

  var editTaskId: number
  var editTaskName: string
  var editTaskDescription: string
  var editTaskPriority: string

  useEffect(() => {
    if (isOnEditMode && task != null) {
      editTaskId = task[0]
      editTaskName = task[1]
      editTaskDescription = task[2]
      editTaskPriority = task[3]
      setTaskIdValue(editTaskId)
      setTaskNameValue(editTaskName)
      setTaskDescriptionValue(editTaskDescription)
      setDefaultSelectorValue(editTaskPriority)
    }
  }, [task])
  //------------------------------------------------------------------------------------

  //Variáveis responsáveis por atualizarem o valor dos campos, usando funções de callback
  const [taskIdValue, setTaskIdValue] = useState(1)

  const [taskNameValue, setTaskNameValue] = useState('')
  const getTaskName = (value: string) => {
    setTaskNameValue(value)
  }

  const [taskDescriptionValue, setTaskDescriptionValue] = useState('')
  const getTaskDescription = (value: string) => {
    setTaskDescriptionValue(value)
  }

  const [taskPriorityId, setTaskPriorityId] = useState(1)
  const getTaskPriority = (value: string) => {
    const converter = new SelectorConverter()
    setTaskPriorityId(converter.convertStringToId(value, SelectorConverter.Priority))
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
      if (taskNameValue.trim().length == 0 || taskDescriptionValue.trim().length == 0) {
        addSubmitMessage('var(--primary-red)', 'Fill all fields before assining a new task')
      }
      else {
        addSubmitMessage('var(--primary-green)', 'Task created successfully')
        handleTaskPost()
      }
    }
    else {
      const converter = new SelectorConverter()

      const editPriorityId = converter.convertStringToId(editTaskPriority, SelectorConverter.Priority)
      if (editTaskName == taskNameValue && editTaskDescription == taskDescriptionValue && editPriorityId == taskPriorityId) {
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
    if (!isOnEditMode) {
      apiHandler.postData(taskNameValue, taskDescriptionValue, taskPriorityId)
    }
    else {
      apiHandler.editData(taskIdValue, taskNameValue, taskDescriptionValue, taskPriorityId)
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
            <p>Add New Task</p>
          </div>
          <div className="close-bx" onClick={handleCloseButtonClick}>
            <p className="close">x</p>
          </div>
          <div className="new-task-fields">
            <PrimaryInput
              className='task-name-input'
              placeholder='Task Name'
              height='50px'
              defaultValue={taskNameValue}
              onInputChange={getTaskName}
            />
            <PrimaryTextArea
              className='task-description-textarea'
              placeholder='Task Description'
              height='80px'
              defaultValue={taskDescriptionValue}
              onTextAreaChange={getTaskDescription}
            />
            <div className="selectors">
              <PrimarySelector
                className='priority-selector'
                icons={prioritySelectorIcons}
                defaultValue={defaultSelectorValue}
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