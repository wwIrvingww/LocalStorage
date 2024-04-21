import TaskComponent from '../Views/TaskComponent';
import AddTaskForm from '../Views/AddTaskForm';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function TaskRouter({ ruta, setRoute }) {
  const navigate = (newRoute) => {
    setRoute(newRoute);
  };

  if (ruta !== '/list' && ruta !== '/add') {
    return (
      <div>
        <h1>Bienvenidos</h1>
      </div>
    );
  }

  let routeComponent;

  switch (ruta) {
    case '/list':
      routeComponent = (
        <TaskComponent
          key="task-list"
          task={{
            title: '',
            description: '',
          }}
          navigate={navigate}
        />
      );
      break;
    case '/add':
      routeComponent = (
        <AddTaskForm
          key="add-task"
          onAddTask={(task) => {
            // handle adding a task here
            navigate('/list');
          }}
          navigate={navigate}
        />
      );
      break;
    default:
      break;
  }

  return routeComponent;
}

TaskRouter.propTypes = {
  ruta: PropTypes.string.isRequired,
  setRoute: PropTypes.func.isRequired,
};

export default TaskRouter;
