import express from 'express';
import { cache } from './helpers/cache';
import trendingRoutes from './routes/trending';

const app = express();
const port = process.env.PORT || 3000;

app.use(cache(10))

app.use('/trending', trendingRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
