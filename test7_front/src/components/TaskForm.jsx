import { useState } from 'react'

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return
        onAddTask(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
            />
            <button type="submit">Добавить</button>
        </form>
    )
}

export default TaskForm