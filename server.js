const express = require('express');
const dotenv = require('dotenv');

// carregando env vars
dotenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${process.env.NODE_ENV} mode on port ${PORT}`));