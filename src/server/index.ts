
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDatabase } from './db';
import { authRouter } from './auth';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Routes
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
