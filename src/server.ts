import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express();
const { Client } = require('pg');
const port = 5001;

// PostgresSQL client object
const client = new Client({
	user: 'postgres',
	password: 'Lacenter(47)',
	host: 'localhost',
	port: 5432,
	database: 'api',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  // error catcher
  .catch((err: Error) => console.error('Connection error', err.stack));

// Enable CORS
app.use(cors());

// API Endpoint
app.get('/awesome/applicant', async (req: Request, res: Response) => {
  try {
    // Query the database for applicant info
    const result = await client.query('SELECT * FROM about_me;');
    const applicant = result.rows[0];
    res.json(applicant);
  } 
  catch (error) {
    console.error('Error querying database:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/awesome/applicant`);
});
