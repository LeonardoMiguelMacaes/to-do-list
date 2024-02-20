import React, { useEffect, useState } from 'react'
import ApiHandler from '../api/ApiHandler'
import TaskComponent from './Task'

function TasksPanel() {
  const apiHandler = new ApiHandler()
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await apiHandler.fetchData()
      setTasks(data)
    }

    fetch()
  }, [apiHandler])
  return (
    <div>
        {tasks.map(task => (
            <TaskComponent name={task.name} description={task.description} done={task.done} priority={task.priority}/>
        ))}
    </div>
  )
}

export default TasksPanel