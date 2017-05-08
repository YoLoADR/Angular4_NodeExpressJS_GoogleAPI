const express = require('express');
const router = express.Router();

// On declare axios pour faire des requètes http
const axios = require('axios');
const google = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyCg2pDHSB3v3UUkhP_Q0AAnitbU79LkySA';
//const maps_key = 'AIzaSyCg2pDHSB3v3UUkhP_Q0AAnitbU79LkySA'

// const google ='https://api.github.com/users/robconery/repos';

/* Récupère la liste des Api. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Récupère tous les Post sur 'google/distance'
router.get('/distance', (req, res) => {
  // Récupère les Post de l'API mock
  // Idéalement on le remplacera par un service qui se connecte à MongoDB
  axios.get(`${google}`)
    .then(posts => {
        res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;