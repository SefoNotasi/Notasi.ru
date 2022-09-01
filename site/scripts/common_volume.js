var audios = document.querySelectorAll("audio");
var videos = document.querySelectorAll("video");

for (var i = 0; i < audios.length; i++) {
  audios[i].volume = .3;
}

for (var i = 0; i < videos.length; i++) {
  videos[i].volume = .3;
}