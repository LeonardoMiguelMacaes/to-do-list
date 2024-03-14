import { useEffect, useState } from 'react'

class ApiHandler {
    private data: any[] = []

    public async fetchData(): Promise<any[]> {
        try {
            const response = await fetch('http://localhost:8080/todos')

            if (response.ok) {
                const result = await response.json()
                this.data = result
            }
        }
        catch (error: any) {
        }
        return this.data
    }

    public async postData(taskName: string, taskDescription: string, taskPriority: number) {
        const bodyResponse = `{
            "name": "${taskName}",
            "description": "${taskDescription}",
            "done": 0,
            "priority": ${taskPriority}
        }`
        try {
            const response = await fetch('http://localhost:8080/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: bodyResponse
            })
        }
        catch(error: any) {  
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
            const response = await fetch(`http://localhost:8080/todos/edit/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: bodyResponse
            })
        }
        catch(error: any) {
        }
    }

    public async updateStatus(taskId: number, isTaskDone: boolean) {
        const bodyResponse = `${isTaskDone}`
        try {
            const response = await fetch(`http://localhost:8080/todos/set-status/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: bodyResponse
            })
        }
        catch(error: any) {
        }
    }

    public async deleteData(taskId: number) {
        try {
            const response = await fetch(`http://localhost:8080/todos/${taskId}`, {
                method: 'DELETE'
            })
        }
        catch(error: any) {
        }
    }
}

export default ApiHandler