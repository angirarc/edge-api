import express from 'express';

import { StatisticsService } from '../services/statistics.service';

const router = express.Router();
const statistics = new StatisticsService();

router.get('/', async (req, res) => {
  const result = await statistics.applicationStatistics(req.query.period as  "week" | "month" | "year");
  res.status(200).json(result);
});

export default router;