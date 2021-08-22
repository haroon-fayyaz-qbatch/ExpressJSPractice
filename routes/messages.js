var express = require('express');
var router = express.Router();
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

router.get('/', (req, res) => {
    console.log(req.query);
    return res.send(Object.values(messages));
});

router.get('/:messageId', (req, res) => {
    messageId = req.params.messageId;
    const index = messages.findIndex(message => message.id == messageId);
    if (index != -1)
        return res.send(messages[index]);
    else
        return res.send("Message doesn't exist");
});



router.post('/', (req, res) => {
    messages.push(req.body);
    // console.log(req.body);
    return res.send('Received a POST HTTP method');
});

router.put('/:messageId', (req, res) => {
    messageId = req.params.messageId;
    const index = messages.findIndex(message => message.id == messageId);
    if (index != -1)
        messages[index] = req.body;
    return res.send('Received a PUT HTTP method')
});


router.delete('/:messageId', (req, res) => {
    messageId = req.params.messageId;
    const index = messages.findIndex(message => message.id == messageId);
    if (index != -1)
        messages.splice(index, 1);
    return res.send('Received a DELETE HTTP method')
});


// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function(req, res, next) {
    console.log('HDskdsa');
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
        // otherwise pass control to the next middleware function in this stack
    else next()
}, function(req, res, next) {
    console.log('ferre');
    return res.send('GET USER');
    // render a regular page
    // res.render('regular')
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function(req, res, next) {
    console.log(req.params.id)
    res.render('special')
});



module.exports = router;