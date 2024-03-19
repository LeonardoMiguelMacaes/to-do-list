import React, { useEffect, useState } from "react"
import Task from "../_interface/TaskInterface"
import ApiHandler from "../api/ApiHandler"

interface TaskContextType {
    tasks: Task[]
    updateTasks: () => Promise<void>
}

const TaskContext = React.createContext<TaskContextType>({
    tasks: [],
    updateTasks: async () => {}
})

export { TaskContext }

interface TaskContextProviderProps {
    children: React.ReactNode
}

const apiHandler = new ApiHandler()

const TaskContextProvider:React.FC<TaskContextProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    const updateTasks = async () => {
        const data = await apiHandler.fetchData()
        setTasks(data)
    }

    return (
        <TaskContext.Provider value={{tasks, updateTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider