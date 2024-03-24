import React, { useRef, useState } from 'react'
import TaskComponent from './Task'
import './TasksPanel.css'

interface TasksPanelProps {
  receivedTasks: {id: number, name: string, description: string, done: boolean, priority: number}[]
}

//Componente que mostra as tarefas
//Recebe as tarefas como parâmetro

function TasksPanel({ receivedTasks }: TasksPanelProps) {
  const taskRef = useRef<Array<HTMLDivElement>>([])
  const [displayedTasks, setDisplayedTasks] = useState<number[]>([1, 2])

  //Função que controla quais tarefas estão sendo mostradas para atualizar a posição da div de opções de cada tarefa
  //Se a tarefa que está sendo vista está em cima a div se direciona para baixo, se está em baixo, se direciona para cima
  //O controle é feito por meio do nome da classe do componente
  const handleScroll = (event: React.UIEvent) => {
    var newDisplayedTasksComponents: number[] = []
    
    setDisplayedTasks([])
    
    const {scrollTop} = event.currentTarget
    
    taskRef.current.map((taskComponent, index) => {
      const taskDistance = taskComponent.offsetTop
      
      if((taskDistance - scrollTop) > 100 && (taskDistance - scrollTop) <= 218) {
        newDisplayedTasksComponents.push(index)
      }
    })

    setDisplayedTasks(newDisplayedTasksComponents)
    handleScroll
  }
  
  return (
      <div className='tasks-panel' onScroll={handleScroll}>
          {receivedTasks.length > 0 ? receivedTasks.map((task, index) => (
            <div className="task-bx" ref={(ref: HTMLDivElement) => taskRef.current[index] = ref}>
              <TaskComponent id={task.id} name={task.name} description={task.description} done={task.done} priority={task.priority} className={displayedTasks.includes(index) ? 'bottom' : ''}/>
            </div>
          )) : 
          <div className="no-tasks-bx">
            <p className='no-tasks'>No tasks here yet!</p>
          </div>}
      </div>
  )
}

export default TasksPanel