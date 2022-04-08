const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to My First Docker World!');
});

app.listen(8080, () => console.log('Server is running'));