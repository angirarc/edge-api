import express from 'express';

import { auth } from '../../middleware/auth';
import { StatisticsService } from '../services/statistics.service';

const router = express.Router();
const statistics = new StatisticsService();

router.get('/', auth, async (req, res) => {
  const result = await statistics.getStatistics(req.body);
  res.status(200).json(result);
});