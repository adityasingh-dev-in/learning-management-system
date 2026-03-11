import express, { Application, Request, Response } from 'express';
import app from './app'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript and Express!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
