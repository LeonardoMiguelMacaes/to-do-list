import { useEffect, useState } from 'react'

function ApiHandler() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/todos')
                
                if(response.ok) {
                    const result = await response.json()
                    setData(result)
                }
            }
            catch (error: any) {
            }

        }
        fetchData()
    }, [])
    return data
}

export default ApiHandler