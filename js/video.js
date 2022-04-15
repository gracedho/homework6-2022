var video = document.querySelector('video');
video.load();

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const slowBtn = document.querySelector('#slower');
const fastBtn = document.querySelector('#faster');
const skipBtn = document.querySelector('#skip');
const muteBtn = document.querySelector('#mute');
const slider = document.querySelector('#slider');
const vintageBtn = document.querySelector('#vintage');
const origBtn = document.querySelector('#orig');

const player = document.querySelector('#player1');

document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("slower").addEventListener("click", slow);
document.getElementById("faster").addEventListener("click", fast);
document.getElementById("mute").addEventListener("click", mute);
document.getElementById("skip").addEventListener("click", skip);
document.getElementById("slider").addEventListener("change", volume);
document.getElementById("vintage").addEventListener("click", oldSchool);
document.getElementById("orig").addEventListener("click", original);


function play () {
	player.play();
}

function pause () {
	player.pause();
  };

function slow () {
	video.playbackRate -= 0.05;
  console.log(video.playbackRate);
};

function fast () {
	video.playbackRate += 0.05;
	console.log(video.playbackRate);
}

function mute () {
  if (video.muted == true){
		video.muted = false;
		muteBtn.innerHTML = "Mute";
	}
  else {
    video.muted = true; 
	  muteBtn.innerHTML = "Unmute";
  }
}

function skip () {
  if (video.duration < (video.currentTime + 15)) {
	  video.currentTime=0;
  }
  else {
    video.currentTime += 15;
  }
  console.log(video.currentTime);
}

function volume () {
	video.volume = (slider.value / 100);
  document.querySelector('#volume').innerHTML = slider.value + "%";
}

function oldSchool () {
	video.classList.add("oldSchool");
}

function original () {
	video.classList.remove("oldSchool");
}