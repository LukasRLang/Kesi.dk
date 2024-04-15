
const image = document.getElementById("preImage")

let currentPos = 1;
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg"]

function switch_photo (){
  if (++currentPos >= images.length)
    currentPos = 1;

  image.src = `imgs/${currentPos}.jpg`;
}

setInterval(switch_photo, 150)