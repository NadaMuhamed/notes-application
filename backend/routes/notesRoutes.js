const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: 'You have a 10 Notes' });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'Note received successfully!' });
});

router.put('/', (req, res) => {
    console.log('Note updated');
    res.status(200).json({ message: 'Note updated successfully!' });
});

router.delete('/:id', (req, res) => {
    console.log('Note deleted');
    res.status(200).json({ message: 'Note deleted successfully!' });
});

module.exports = router;