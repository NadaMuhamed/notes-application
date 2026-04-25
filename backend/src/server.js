const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const rateLimiter = require('./middleware/rateLimiter');
const app = express();
app.use(express.json());
app.use(rateLimiter);

connectDB();

const notesRoutes = require('./routes/notesRoutes');
app.use('/api/notes', notesRoutes);



-

app.listen(
    process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});