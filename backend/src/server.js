const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());

connectDB();

const notesRoutes = require('./routes/notesRoutes');
app.use('/api/notes', notesRoutes);





app.listen(
    process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});