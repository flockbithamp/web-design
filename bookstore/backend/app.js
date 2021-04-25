var express = require('express'); // Telling nodeJs that we gonna use Express
var cors = require('cors');

var app = express(); // Express is sleeping and we want awake it. So, we are calling it.
var booksInfoJSON = require('./json/books.json');


var port = 5555;  // We are assigning address to the server.

app.use(cors());
app.use(express.static('images'))

// Bridge
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Bridge
// It will receive the book name from the frontend
// We will load the json file
// check if that book exists in the json.
app.get('/getBookInfo/:id', (req, res) => {
  var bookName = req.params.id; // Getting the book name.
  var result = null;  // This variable will tell if we have a book or not.
  for (var i=0; i < booksInfoJSON.length; i++){
    if(booksInfoJSON[i]["bookName"] == bookName) result = booksInfoJSON[i];
  }
  res.json({result});
});

app.get('/getAllBooks', (req, res) => {
  res.json({booksInfoJSON});
});


// Assigning address to the express & telling express 
// if someone will communicate with you on this address,
// You need to respond to that request.
app.listen(port, () => {
  console.log(`Backend of Bookstore is listening at http://localhost:${port}`);
})