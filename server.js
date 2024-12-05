const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const password = encodeURIComponent(`0jN0}@4&k'a|`)
const uri = `mongodb+srv://trikru:${password}@cluster0.atp5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// connect to MongoDB
MongoClient.connect(uri)
    .then(client => {
    console.log('Connected to Database');
    const db = client.db('the-100-quotes');
    
    // middleware to get values out of inputs
    app.use(express.urlencoded({ extended: true }));

    // get request to serve up index.html file
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

     // post request to get values out of form and into request body
    app.post('/quotes', (req, res) => {
        console.log(req.body);
    });

    // listen on port 3000
    app.listen(3000, () => console.log('Listening on 3000'));

    })
    .catch(error => console.error(error));