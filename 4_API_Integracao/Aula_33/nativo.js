fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

async function buscarUsuario() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }        
    catch (error) {
        console.error('Erro ao buscar usuario: ', error);
    }
};

buscarUsuario();