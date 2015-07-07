// Load module dependencies
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Create Express app
var app = express();

// MongoDB Connect
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

// Set the way to serve static content
app.use(express.static('public'));

// Make our app listen on a given port
app.listen(8080, function(){
console.log('Application running on port: 8080.');
});