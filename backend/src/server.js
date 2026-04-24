const express = require('express');
const app = express();
app.use(express.json());

const notesRoutes = require('./routes/notesRoutes');
app.use('/api/notes', notesRoutes);





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});