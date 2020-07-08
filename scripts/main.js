var shipSpace = {
  drink:"Water",
  combustibles:"fuel",
  passengers:1500,
};

document.getElementById("infoSpaceship").innerHTML = shipSpace.drink +' and '+ shipSpace.combustibles + ' ' +"are important, but they all love to eat chocolate Mars bars in space the most.";

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var i = 0;
function love() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myLove");
    var width = 1;
    var id = setInterval(frame, 150);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function chocolateMode() {
  document.body.style.backgroundImage = "url('https://www.irishtimes.com/polopoly_fs/1.3676661.1540543932!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg')";

function normal() {
	document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1745055.jpg')";
}



}












