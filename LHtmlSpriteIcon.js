L.HtmlSpriteIcon = L.Icon.extend({
  options: {
    /*
      spritesheet: (String) (required)
      animation: (String) (required)
      iconAnchor: (Point)
      popupAnchor: (Point)
    */
  },
  currentFrame: 0,
  timeSinceLast: 0,
  frames: [],
  frameRate: 1000 / 24,
  data: false,
  height: 0,
  width: 0,
  incrementFrame: function() {
    if (this.currentFrame >= this.frames.length) {
      this.gotoAndPlay(this.data.next);
    }
    this.gotoFrame(this.currentFrame);
    this.currentFrame++;
  },
  gotoFrame: function (frame_index) {
    var frame = this.options.spritesheet._frames[this.frames[frame_index]];
    this.div.style.width = frame.rect.width + "px";
    this.div.style.height = frame.rect.height + "px";
    this.height = frame.rect.height;
    this.width = frame.rect.width;
    var bp = -(frame.rect.x) + "px " + -(frame.rect.y) + "px";
    this.div.style.backgroundPosition = bp;
  },
  setAnimation: function (animation) {
    this.data = this.options.spritesheet._data[animation];
    this.frames = this.data.frames;      
  },
  gotoAndPlay: function (animation) {
    var self = this;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(function () { self.incrementFrame() }, 33);
    this.currentFrame = 0;
    this.setAnimation(animation);
    this.gotoFrame(0);
    this.isPlaying = true;
  },
  initialize: function (options) {
    L.Util.setOptions(this, options);
  },
  createIcon: function () {
    this.div = document.createElement('div');
    this.div.style.position = 'absolute';
    this.div.style.backgroundImage = this.options.spritesheet._images[0];
    this.div.style.backgroundImage = "url(" + this.options.spritesheet._images[0].src + ")";
    this.gotoAndPlay(this.options.animation);
    return this.div;
  },
  createShadow: function () {
    return null;
  }
});
