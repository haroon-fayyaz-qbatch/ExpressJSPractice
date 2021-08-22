require('dotenv').config();


const express = require('express');

const app = express();


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);

// app.get('/', (req, res) => {
//     return res.send('Received a GET HTTP method');
// });


let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
    },
    2: {
        id: '2',
        username: 'Dave Davids',
    },
};

let messages = [{
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    {
        id: '2',
        text: 'By World',
        userId: '2',
    },
];

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});




app.post('/messages', (req, res) => {
    messages.push({
        id: req.params.messageId,
        text: req.params.text,
        userId: req.params.userId
    });
    return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

// app.listen(process.env.PORT, () =>
//     console.log(`Example app listening on port ${process.env.PORT}!`),
// );