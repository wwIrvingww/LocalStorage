import { useState, useEffect } from 'react';
import TaskList from '../Components/TaskList';
import EditTaskForm from './EditTaskForm';

const TaskComponent = ({ task }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', description: 'Comprar alimentos para la semana' },
    { id: 2, title: 'Lavar el coche', description: 'Limpiar el coche por fuera y por dentro' },
  ]);
  const [editingTask, setEditingTask] = useState(null);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    setEditingTask(taskId);
  };

  const saveEditedTask = (editedTask) => {
    setTasks(tasks.map(task => (task.id === editedTask.id ? editedTask : task)));
    setEditingTask(null);
  };

  useEffect(() => {
    if (task.title) {
      setTasks([...tasks, task]);
    }
  }, [task]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {editingTask !== null ? (
        <EditTaskForm task={tasks.find(task => task.id === editingTask)} onSave={saveEditedTask} />
      ) : (
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onEditTask={editTask} />
      )}
    </div>
  );
};

export default TaskComponent;