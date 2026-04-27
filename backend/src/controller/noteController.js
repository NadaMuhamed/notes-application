const Note = require('../models/Note');
exports.getNotes = async (req, res) => {
    console.log("GET /api/notes hit!");
    try {
        const notes = await Note.find();
        console.log("Notes found in DB:", notes);
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error fetching notes from DB:", error);
        res.status(500).json({ message: 'Error fetching notes' });
    }
};
exports.getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        console.log("Error fetching note by ID:", error);
        res.status(500).json({ message: 'Error fetching note' });
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