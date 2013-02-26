EaselJS BitmapAnimations as LeafletJS Map Markers
-------------------------------------------------

Allows loading EaselJS Spritesheets as HTML Div elements onto a map
marker.  H/T to https://github.com/dwnoble/LeafletHtmlIcon .

Usage:
-----


	var preload = new createjs.LoadQueue();
	
	var handleComplete = function () {
	  var parsed = preload.getResult('florae_json');
	  parsed.animations = {
	        alert:         [42, 59, 'alert', 2],
	        charging:      [60, 130, 'charging', 2],
	        sneeze:        [131, 160, 'charging', 2],
	  };
	  var spritesheet = new createjs.SpriteSheet(parsed);
	
	  var icon = new L.HtmlSpriteIcon({ 
	      spritesheet: spritesheet,
	      animation: florae[Math.floor(Math.random() * florae.length)] });
	
	  var ick = new IckMap(spritesheet);
	};
	var manifest = [    
	  {src: 'images/texturepacked.png', id: 'florae'},
	  {src: 'images/texturepacked.json', id: 'florae_json'}
	];
	preload.addEventListener("complete", handleComplete);
	preload.loadManifest(manifest);


Where texturepacked.png and texturepacked.json are TexturePacker'd exports.
