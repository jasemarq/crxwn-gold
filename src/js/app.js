let people = require('./people.js');
let video = require('./Video.js')
let $ = require('jquery');


//$('body').append('<h1>'+people.describe()+'</h1>');

$('body').append(video.events[0].dataName + ' ' + video.events[0].dataInt);
