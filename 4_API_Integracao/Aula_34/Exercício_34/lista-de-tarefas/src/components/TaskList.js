import React, { useContext } from 'react'; // Importa o hook useContext do React
import { TaskContext } from '../context/TaskContext'; // Importa o contexto TaskContext criado

// Cria o componente TaskList que recebe a função setCurrentTask
const TaskList = ({ setCurrentTask }) => {
  const { tasks, dispatch } = useContext(TaskContext); // Desestrutura o objeto tasks e dispatch do contexto TaskContext

  const handleEdit = (task) => { // Cria a função handleEdit que recebe a task como parâmetro
    setCurrentTask(task);
  };

  const handleDelete = (id) => { // Cria a função handleDelete que recebe o id como parâmetro
    dispatch({ type: 'DELETE_TASK', payload: { id } });  // Dispara a action DELETE_TASK passando o id da task como payload
  };
  
 // Retorna a lista de tarefas com o título, descrição e botões de editar e excluir
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleEdit(task)}>Editar</button>
          <button onClick={() => handleDelete(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
