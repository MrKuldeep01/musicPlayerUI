let progress = document.querySelector(".seekBar");
let song = document.querySelector(".song");
let playBnt = document.querySelector(".playBtn >i");
let nextBtn = document.querySelector(".nextBnt");
let preBtn = document.querySelector(".preBnt");

song.onloadmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
    if (playBnt.classList.contains("ri-play-fill")) {
      song.play();

      playBnt.classList.remove("ri-play-fill");
      playBnt.classList.add("ri-pause-mini-fill");
      console.log("paused if ");
    
  } else {
    song.pause();

    playBnt.classList.add("ri-play-fill");
    playBnt.classList.remove("ri-pause-mini-fill");
    console.log("play else");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 100);
}
progress.addEventListener("change",function () {
  song.play();
  song.currentTime = progress.value;
  playBnt.classList.remove("ri-play-fill");
  playBnt.classList.add("ri-pause-mini-fill");
});
