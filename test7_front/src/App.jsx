import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { APITasks } from "./api/ApiTasks"

function App() {
  const [tasks, setTasks] = useState([]);
  const setterTask = async () => {
    const data = await APITasks.getTasks()
    setTasks(data)
  }
  const addTask = async (title) => {
    const newTask = await APITasks.addTasks(title)
    setTasks([...tasks, newTask])
  }
  const complitedTasks = async (id) => {
    const newTask = await APITasks.complitedTasks(id)
    setTasks(newTask)
  }
  const deleteTask = async (id) => {
    const newTask = await APITasks.deleteTask(id)
    setTasks(newTask)
  }



  useEffect(() => {
    setterTask()
  }, []);

  return (
    <div className='bg-gray-700 w-screen h-screen flex flex-col justify-center items-center border '>
      <div className=' border-white border-[5px] p-[20px] rounded-[10px] '>
        <h1 className='uppercase text-white font-bold text-[42px]  text-center'>Список задач</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          complitedTasks={complitedTasks}
          deleteTask={deleteTask}

        />
      </div>

    </div>
  );
}

export default App;