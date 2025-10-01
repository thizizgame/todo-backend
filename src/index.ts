import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";

const app: Application = express();
const port = 3000;

let tasks = [
    { id: nanoid(), name: "Shalaa ugaah", mode: false },
    { id: nanoid(), name: "Toosoo archih", mode: false },
];
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.get('/tasks', (req: Request, res: Response) => {
    res.send(tasks)
})
app.post('/tasks', (req: Request, res: Response) => {
    const id = nanoid()
    const { name } = req.body;
    const { mode } = req.body;
    tasks.unshift({ id, name, mode });
    res.status(201).send({ id });
})
app.delete('/tasks/:id', (req: Request, res: Response) => {
    const id = req.params.id

    const newTasks = tasks.filter((task) => task.id !== id)
    tasks = newTasks;
    res.send(tasks)
})
app.put('/tasks/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const { name } = req.body;
    const index = tasks.findIndex(task => task.id === id);
    tasks[index].name = name;
    res.send(tasks)
})
app.put('/toggle/tasks/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const { mode } = req.body
    const index = tasks.findIndex(task => task.id === id);
    tasks[index].mode = mode;
    res.send(tasks)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
