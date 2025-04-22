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
            console.error('Error GET tasks:', error)
            throw error
        }
    },
    addTasks: async (title) => {
        try {
            const response = await fetch('http://localhost:3001/tasks/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            })
            const newTask = await response.json()
            return newTask
        } catch (error) {
            console.error('Error POST tasks:', error)
            throw error
        }
    },
    deleteTask: async (id) => {
        try {
            const response = await fetch('http://localhost:3001/tasks/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error DELETE tasks:', error)
            throw error
        }
    },
    complitedTasks: async (id) => {
        try {
            const response = await fetch('http://localhost:3001/tasks/complited', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error PUT tasks:', error)
            throw error
        }
    }
}