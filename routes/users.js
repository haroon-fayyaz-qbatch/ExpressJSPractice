var express = require('express');
var router = express.Router();

let users = [{
        id: '1',
        username: 'Robin Wieruch',
    },
    {
        id: '2',
        username: 'Dave Davids',
    },
];
/* GET users listing. */

router.get('/', function(req, res, next) {
    return res.send(Object.values(users));
});

module.exports = router;