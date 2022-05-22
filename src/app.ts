import express, { Request, Response } from 'express';

const app: express.Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
    console.log(add(4, 2))
});

app.listen(5000, () => console.log("Server runing"))