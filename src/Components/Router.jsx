import TaskComponent from '../Views/TaskComponent';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AddTaskForm from '../Views/AddTaskForm';

function Router({ ruta, setRoute }) {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Hacer la compra', description: 'Comprar alimentos para la semana' },
        { id: 2, title: 'Lavar el coche', description: 'Limpiar el coche por fuera y por dentro' },
    ]);

    const navigate = (newRoute) => {
        setRoute(newRoute);
    };

    useEffect(() => {
        // Lógica para manipular el localStorage
    }, []);

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        navigate("/list");
    };

    const saveEditedTask = (editedTask) => {
        setTasks(tasks.map(task => (task.id === editedTask.id ? editedTask : task)));
    };

    return (
        <div>
            {ruta === "/list" && <TaskComponent tasks={tasks} onDeleteTask={deleteTask} onSaveEditedTask={saveEditedTask} />}
            {ruta === "/add" && <AddTaskForm onAddTask={addTask} />}
        </div>
    );
}

Router.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRoute: PropTypes.func.isRequired,
};

export default Router;
