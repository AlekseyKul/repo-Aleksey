var image = document.querySelector(".img1");
image.onclick = changeBigPicture;

var image = document.querySelector(".img2");
image.onclick = changeBigPicture;

var image = document.querySelector(".img3");
image.onclick = changeBigPicture;


function changeBigPicture(eventObj) {
    var appDiv = document.querySelector(".imgbig");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var attribimg = eventElement.getAttribute("src").split("/");
    var src = "img/big/" + attribimg[2];
    var img = document.createElement("img");
    img.setAttribute("src", src);
    img.onerror = function() {
        var span = document.createElement("span")
        span.innerText = "dvbdbv";
        appDiv.innerHTML = "";
        appDiv.appendChild(span);

    }
    img.className = "imgb";
    appDiv.appendChild(img);



}

var butlev = document.querySelector(".vlevo");
butlev.onclick = changePicture;


var masimg = ["img/small/blue.jpg", "img/small/red.jpg", "img/small/yellow.jpg"];
var index = 1;
var imgnext = document.createElement("img");
var imgDiv = document.querySelector(".boxsmoll-1");
imgnext.setAttribute("src", masimg[index]);
imgDiv.appendChild(imgnext);
console.log(imgDiv);


function changePicture(eventObj) {
    var imgList
    var knopka = eventObj.target;
    // console.log(knopka.getAttribute("class"));
    // var imgDiv = document.querySelector(".boxsmoll");
    imgDiv.innerHTML = "";
    console.log(imgDiv);
    var clasbut = knopka.getAttribute("class").split(" ");
    console.log(clasbut[1]);

    if (clasbut[1] == "vlevo") {
        index--;

        var imgnext = document.createElement("img");
        imgnext.setAttribute("src", masimg[index]);
        imgDiv.appendChild(imgnext);
        console.log(masimg[index]);



    } else {

    }

}
var haystack_2 = ['283497238987234', undefined, 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];

function findNeedle(haystack) {
      let str = 'found the needle at position '
      for(var x = 0; x < haystack.length; x++ ) {
        if (haystack[x] === "needle"){
          return str += ++x;
          
        }
      }
    
    }
    console.log(findNeedle(haystack_2));

// function init() {
//     var images = document.getElementsByTagName("img");
//     for (var i = 0; i < images.length; i++) {
//         images[i].onclick = changeBigPicture;
//     }
// }


// function changeBigPicture(eventObj) {
//     var appDiv = document.querySelector(".imgbig");
//     appDiv.innerHTML = "";
//     var eventElement = eventObj.target;
//     var imageNameParts = eventElement.classList;
//     var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
//     var imageDomElement = document.createElement("img");
//     imageDomElement.src = src;
//     appDiv.appendChild(imageDomElement);
// }
// window.onload = init;