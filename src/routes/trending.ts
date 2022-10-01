import express from 'express';
import { getTrendingNews } from '../controllers/trending';
const router = express.Router();

router.get('/', getTrendingNews);

export default router;
