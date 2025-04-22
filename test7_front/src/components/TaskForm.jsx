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
        <div className=' border-b-[2px] border-white pt-[10px] '>
            <form onSubmit={handleSubmit}>
                <input
                    className='uppercase text-white font-bold text-[22px] focus:border-none'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название задачи"
                />
                <button
                    className='uppercase text-white font-bold text-[22px] pl-[10px]'
                    type="submit"
                >
                    Добавить
                </button>
            </form>
        </div>
    )
}

export default TaskForm