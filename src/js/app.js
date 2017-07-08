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

  rendera(Lyrics);

  return Lyrics;
}


function rendera(lyrics) {



  $('body').append('<h3>'+Lyrics[9].text+'</h3>')

}

import {Scene, ImageUtils, Fog, WebGLRenderer, PlaneGeometry, Mesh, PerspectiveCamera, AmbientLight, SpotLight, MeshLambertMaterial, BoxGeometry, MeshBasicMaterial} from 'three';
import {EffectComposer, GlitchPass, RenderPass} from "postprocessing";

init();
animate();

var camera, scene, renderer, composer, glitchPass, texture, material, plane;

function init() {


 scene = new Scene();
 camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

texture = new ImageUtils.loadTexture("./src/img/crxwnblk3.png");
material = new MeshLambertMaterial({ map: texture });
plane = new Mesh(new PlaneGeometry(window.innerWidth / window.innerHeight), material);

scene.add(plane);



// Point and position camera.
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

renderer = new WebGLRenderer({ alpha: true} );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 ); // the default
document.getElementById('canvas').appendChild(renderer.domElement);
scene.fog = new Fog(0xffffff, 0.015, 100);

var cubeGeometry = new BoxGeometry(20, 20, 20);
var cubeMaterial = new MeshLambertMaterial({color: Math.random() * 0xffffff});
var cube = new Mesh(cubeGeometry, cubeMaterial);


// add subtle ambient lighting
        var ambientLight = new AmbientLight(0x0c0c0c);
        scene.add(ambientLight);
        // add spotlight for the shadows
        var spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);


cube.geometry.center();
cube.position.y = 0;

//scene.add(cube);


       composer = new EffectComposer( renderer );
      composer.addPass( new RenderPass( scene, camera ) );
      	glitchPass = new GlitchPass();
      glitchPass.renderToScreen = true;
      composer.addPass( glitchPass );

  //    glitchPass.goWild


  }

      function animate() {
				requestAnimationFrame( animate );
				var time = Date.now();
				composer.render();
				//renderer.render(scene, camera);
			}



/*

import {Scene, AmbientLight, PerspectiveCamera, WebGLRenderer, DoubleSide, PlaneGeometry,
  MeshLambertMaterial, Mesh, DirectionalLight, FogExp2} from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(125, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
renderer.autoClear = false;
renderer.setClearColor( 0xffffff, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

const geometry = new PlaneGeometry(2, 2, 2);
const material = new MeshLambertMaterial({color: 0x0fff23});
const cube = new Mesh(geometry, material);
scene.add(cube);

var ambientLight = new AmbientLight(0x999999 );
scene.add(ambientLight);

var lights = [];
lights[0] = new DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new DirectionalLight( 0x11E8BB, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new DirectionalLight( 0x8200C9, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );



camera.position.z = 5;

function render(){
	requestAnimationFrame(render);
	cube.rotation.x += 0.0;
	cube.rotation.y += 0.0;
	renderer.render(scene, camera);
}

render();


init();

 */



//$('body').append('<h1>'+people.describe()+'</h1>');
