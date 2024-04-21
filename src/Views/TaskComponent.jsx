import { useState, useEffect } from 'react';
import TaskList from '../Components/TaskList';
import EditTaskForm from './EditTaskForm';

const TaskComponent = ({ tasks, onDeleteTask, onSaveEditedTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const editTask = (taskId) => {
    setEditingTask(taskId);
  };

  const saveEditedTask = (editedTask) => {
    onSaveEditedTask(editedTask);
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {editingTask !== null ? (
        <EditTaskForm task={tasks.find(task => task.id === editingTask)} onSave={saveEditedTask} />
      ) : (
        <TaskList tasks={tasks} onDeleteTask={onDeleteTask} onEditTask={editTask} />
      )}
    </div>
  );
};

export default TaskComponent;
