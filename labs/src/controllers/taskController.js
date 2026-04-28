const tasks = [
    {
        id: 1,
        title: 'Comprar mantimentos',
        description: 'Comprar leite, pão e frutas no mercado.',
        completed: false
    },
    {
        id: 2,
        title: 'Estudar Node.js',
        description: 'Revisar módulos, rotas e controladores.',
        completed: false
    },
    {
        id: 3,
        title: 'Fazer exercício',
        description: 'Caminhar 30 minutos no fim da tarde.',
        completed: true
    }
]
class TaskController {
    static getAllTasks(req, res) {
        res.status(200).json(tasks);
    }

    static createTask(req, res) {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Título e descrição são obrigatórios.' });
        }
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            completed: false
        };
        tasks.push(newTask);
        res.status(201).json({ message: 'Tarefa criada com sucesso!', task: newTask });
    }
}

export default TaskController;