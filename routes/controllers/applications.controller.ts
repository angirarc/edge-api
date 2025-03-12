import express from 'express';

import { auth } from '../../middleware/auth';
import { ApplicationsService } from '../services/applications.service';

const router = express.Router();
const applications = new ApplicationsService();

router.get('/', auth, async (req, res) => {
  const result = await applications.getApplications(req.body);
  res.status(200).json(result);
});

router.get('/:id', auth, async (req, res) => {
  const result = await applications.getSingleApplication(req.params.id, req.body);
  res.status(200).json(result);
});

router.post('/', auth, async (req, res) => {
  const result = await applications.createApplication(req.body);
  res.status(201).json(result);
});

router.patch('/:id', auth, async (req, res) => {
  const result = await applications.updateApplication(req.params.id, req.body);
  res.status(200).json(result);
});

router.delete('/:id', auth, async (req, res) => {
  const result = await applications.deleteApplication(req.params.id);
  res.status(200).json(result);
});