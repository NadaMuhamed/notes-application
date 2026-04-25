const Note = require('../models/Note');
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
};
exports.createNote = async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: 'Error creating note' });
    }
};
exports.updateNote = async  (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ message: 'Error updating note' });
    }
}
exports.deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Note deleted successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting note' });
    }
}