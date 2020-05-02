const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
var objectID = require('mongodb').ObjectID;

const app = express();
app.use(express.json());//return the body as json file

app.use(cors());
app.use(express.static('public'));

/*
//MongoDB connection, will change it accordingly after creating our database so we can connect to it

mongoose.connect('mongodb://localhost/'...name of the cluster', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.err('Could not connect to Mongo, err))

*/

//data types of the flashcard, will add more when we figure out what required
const flashCardSchema = new mongoose.Schema({
    flashCardNumber: Number,
    flashCardTerm: String,
    flashCardDefinition: String,
    date: Date
});

const flashCard = mongoose.model('flashCard', flashCardSchema);

//Port of the express server
const port = 3200;
app.listen(port, () => console.log(`Server started on port ${port}`));


//Homepage port, probably need to change
app.get('/', cors(), (req, res) => {
    res.send('Hello World')
})


//Search page
app.get('/search',cors(),(req,res) => {
    res.send('This the search page');
})

//Browse Page
app.get('/browse',cors(),(req,res) => {
    res.send('This the search page');
})

//Create Page
app.get('/create',cors(),(req,res) => {
    res.send('This the search page');
})
