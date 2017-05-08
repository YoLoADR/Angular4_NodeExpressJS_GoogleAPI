const express = require('express');
const router = express.Router();

// On declare axios pour faire des requètes http
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* Récupère la liste des Api. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Récupère tous les Post
router.get('/posts', (req, res) => {
  // Récupère les Post de l'API mock
  // Idéalement on le remplacera par un service qui se connecte à MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;