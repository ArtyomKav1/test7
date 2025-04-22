import X from "../assets/Trash.svg"
import { useState, useEffect } from 'react'


const TaskList = ({ tasks, complitedTasks, deleteTask }) => {
    const [visible, setVisible] = useState(tasks)

    const changeTaskVisible = (changes) => {
        switch (changes) {
            case "ALL":
                setVisible(tasks)
                break
            case "COMPLITED":
                let completed = tasks.filter((task) => task.completed)
                setVisible(completed)
                break
            case "PROGRESS":
                let progress = tasks.filter((task) => !task.completed)
                setVisible(progress)
                break
        }
    }
    useEffect(() => { setVisible(tasks) }, [tasks])
    return (

        <div>
            <div className="text-white flex gap-[10px] pt-[10px]">
                <button onClick={() => changeTaskVisible("ALL")} className="border-white rounded-[5px] border p-[5px]">Все</button>
                <button onClick={() => changeTaskVisible("PROGRESS")} className="border-white rounded-[5px] border p-[5px]">В процессе</button>
                <button onClick={() => changeTaskVisible("COMPLITED")} className="border-white rounded-[5px] border p-[5px]">Завершённые</button>
            </div>
            <ul className="pt-[15px] flex flex-col gap-[5px] justify-between ">
                {visible.map(task => (
                    <li key={task.id} className="flex gap-[5px] relative " >
                        <div className="inline-flex items-center relative">
                            <input
                                className="block absolute  bottom-[5px] text-[#FFFFFF] w-[88%]    
                                appearance-none focus:outline-none focus:ring-0 peer rounded-[5px] border-black pt-[10px] bg-transparent
                                    focus:border-transparent"
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => complitedTasks(task.id)}
                            />
                            <div
                                className="w-[24px] h-[24px] rounded-[6px] bg-[#FEFEFE]/10 flex items-center justify-center"
                            >
                                {task.completed && (
                                    <div className="w-[14px] h-[14px] rounded-full bg-white/50" />
                                )}
                            </div>

                        </div>
                        <span className={`text-white tr  ${task.completed ? 'line-through none opacity-50' : 'none opacity-100'}`}>
                            {task.title}
                        </span>
                        <div onClick={() => deleteTask(task.id)} className="cursor-pointer absolute right-0 top-[3px]">
                            <img src={X} alt="" />
                        </div>
                    </li >
                ))
                }
            </ul >
        </div>

    )
}
export default TaskList;