import React, { useState } from 'react'; // Importação do useState para manipulação de estado
import { TaskProvider } from './context/TaskContext'; // Importação do TaskProvider para prover os dados da lista de tarefas
import TaskForm from './components/TaskForm'; // Importação do TaskForm para renderizar o formulário de tarefas
import TaskList from './components/TaskList'; // Importação do TaskList para renderizar a lista de tarefas

// Função App que renderiza o formulário de tarefas e a lista de tarefas
const App = () => {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <TaskProvider>
      <div>
        <h1>Lista de Tarefas</h1>
        <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
        <TaskList setCurrentTask={setCurrentTask} />
      </div>
    </TaskProvider>
  );
};

export default App;
