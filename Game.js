var bg = 0;
var moving = false;

function move(event){
  if(event.keyCode == 32) {
    moving = !moving;
    moveBg();
  } else {
    moveSprite(event);
  }
}

function moveSprite(event) {
  var i = event.keyCode;
  var distance = 15;
  var chr = {
    updown: function() {
      var y = 0;
      if (i == 38) {
        y -= distance;
      } else if (i == 40) {
        y += distance;
      }
      return y;
    },
  };
  // chrId.style.top may look like "-10px"
  // we want this to become -10
  // 1. remove "px"
  // 2. convert the string to a number

  //console.log(chrId.style.top);

  var str = chrId.style.top;
  if (str != "") {
    var z = str.substring(0, str.length - 2);
    var a = parseInt(z);
  } else {
    var a = 0;
  }
  if (a > window.innerHeight-132) {
    a = window.innerHeight-132;
  }
  if (a < 8) {
    a = 8;
  }
  chrId.style.top = (a + chr.updown()) + "px";
}

function moveBg() {
  	var bd = document.getElementById("body");
    bg -= 5;
    bd.style.backgroundPositionX = bg + "px";

  // do it again if moving flag is still true
  if (moving) {
		setTimeout(moveBg, 10);
  }
}
