import { Router } from 'express'

export const tasksRouter = Router()

let tasks = []
let idCounter = 1

tasksRouter.get('/', (req, res) => {
    res.json(tasks)
})

tasksRouter.post('/', (req, res) => {
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

