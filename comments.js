// Create web server
const express = require('express');
const app = express();

// Add CORS support
const cors = require('cors');
app.use(cors());

// Add body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a list of comments
let comments = [
  { id: 1, author: 'Joe', text: 'Nice work' },
  { id: 2, author: 'Mary', text: 'Thanks' },
  { id: 3, author: 'Jim', text: 'Great job' }
];