/**
 * 
Le code ci-dessus définit une simple application express, avec une route 
Et toutes les autres routes sont dirigées vers la page dist / index.html.
(*): Capture toutes les routes
 */

// Récupère les dépendances
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Récupère notre route API 
const api = require('./server/routes/api');
const google = require('./server/routes/google')

const app = express();

// Parse pour les données POSTER 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Pointe vers le chemin static dist
app.use(express.static(path.join(__dirname, 'dist')));

// Defnis notre routes api et google
app.use('/api', api);
app.use('/google', google);

// Récupère toutes les autres routes et retourne le fichier index.html 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Récupère le port de l'environment et le stock dans Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Créer un server HTTP.
 */
const server = http.createServer(app);

/**
 * 
Écoute sur le port fourni, sur toutes les interfaces réseau.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));