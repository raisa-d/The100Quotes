const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const password = encodeURIComponent(`0jN0}@4&k'a|`)
const uri = `mongodb+srv://trikru:${password}@cluster0.atp5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// connect to MongoDB
MongoClient.connect(uri)
    .then(
    console.log('Connected to Database')
    ).catch(error => console.error(error));

app.listen(3000, () => {
    // middleware to get values out of inputs
    app.use(express.urlencoded({ extended: true }));

    // get request to serve up index.html file
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    
    // post request
    app.post('/quotes', (req, res) => {
        console.log(req.body);
    });
});