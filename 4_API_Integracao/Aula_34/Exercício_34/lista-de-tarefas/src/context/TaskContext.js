import React, { createContext, useReducer } from 'react'; // Importa o createContext e useReducer do React para criar o contexto e o reducer
import tasksData from '../data/tasks.json'; // Importa os dados iniciais das tarefas de tasks.json

// Cria o contexto TaskContext com createContext e exporta
const TaskContext = createContext();

// Cria o reducer taskReducer que recebe o estado e a ação e retorna o novo estado
const taskReducer = (state, action) => {
  switch (action.type) { // Verifica o tipo da ação e retorna o novo estado
    case 'ADD_TASK': 
      return [...state, action.payload]; // Adiciona a nova tarefa ao estado
    case 'EDIT_TASK':
      return state.map(task => task.id === action.payload.id ? action.payload : task); // Edita a tarefa no estado 
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id); // Deleta a tarefa do estado
    default: 
      return state; // Retorna o estado atual
  }
};

// Cria o componente TaskProvider que recebe children e retorna o Provider do contexto TaskContext
const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData); // Inicializa o estado tasks com os dados iniciais e o reducer taskReducer

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}> 
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
