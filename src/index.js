/**
 * Created by Wojciech on 10.10.2016.
 */
var PIXI = require('pixi.js');

var renderer = PIXI.autoDetectRenderer(800,600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}