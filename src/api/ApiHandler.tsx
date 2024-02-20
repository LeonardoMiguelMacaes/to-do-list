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
}

export default ApiHandler