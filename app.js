// require package and storing it in express variable
const express = require('express');
// calling express and storing its value in a variable
const app = express();

// routing sny traffic going to the root url and sending back a response
app.get('/', function(request, response){
    response.send("Landind page!!!");
});

// routing any traffic going to /Godzilla and sending back a response
app.get('/Godzilla', function(req, res){
    res.send('you now in my land you stupid mf####')
})

//app is listening for request on port 3000  
app.listen(3000,);

// lettting us know that our server isnt working
console.log('Server is live and on port 3000. . . . .');    