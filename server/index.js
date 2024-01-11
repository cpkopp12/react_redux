// IMPORTS ------------------------------
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

// db setup ------------------------------
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://127.0.0.1:27017/auth?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1'
);

// APP SETUP -------------------------------
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// SERVER SETUP -----------------------------
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
