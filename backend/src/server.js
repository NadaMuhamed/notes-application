const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const rateLimiter = require('./middleware/rateLimiter');
const cors = require('cors');
const path = require('path');
const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(cors(
        {
            origin: 'http://localhost:5173',
    
        }
    ));
}
app.use(express.json());
app.use(rateLimiter);

connectDB();

const notesRoutes = require('./routes/notesRoutes');
app.use('/api/notes', notesRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../frontend/dist')));
    
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
    });
}



app.listen(
    process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});