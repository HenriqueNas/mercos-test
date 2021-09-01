import 'reflect-metadata';
import 'dotenv/config';

import express, { RequestHandler, Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import AppError from './errors/AppError';
import cors from 'cors';

import createConnection from './database';

createConnection();
const app = express();

app.use(cors());
app.use(express.json() as RequestHandler);
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;