const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3001;
const inventoryRoute = require('./routes/inventory')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.use('/api/inventory', inventoryRoute)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(process.env.PORT || port, () => {
    console.log('server started on port ' + port)
})