import React, { useState, useContext } from 'react'; // Importa o hook useContext para usar o contexto
import { TaskContext } from '../context/TaskContext'; // Importa o contexto TaskContext

const TaskForm = ({ currentTask, setCurrentTask }) => { // Recebe a propriedade currentTask e setCurrentTask do componente App
  const { dispatch } = useContext(TaskContext);
  const [task, setTask] = useState(currentTask || { title: '', description: '' }); // Inicializa o estado task com o valor de currentTask ou um objeto com title e description vazios

// Função que é executada quando o formulário é submetido e que adiciona ou edita uma tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      dispatch({ type: 'EDIT_TASK', payload: task });
    } else {
      task.id = Date.now();
      dispatch({ type: 'ADD_TASK', payload: task });
    }
    setCurrentTask(null);
    setTask({ title: '', description: '' });
  };

  // Retorna o formulário com os campos de título e descrição e um botão de salvar que executa a função handleSubmit
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Descrição"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TaskForm;
