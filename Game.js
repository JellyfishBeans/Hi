function move(event) {
  var k = event.keyCode;
  var distance = 15;
  var chr = {
    updown: function() {
      var y = 0;
      if (k == 38) {
        y -= distance;
      } else if (k == 40) {
        y += distance;
      }
      return y;
    },
    leftright: function() {
      var x = 0;
      if (k == 37) {
        --x;
      } else if (k == 39) {
        ++x;
      }
      return x;
    }
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
if (a > 570) {
  a = 570;
}
if (a < 0) {
  a = 0;
}
  chrId.style.top = (a + chr.updown()) + "px";
  chrId.style.left = (chr.leftright()) + "px";
}
