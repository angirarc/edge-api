import express from 'express';

import { auth } from '../middleware/auth';
import { JobsService } from '../services/jobs.service';

const router = express.Router();
const jobs = new JobsService();

router.get('/', auth, async (req, res) => {
  const result = await jobs.getJobs(req.body);
  res.status(200).json(result);
});

router.get('/:id', auth, async (req, res) => {
  const result = await jobs.getSingleJob(req.params.id, req.body);
  res.status(200).json(result);
});

router.post('/', auth, async (req, res) => {
  const result = await jobs.createJob(req.body);
  res.status(201).json(result);
});

router.patch('/:id', auth, async (req, res) => {
  const result = await jobs.updateJob(req.params.id, req.body);
  res.status(200).json(result);
});

router.delete('/:id', auth, async (req, res) => {
  const result = await jobs.deleteJob(req.params.id);
  res.status(200).json(result);
});

export default router;