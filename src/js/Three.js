import {Scene, ImageUtils, Fog, WebGLRenderer, PlaneGeometry, Mesh, PerspectiveCamera, AmbientLight, SpotLight, MeshLambertMaterial, BoxGeometry, MeshBasicMaterial} from 'three';
import {EffectComposer, GlitchPass, RenderPass} from "postprocessing";

init();
animate();

var camera, scene, renderer, composer, glitchPass, texture, material, plane;

function init() {


 scene = new Scene();
 camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

texture = ImageUtils.loadTexture("../img/crxwnblk3.png");
material = MeshLambertMaterial({ map: texture });
plane = new Mesh(new PlaneGeometry(window.innerWidth / window.innerHeight), material);
plane.geometry.center();
scene.add(plane);

plane.rotation.z = Math.PI / 2;

// Point and position camera.
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(plane.position);

renderer = new WebGLRenderer({ alpha: true} );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 ); // the default
document.getElementById('canvas').appendChild(renderer.domElement);
scene.fog = new Fog(0xffffff, 0.015, 100);

beGeometry = new BoxGeometry(20, 20, 20);
var cubeMaterial = new MeshLambertMaterial({color: Math.random() * 0xffffff});
var cube = new Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

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
