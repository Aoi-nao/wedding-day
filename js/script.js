const openBtn =
document.getElementById("openBtn");


const opening =
document.getElementById("opening");


const music =
document.getElementById("music");


const musicBox =
document.getElementById("musicBox");


const musicBtn =
document.getElementById("musicBtn");



let playing=false;





openBtn.onclick=function(){


opening.classList.add("hide");



music.play();



musicBox.classList.add("show");



musicBox.classList.add("playing");



musicBtn.innerHTML="♫";



playing=true;


}





musicBtn.onclick=function(){


if(playing){


music.pause();


musicBtn.innerHTML="🎵";


musicBox.classList.remove("playing");



}

else{


music.play();


musicBtn.innerHTML="♫";


musicBox.classList.add("playing");



}


playing=!playing;


}
