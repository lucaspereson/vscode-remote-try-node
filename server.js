'use strict';

import express from 'express';

// Function to square a number
export function square(number) {
    return number * number;
}

// Setting up the server
const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/square', (req, res) => {
    const number = parseFloat(req.query.number);
    if (isNaN(number)) {
        res.status(400).send('NÚMERO INVÁLIDO');
    } else {
        res.send(`El cuadrado del número ${number} es ${square(number)}\n`);
    }
});

app.get('/', (req, res) => {
    res.send(`Dirigite a "/square?number=" y  coloca el número del cual quieras obtener su cuadrado`);   
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}

