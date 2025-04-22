import express from 'express'
import { tasksRouter } from './tasks.js'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use('/tasks', tasksRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})