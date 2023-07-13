//import dependencies
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
//import route
const pokemonRoute = require('./routes/pokemon.routes')
//constructing our server
dotenv.config();
const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.json());
server.use(cors());

server.use('/pokemon', pokemonRoute);

server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
});