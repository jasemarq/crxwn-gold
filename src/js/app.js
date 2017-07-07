let people = require('./people.js');
let twitter = require('./Twitter.js')
let $ = require('jquery');






//$('body').append('<h1>'+people.describe()+'</h1>');

$('body').append(twitter.getTweets());
