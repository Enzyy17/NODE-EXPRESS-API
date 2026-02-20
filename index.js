import express from 'express';

import usersRoutes from './routes/users.js';


const app = express();
const PORT = 5000;

// Built-in JSON parser (no need for body-parser anymore)
app.use(express.json());

app.use('/users', usersRoutes);

// Quick test route so you see something works
app.get('/', (req, res) => {
  res.send('Hello from Homepage');
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
  
});

