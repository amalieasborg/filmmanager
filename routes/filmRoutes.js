const express = require('express');
const router = express.Router();
const Film = require('../models/film');
const filmController = require('../controllers/filmController');

// Route til visning af formularen for ny film
router.get('/new', (req, res) => {
    res.render('new');  // Render new.ejs
});

// Route to render form for editing an existing film
router.get('/film/:id/update', async (req, res) => {
    try {
        const film = await Film.findById(req.params.id);
        res.render('edit', { film });
    } catch (err) {
        console.error("Fejl ved hentning af film:", err);
        res.status(500).send("Fejl ved hentning af film.");
    }
});

router.get('/', filmController.getAllFilms);
router.post('/film', filmController.createFilm);
router.post('/film/:id/update', filmController.updateFilm);
router.post('/film/:id/delete', filmController.deleteFilm);

module.exports = router
