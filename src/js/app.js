let Tweets = require('./Twitter.js');
let $ = require('jquery');
const http = require('http');
const parse = require('parse-json-response');
const config = require('../config/config.js');

var Lyrics = [];

// Function to retrieve lyrics. Need to refactor code.
function init() {

  http.get({
  hostname: config.hostname,
  port: config.port,
  path: config.path,
  agent: config.agent

}, parse(function(er, data, res) {
  if (er)
  console.error('it failed', res.headers, er)
  else {
  storeLyrics(data);
  }}))}

function storeLyrics(data) {

  for(var i=0; i<data.length; i++) {
    Lyrics[i] = data[i];

  };

  render(Lyrics);

  return Lyrics;
}


function render(lyrics) {

  $('body').append('<h3>'+Lyrics[9].text+'</h3>')

}



init();




//$('body').append('<h1>'+people.describe()+'</h1>');
