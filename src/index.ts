import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";

const app: Application = express();
const port = 3000;

const tasks = [
    { id: nanoid(), name: "Shalaa ugaah" },
    { id: nanoid(), name: "Toosoo archih" },
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
    tasks.unshift({ id, name });
    res.status(201).send({ id });
})
app.delete('/tasks/:id', (req: Request, res: Response) => {
    const id = req.params.id

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
