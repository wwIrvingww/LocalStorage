import { useEffect, useState } from 'react';
import './App.css';
import Router from './Components/Router';
import TaskComponent from './Views/TaskComponent'; // Importa TaskComponent
import AddTaskForm from './Views/AddTaskForm'; // Importa AddTaskForm

function App() {
  // Initialize state variable 'rutaActual' to keep track of the current route
  const [rutaActual, setRutaActual] = useState("app");

  // useEffect hook to log when the component is mounted and set the initial route
  useEffect(() => {
    console.log("Se ha montado el componente");
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname);
    console.log(window.location);
  }, []);

  // Returns the JSX for the App component
  return (
    <div className='sitio-web'>
      <div className='header'>
        {/* Navigation bar with links to 'Lista de Tareas' and 'Agregar Tarea' */}
        <nav style={{ gap: "8px", display: "flex" }}>
          <a href="/list" style={{ border: "1px solid black", padding: "8px", borderRadius: "8px" }}>Lista de Tareas</a>
          <a href="/add" style={{ border: "1px solid black", padding: "8px", borderRadius: "8px" }}>Agregar Tarea</a>
        </nav>
      </div>
      <div className='paginas'>
        {/* Router component that renders the appropriate component based on the current route */}
        <Router ruta={rutaActual} setRoute={setRutaActual}>
          {/* TaskComponent is rendered for the '/list' route */}
          <TaskComponent />
          {/* AddTaskForm is rendered for the '/add' route */}
          <AddTaskForm />
        </Router>
      </div>
    </div>
  );
}

export default App;

