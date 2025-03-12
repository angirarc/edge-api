import express from 'express';

import { ApplicationsService } from '../services/applications.service';

const router = express.Router();
const applications = new ApplicationsService();

router.get('/', async (req, res) => {
  const result = await applications.getApplications(req.body);
  res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
  const result = await applications.getSingleApplication(req.params.id);
  res.status(200).json(result);
});

router.post('/', async (req, res) => {
  const result = await applications.createApplication(req.body);
  res.status(201).json(result);
});

router.patch('/:id', async (req, res) => {
  const result = await applications.updateApplication(req.params.id, req.body);
  res.status(200).json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await applications.deleteApplication(req.params.id);
  res.status(200).json(result);
});

export default router;