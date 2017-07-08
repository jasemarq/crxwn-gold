import {Scene, WebGLRenderer, PlaneGeometry, Mesh,
  PerspectiveCamera, AmbientLight, MeshLambertMaterial,
  DirectionalLight, VideoTexture, LinearFilter, RGBFormat,
CSS3DObject, CSS3DRenderer, TrackballControls, Group} from 'three';

let $ = require('jquery');


import {EffectComposer, GlitchPass, RenderPass} from "postprocessing"

$('body').append(
<div class="video-background">
    <div class="video-foreground">
      <iframe src="https://www.youtube.com/embed/aEPMDoK7eGE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>)
