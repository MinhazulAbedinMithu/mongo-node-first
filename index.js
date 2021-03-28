var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Welcome to node.....');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
