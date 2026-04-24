exports.getNotes = (req, res) => {
    res.status(200).json({ message: 'You have a 10 Notes' });
}
 exports.createNote = (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'Note received successfully!' });
};
exports.updateNote = (req, res) => {
    console.log('Note updated');
    res.status(200).json({ message: 'Note updated successfully!' });
}
exports.deleteNote = (req, res) => {
    console.log('Note deleted');
    res.status(200).json({ message: 'Note deleted successfully!' });
}