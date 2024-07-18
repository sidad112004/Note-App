import express from 'express';
import Note from './NoteModel.js';

const router = express.Router();

// Add a new note
router.post('/', async (req, res) => {
    const { title, description, link } = req.body;
    // console.log(title, description, link);
    const newNote = new Note({
        title,
        description,
        link
    });

    try {
        await newNote.save();
        res.status(201).send(newNote);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Search notes by title
router.get('/search', async (req, res) => {
    const { title } = req.query;
    try {
        const notes = await Note.find({ title: new RegExp(title, 'i') });
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
    