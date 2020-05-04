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

//data types of the flashcard, not final, might require some changes
const flashCardSchema = new mongoose.Schema({
    author: String,
    name:String,
    edited:false,
    flashCardSet: {
        frontData: String,
        backData: String,
        creationDataTime:{type: Date, default:Date.now},
        size:{
            x: Number,
            y: Number,
            uom: String
        }

    }
    
    /*
    flashCardNumber: Number,
    flashCardTerm: String,
    flashCardDefinition: String,
    date: Date
    */
});





const flashCard = mongoose.model('flashcards', flashCardSchema);

//Port of the express server
const port = 3200;
app.listen(port, () => console.log(`Server started on port ${port}`));



//Homepage port
app.get('/', cors(), (req, res) => {
    res.send('Hello World')
})

//create a flash card set, not final, still working on it
//use Postman to try adding data
app.post('/create', cors(), (req,res) =>{
    console.log(JSON.stringify(req));
    var set = new flashCard({
        author = req.body.author,
        name = req.body.name,
        flashCardSet: {
            frontData: req.body.frontData,
            backData: req.body.backData,
        }
    })
    set.save(function(err,result){
        if(err){
            return next(err)}
            res.status(201).json(result)     
    });  
});

//Search page
app.get('/search',cors(),(req,res) => {
    res.send('This is the search page');
})

//Browse Page
app.get('/browse',cors(),(req,res) => {
    res.send('This is the browse page');
})

//Create Page
app.get('/create',cors(),(req,res) => {
    res.send('This is the create page');
})
