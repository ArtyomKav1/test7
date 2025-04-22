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
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }
  useEffect(() => {
    setterTask()
  }, []);

  return (
    <div>
      <h1>Список задач</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;