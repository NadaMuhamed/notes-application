const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'You have a 10 Notes' });
});

app.post('/api/data', (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'Note received successfully!' });
});

app.put('/api/data', (req, res) => {
    console.log('Note updated');
    res.status(200).json({ message: 'Note updated successfully!' });
});

app.delete('/api/data', (req, res) => {
    console.log('Note deleted');
    res.status(200).json({ message: 'Note deleted successfully!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});