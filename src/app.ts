import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import studentRouter from './app/modules/student/student.routes';


// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Welcome To NH University Management Application System',
  });
});


// APP API Call
app.use("/api/v1/students", studentRouter)


export default app;
