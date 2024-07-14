require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const QuizRoutes = require('./routes/QuizRoutes');
const ResultRoutes = require('./routes/ResultRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 7000;
const frontend = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({ origin: frontend }));
app.use(express.json());

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(PORT, () => {
      console.log("Server running on port 7000");
    });
  })
  .catch(err => console.error('Error connecting to database:', err));


app.use('/api/product', ProductRoutes);


