import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';


// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Welcome To NH University Management Application System',
  });
});



export default app;
