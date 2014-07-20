var webPage = require('webpage');
var page = webPage.create();
var args = require('system').args;

console.log(args[1]);
var url = args[1];
var fileName = args[2];

page.viewportSize = { width: 1280, height: 320 };
page.open(url, function(status) {
  var clip = page.evaluate(function() {
    return document.querySelector("#main").getBoundingClientRect();
  });
  page.clipRect = {
    top:    clip.top,
    left:   clip.left,
    width:  clip.width,
    height: clip.height
  };

  page.render(fileName);
  phantom.exit();
});