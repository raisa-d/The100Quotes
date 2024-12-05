const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const password = encodeURIComponent(`0jN0}@4&k'a|`)
const uri = `mongodb+srv://trikru:${password}@cluster0.atp5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

async function startServer() {
    try {
        // connect to MongoDB
        const client = await MongoClient.connect(uri);
        console.log('Connected to Database');
        // db variable from the connection to access MongoDB
        const db = client.db('the-100-quotes');
        // create a collection to store items in db
        const quotesCollection = db.collection('quotes');

        // tell Express we're using EJS as the template enginge
        app.set('view engine', 'ejs');
        
        // ===== MIDDLEWARE =====
        // get values out of inputs
        app.use(express.urlencoded({ extended: true }));
        // make public folder accessible to the public using express.static
        app.use(express.static('public'));
        // teach server to read JSON to handle PUT requests
        app.use(express.json())

        // get request to serve up index.html file
        app.get('/', async (req, res) => {
            try {
                const results = await quotesCollection.find().toArray()
                // render ejs file, put quotes into index.ejs by passing quotes into render method
                res.render('index.ejs', { quotes: results });
            } catch(err) {
                console.error(err);
            };
        });

        // post request to get values out of form and into request body
        app.post('/quotes', async (req, res) => {
            // use insertOne method to add items into collection
            try {
                const result = await quotesCollection.insertOne(req.body)
                // browser expects something back from server. this redirects to index
                res.redirect('/')
                console.log(result);
            } catch(error) {
                console.error(error);
            }
        });

        // put request
        app.put('/quotes', async (req, res) => {
            try {
                const result = await quotesCollection.findOneAndUpdate({ name: 'John Murphy' },
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote
                        }
                    },
                    {
                        upsert: true
                    }
                )
                console.log(result)
                res.json('Success')
        } catch (err){console.error(err)}
        });

        // delete
        app.delete('/quotes', async (req, res) => {
            const result = await quotesCollection.deleteOne({ name: 'Indra Kom Trikru' });
            if(result.deletedCount === 0) {
                return res.json('No quote to delete')
            }
            res.json('Deleted Indra\'s quote');
        });

        // listen on port 3000
        app.listen(3000, () => console.log('Listening on 3000'));
    } catch(err) {
        console.error(err);
    };
};

startServer()