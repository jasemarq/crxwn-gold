let people = require('./people.js');
let $ = require('jquery');
const http = require('http');
const parse = require('parse-json-response');

function onInit() { http.get({
  hostname: 'localhost',
  port: 8080,
  path: '/twitter/',
  agent: false
}, (res) => {
  console.log();
  $('body').append(res.statusCode);
})
}

function onInit2() { http.get({
  hostname: 'localhost',
  port: 8080,
  path: '/twitter/',
  agent: false
}, parse(function(er, data, res) {
  if (er)
  console.error('it failed', res.headers, er)
  else {
    console.log('it worked', res.headers, data)

    for(var i=0; i<data.length; i++) {
      $('body').append(data[i].text);
      $('body').append('<br />');
    }

  }}))}


onInit2();

//$('body').append('<h1>'+people.describe()+'</h1>');
