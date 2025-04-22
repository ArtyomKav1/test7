export const APITasks = {
    getTasks: async () => {
        try {
            const response = await fetch('http://localhost:3001/tasks')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error fetching tasks:', error)
            throw error
        }
    },
    addTasks: async (title) => {
        try {
            const response = await fetch('http://localhost:3001/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            })
            const newTask = await response.json()
            return newTask
        } catch (error) {
            console.error('Error fetching tasks:', error)
            throw error
        }
    }
}