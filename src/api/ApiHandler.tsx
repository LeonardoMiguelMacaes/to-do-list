import Task from '../_interface/TaskInterface'

class ApiHandler {

    public async fetchData(): Promise<Task[]> {
        try {
            const response = await fetch('http://localhost:8080/todos')

            if (response.ok) {
                const result = await response.json()
                const tasks: Task[] = result.map((data: any) => (
                    {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        done: data.done,
                        priority: data.priority
                    }
                ))
                return tasks
            }
        }
        catch (error: any) {
        }
        return []
    }

    public async postData(taskName: string, taskDescription: string, taskPriority: number) {
        const bodyResponse = `{
            "name": "${taskName}",
            "description": "${taskDescription}",
            "done": 0,
            "priority": ${taskPriority}
        }`
        try {
            await fetch('http://localhost:8080/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: bodyResponse
            })
        }
        catch (error: any) {
        }
    }

    public async editData(taskId: number, taskName: string, taskDescription: string, taskPriority: number) {
        const bodyResponse = `{
            "name": "${taskName}",
            "description": "${taskDescription}",
            "done": 0,
            "priority": ${taskPriority}
        }`
        try {
            await fetch(`http://localhost:8080/todos/edit/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: bodyResponse
            })
        }
        catch (error: any) {
        }
    }

    public async updateStatus(taskId: number, isTaskDone: boolean) {
        const bodyResponse = `${isTaskDone}`
        try {
            await fetch(`http://localhost:8080/todos/set-status/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: bodyResponse
            })
        }
        catch (error: any) {
        }
    }

    public async deleteData(taskId: number) {
        try {
            await fetch(`http://localhost:8080/todos/${taskId}`, {
                method: 'DELETE'
            })
        }
        catch (error: any) {
        }
    }

    public async returnTasks() {
            try {
                const data = await this.fetchData();
                return data
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
    }
}

export default ApiHandler