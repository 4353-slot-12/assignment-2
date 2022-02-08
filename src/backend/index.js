import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const baseDir = path.join(process.cwd(), 'src');

app.use(express.static(path.join(baseDir, 'frontend'), {
    extensions: ['html', 'htm']
}));

app.listen(port, () => {
  console.log(`cosc-4353 team-12 assignment-2 listening on port ${port}`)
});