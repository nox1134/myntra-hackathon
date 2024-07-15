require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const QuizRoutes = require('./routes/QuizRoutes');
const UserResponseRoutes = require('./routes/UserResponseRoutes');
const OutcomeRoutes = require('./routes/OutcomeRoutes');
const MuseRoutes = require('./routes/MuseRoutes');

const app = express();
const PORT = process.env.PORT || 7001;
const frontend = process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(cors({ origin: frontend }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));



app.use(express.json());
app.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 50 * 1024 * 1024 }
}));

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to database:', err));

app.use('/api/quiz', QuizRoutes);
app.use('/api/response', UserResponseRoutes);
app.use('/api/outcome', OutcomeRoutes);
app.use('/api/muse', MuseRoutes);
