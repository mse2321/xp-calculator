// Load module dependencies
var express = require('express');

// Create Express app
var app = express();

// Set the way to serve static content
app.use(express.static('public'));

// Make our app listen on a given port
app.listen(8080, function(){
console.log('Application running on port: 8080.');
});