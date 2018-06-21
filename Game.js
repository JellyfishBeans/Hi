var bg = 0;
let treeWidth = 200;
let treeHeight = 200;
var treePosX = 0;
var treePosY = 0;
var treePosX2 = 200;
var treePosY2 = 0;
var treePosX3 = 400;
var treePosY3 = 0;
var treePosX4 = 600;
var treePosY4 = 0;
var treePosX5 = 800;
var treePosY5 = 0;
var treePosX6 = 1000;
var treePosY6 = 0;
var randomHeight = treeHeight;
var owlPosX = 0;
var owlPosY = 0;
var owlWidth = 152;
var owlHeight = 108;
var moving = false;

function move(event){
  if(event.keyCode == 32) {
    moving = true;
    moveStuff();
  }
  if(!moving) {
    alert("GAME OVER. PRESS OK TO RESTART.");
    location.reload();
  } else {
    moveSprite(event);
  }
}

//function moveSprite(event) {
//   var i = event.keyCode;
//   var distance = 15;
//   var chr = {
//     updown: function() {
//       var y = 0;
//       if (i == 38) {
//         y -= distance;
//       } else if (i == 40) {
//         y += distance;
//       }
//       return y;
//     },
//   };
//   // chrId.style.top may look like "-10px"
//   // we want this to become -10
//   // 1. remove "px"
//   // 2. convert the string to a number
//
//   //console.log(chrId.style.top);
//
//   var str = chrId.style.top;
//   if (str != "") {
//     var z = str.substring(0, str.length - 2);
//     var a = parseInt(z);
//   } else {
//     var a = 0;
//   }
//   if (a > window.innerHeight-132) {
//     a = window.innerHeight-132;
//   }
//   if (a < 8) {
//     a = 8;
//   }
//   chrId.style.top = (a + chr.updown()) + "px";
// }
function moveSprite(event) {
  var i = event.keyCode;
  var distance = 15;
  if (i == 38 && owlPosY - distance >= 0) {
    owlPosY -= distance;
  } else if (i == 40 && owlPosY + distance < window.innerHeight - 102) {
    owlPosY += distance;
  }
  var sprite = document.getElementById("chrId");
  sprite.style.top = owlPosY + "px";
}

function moveStuff() {
  	var bd = document.getElementById("body");
    bg -= 5;
    bd.style.backgroundPositionX = bg + "px";

    var t = document.getElementById("tree");
    treePosX -= 5;
    t.style.left = treePosX + "px";
    t.style.bottom = treePosY + "px";


    if (treePosX < -treeWidth) {
      treePosX = window.innerWidth;
      randomHeight = Math.round(Math.random() * (window.innerHeight - treeHeight))
      t.style.height = randomHeight + "px";
      t.style.width = treeWidth + "px";
    }

    var t2 = document.getElementById("tree2");
    treePosX2 -= 5;
    t2.style.left = treePosX2 + "px";
    t2.style.bottom = treePosY2 + "px";


    if (treePosX2 < -treeWidth) {
      treePosX2 = window.innerWidth;
      var randomHeight2 = Math.round(Math.random() * (window.innerHeight - treeHeight))
      t2.style.height = randomHeight2 + "px";
      t2.style.width = treeWidth + "px";
    }
    // console.log(treePosX2);

    var t3 = document.getElementById("tree3");
    treePosX3 -= 5;
    t3.style.left = treePosX3 + "px";
    t3.style.bottom = treePosY3 + "px";


    if (treePosX3 < -treeWidth) {
      treePosX3 = window.innerWidth;
      var randomHeight3 = Math.round(Math.random() * (window.innerHeight - treeHeight))
      t3.style.height = randomHeight3 + "px";
      t3.style.width = treeWidth + "px";
    }

    var t4 = document.getElementById("tree4");
    treePosX4 -= 5;
    t4.style.left = treePosX4 + "px";
    t4.style.bottom = treePosY4 + "px";


    if (treePosX4 < -treeWidth) {
      treePosX4 = window.innerWidth;
      var randomHeight4 = Math.round(Math.random() * (window.innerHeight - treeHeight))
      t4.style.height = randomHeight4 + "px";
      t4.style.width = treeWidth + "px";
    }

    var t5 = document.getElementById("tree5");
    treePosX5 -= 5;
    t5.style.left = treePosX5 + "px";
    t5.style.bottom = treePosY5 + "px";


    if (treePosX5 < -treeWidth) {
      treePosX5 = window.innerWidth;
      var randomHeight5 = Math.round(Math.random() * (window.innerHeight - treeHeight))
      t5.style.height = randomHeight5 + "px";
      t5.style.width = treeWidth + "px";
    }

    var t6 = document.getElementById("tree6");
    treePosX6 -= 5;
    t6.style.left = treePosX6 + "px";
    t6.style.bottom = treePosY6 + "px";


    if (treePosX6 < -treeWidth) {
      treePosX6 = window.innerWidth;
      var randomHeight6 = Math.round(Math.random() * (window.innerHeight - treeHeight))
      t6.style.height = randomHeight6 + "px";
      t6.style.width = treeWidth + "px";
    }

    var moreRoomX = 70;
    var moreRoomY = 5;
    var ax = owlPosX + owlWidth;
    var ay = owlPosY + owlHeight;
    var bx = treePosX;
    var by = Math.abs(randomHeight - window.innerHeight);
    if(ax > bx + moreRoomX && ay > by + moreRoomY) {
      moving = false;
    }

  // do it again if moving flag is still true
  if (moving) {
		setTimeout(moveStuff, 10);
  }
}
