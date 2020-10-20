function gate () {
  var UserInput = prompt("パスワードを入力して下さい:","");
  location.href = UserInput + ".html";
}

var images = ['https://syu-h81.github.io/back-portfolio/2998.jpg', 'https://syu-h81.github.io/back-portfolio/2999.jpg','https://syu-h81.github.io/back-portfolio/3000.jpg',
'images/3001.jpg','https://syu-h81.github.io/back-portfolio//3002.jpg','https://syu-h81.github.io/back-portfolio/3004.jpg'];
var current = 0;
var changeImage = function(num) {
  if(current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
  }
};

document.getElementById('prev').onclick = function() {
  changeImage(-1);
};
document.getElementById('next').onclick = function() {
  changeImage(+1);
};


//ビデオのスライド処理
var videos = ['https://syu-h81.github.io/back-portfolio/ona1.mp4', 'https://syu-h81.github.io/back-portfolio/ona2.mp4'];
var current = 0;
var changeVideo = function(num) {
  if(current + num >= 0 && current + num < videos.length) {
    current += num;
    document.getElementById('main_video').src = videos[current];
  }
};

document.getElementById('video-prev').onclick = function() {
  changeVideo(-1);
};
document.getElementById('video-next').onclick = function() {
  changeVideo(+1);
};
