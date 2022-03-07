var to = 'Em😘';
var gift_url = 'https://drive.google.com/drive/folders/1AX1C7lER_thY9cUGqr9sKZcv06FbOk0t?usp=sharing';
var gift_image_url = './greeting.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

  var _giftLink,
    _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function (e) {
    present.classList.toggle("open");
  }, false);



  nametag.innerText = to;
}

init();

