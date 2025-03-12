import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { errorHandler } from './middleware/error';

import jobs from './controllers/jobs.controller';
import auth from './controllers/auth.controller';
import statistics from './controllers/statistics.controller';
import applications from './controllers/applications.controller';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/jobs', jobs);
app.use('/statistics', statistics);
app.use('/applications', applications);

app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});