import { Router } from 'express'

export const tasksRouter = Router()

let tasks = []
let idCounter = 1

tasksRouter.get('/', (req, res) => {
    res.json(tasks)
})

tasksRouter.post('/add', (req, res) => {
    const { title } = req.body
    if (!title) {
        return res.status(400).json({ error: 'Title is required' })
    }

    const newTask = {
        id: idCounter++,
        title,
        completed: false
    };

    tasks.push(newTask)
    res.status(201).json(newTask)
})

tasksRouter.delete('/delete', (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(400).json({ error: 'Id is not defined' })
    }
    tasks = tasks.filter((task) => task.id !== id)
    res.status(201).json(tasks)
})
tasksRouter.put('/complited', (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(400).json({ error: 'Id is not defined' })
    }
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    res.status(201).json(tasks)
})