const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.post('/Tasks', (req, res) => {
    const {titulo, descricao} = req.body;
    if (!titulo || !descricao) {
        return res.status(400).json({error: "Título e descrição são obrigatórios"});
    }

    const tasks = {
        id: tasks.length + 1,
        titulo,
        descricao,
        status: "Pendente"
    };
    tasks.push(tasks);
    res.status(201).json(tasks);
});

app.get('/Tasks', (req, res) => {
    res.status(200).json(tasks);
});

app.put('/Tasks/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.req.body;

    const task = task.find((t) => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({error: "Tarefa não encontrada"});
    }
    task.status = status;
    res.status(200).json(task);   
});

app.delete('/Tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({error: "Tarefa não encontrada"});        
    }
    task.splice(taskIndex, 1);
    res.status(204).send();    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});