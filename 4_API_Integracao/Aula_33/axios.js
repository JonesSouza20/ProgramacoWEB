import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

axios.post('https://jsonplaceholder.typicode.com/posts'), {
    nome: 'João',
    email: 'jones@gmail.com',
}

.then(response => console.log(response.data))
.catch(error => console.error(error));