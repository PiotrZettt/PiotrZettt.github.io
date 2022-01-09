window.onscroll = function() {
  myFunction()
};

let navbar = document.getElementById("navbar");
let backButton = document.getElementById("myBtn")
let sticky = navbar.offsetTop;
let audioIcon =  document.querySelector(".audioIcon");

let audio = new Audio("static/audio/music.mp3");
audio.addEventListener('loadeddata', function() {
  audioIcon.classList.value = "audioIcon fas fa-play"
});
audio.addEventListener('ended', function() {
  audioIcon.classList.value = "audioIcon fas fa-play"
  console.log(audioIcon.classList)
});

function myFunction() {
  if (window.pageYOffset >= sticky + 80) {
    navbar.classList.add("sticky")
    backButton.classList.remove("disappear");

  } else {
    navbar.classList.add("sticky");
    backButton.classList.add("disappear");
  }
}

function playMusic() {
  if (audio.paused) {
    audio.play();
    audioIcon.classList.value = "audioIcon fas fa-pause";
  } else {
    audio.pause();
    audioIcon.classList.value = "audioIcon fas fa-play";
  }
}
