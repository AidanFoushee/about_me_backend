import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get('/awesome/applicant', (req: Request, res: Response) => {
  res.json({
    name: 'Aidan Foushee',
    favoriteFood: 'I absolutely love burritos',
    hobby: 'Playing chess',
    favoriteQuote: 'Code is like humor. When you have to explain it, it’s bad.',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
