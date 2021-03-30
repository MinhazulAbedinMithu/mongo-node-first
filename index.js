var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const fruit = {
        product : 'Tormuz',
        price : 150
    }
    res.send(fruit);
})



app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price: 150});
})
const users = ['Mithu', 'Anam', 'Mukti', 'Riya', 'Siam'];
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId, name});
})

// post
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
