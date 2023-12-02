import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import studentRouter from './app/modules/student/student.routes';
import userRouter from './app/modules/user/user.routes';
import errorHandler from './app/middlewares/errorHandler';
import notFoundHandler from './app/utils/notFound';

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
// app.use("/api/v1/students", studentRouter)
app.use('/api/v1/users', userRouter);


// Route NotFound Handler
app.use(notFoundHandler);

// APP Error Handler
app.use(errorHandler);

export default app;
