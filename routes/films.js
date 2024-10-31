const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

// Route til visning af formularen for ny film
router.get('/new', (req, res) => {
    res.render('new');  // Render new.ejs
});
router.get('/', filmController.getAllFilms);
router.post('/film', filmController.createFilm);
router.post('/film/:id/update', filmController.updateFilm);
router.post('/film/:id/delete', filmController.deleteFilm);

module.exports = router
