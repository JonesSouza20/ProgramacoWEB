import React, { useState } from 'react'; //Importa o react e o setState que será utilizado

function form() { //Função componente responsável por renderizar o formulário e gerenciar as validações.
  //Criação de três estados utilizando o useState, cada um inicializando com uma string vazia.
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => { //Função handleSubmit será chamada quando o formulário for enviado, parametro "e" representa o evento de envio.
    e.preventDefault(); //Evita que o navegador recarregue após o envio, permanecendo na mesma página.
    
    if (!name || !email) { //Verifica se os campos de nome e email estão vazios
      setError ("Todos os campos são obrigatório."); //Mensagem de erro caso um dos campos estejam vazios.
    } else {
      setError (''); //Se caso os dois campos estiverem preenchidos a mensagem de erro é limpa.
    }
  };

  return (
    <div>
      <h1>Formulário</h1> 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>

        <div>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        {error && <p style={{color: 'red'}}>{error}</p>}

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default form;