const tuneBH = {
  title:"Blå Himel (feat. Hans Philip)", 
  album:"BO4L",
  cover: 'imgs/covers/bo4l.jpg',
  desc:"BO4L er KESIs tredje album og efterfølgeren til EP'eN 888 fra 2019.",
  tune: new Audio("tunes/bh.mp3"),
}

const tuneML = {
  title:"Mona Lisa (feat. Lord Siva)", 
  album:"30 Somre",
  cover: 'imgs/covers/30somre.jpg',
  desc:'"KESI FINDER IND TIL LIVSGLÆDEN OG SOMMERRUSEN PÅ 30 SOMRE" skriver SoundVenue',
  tune: new Audio("tunes/ml.mp3"),
}

let play = function(){document.getElementById("tuneBH").play()}