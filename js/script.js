"use strict";

/*==================================================
    ELEMENTS
==================================================*/

const opening=document.getElementById("opening");

const openingTitle=document.getElementById("openingTitle");
const openingNames=document.getElementById("openingNames");
const openingDate=document.getElementById("openingDate");
const openingButton=document.getElementById("openingButton");

const inviteHeading=document.getElementById("inviteHeading");
const inviteMessage=document.getElementById("inviteMessage");
const inviteFamily=document.getElementById("inviteFamily");

const leftRole=document.getElementById("leftRole");
const leftName=document.getElementById("leftName");
const leftImage=document.getElementById("leftImage");

const rightRole=document.getElementById("rightRole");
const rightName=document.getElementById("rightName");
const rightImage=document.getElementById("rightImage");

const music=document.getElementById("bgMusic");
const musicWrapper=document.getElementById("musicWrapper");
const musicButton=document.getElementById("musicButton");



/*==================================================
    OPENING
==================================================*/

openingTitle.textContent=
WEDDING.opening.title;

openingDate.textContent=
WEDDING.hero.date;

openingButton.textContent=
WEDDING.opening.buttonText;

if(WEDDING.opening.showCoupleNames){

    openingNames.innerHTML=

        WEDDING.couple.bride.name+

        "<br>&<br>"+

        WEDDING.couple.groom.name;

}else{

    openingNames.innerHTML="";

}



/*==================================================
    INVITATION
==================================================*/

inviteHeading.innerHTML=

WEDDING.invitation.heading.replace(/\n/g,"<br>");

inviteMessage.innerHTML=

WEDDING.invitation.message.replace(/\n/g,"<br>");

inviteFamily.innerHTML=

WEDDING.invitation.family.replace(/\n/g,"<br>");



/*==================================================
    COUPLE
==================================================*/

leftRole.textContent=
WEDDING.couple.bride.role;

leftName.textContent=
WEDDING.couple.bride.name;

leftImage.src=
WEDDING.couple.bride.image;

leftImage.alt=
WEDDING.couple.bride.name;



rightRole.textContent=
WEDDING.couple.groom.role;

rightName.textContent=
WEDDING.couple.groom.name;

rightImage.src=
WEDDING.couple.groom.image;

rightImage.alt=
WEDDING.couple.groom.name;
/*==================================================
    BACKGROUND
==================================================*/

opening.style.backgroundImage=

`linear-gradient(rgba(248,245,241,.72),rgba(248,245,241,.72)),url("${WEDDING.opening.background}")`;



/*==================================================
    MUSIC
==================================================*/

music.src=
WEDDING.music.src;

music.loop=
WEDDING.music.loop;

musicButton.textContent=
WEDDING.music.iconPlay;

let isPlaying=false;

function playMusic(){

    music.play().catch(()=>{});

    isPlaying=true;

    musicButton.textContent=
    WEDDING.music.iconPause;

    musicWrapper.classList.add("playing");

}

function pauseMusic(){

    music.pause();

    isPlaying=false;

    musicButton.textContent=
    WEDDING.music.iconPlay;

    musicWrapper.classList.remove("playing");

}

musicButton.addEventListener("click",()=>{

    if(isPlaying){

        pauseMusic();

    }else{

        playMusic();

    }

});



/*==================================================
    OPEN INVITATION
==================================================*/

openingButton.addEventListener("click",()=>{

    opening.classList.add("hide");

    musicWrapper.classList.add("show");

    playMusic();

});



/*==================================================
    SECTION TITLES
==================================================*/

document.getElementById("timelineTitle").textContent=
"LỊCH TRÌNH";

document.getElementById("locationTitle").textContent=
"ĐỊA ĐIỂM";

document.getElementById("galleryTitle").textContent=
"KHOẢNH KHẮC";

document.getElementById("rsvpTitle").textContent=
"XÁC NHẬN THAM DỰ";
/*==================================================
    TIMELINE
==================================================*/

const timelineList=document.getElementById("timelineList");

if(
    timelineList &&
    Array.isArray(WEDDING.timeline) &&
    WEDDING.timeline.length
){

    WEDDING.timeline.forEach(item=>{

        const card=document.createElement("div");

        card.className="timeline-item";

        card.innerHTML=`

            <h3>${item.time}</h3>

            <h4>${item.title}</h4>

            <p>${item.description}</p>

        `;

        timelineList.appendChild(card);

    });

}else{

    document.getElementById("timeline").style.display="none";

}



/*==================================================
    LOCATION
==================================================*/

if(
    WEDDING.location &&
    WEDDING.location.venue
){

    document.getElementById("locationVenue").textContent=
    WEDDING.location.venue;

    document.getElementById("locationAddress").textContent=
    WEDDING.location.address;

    if(WEDDING.location.map){

        const map=document.getElementById("locationMap");

        map.href=WEDDING.location.map;

        map.textContent="XEM BẢN ĐỒ";

    }

}else{

    document.getElementById("location").style.display="none";

}



/*==================================================
    GALLERY
==================================================*/

const galleryGrid=document.getElementById("galleryGrid");

if(
    galleryGrid &&
    Array.isArray(WEDDING.gallery) &&
    WEDDING.gallery.length
){

    WEDDING.gallery.forEach(src=>{

        const img=document.createElement("img");

        img.src=src;

        img.loading="lazy";

        img.alt="";

        galleryGrid.appendChild(img);

    });

}else{

    document.getElementById("gallery").style.display="none";

}



/*==================================================
    RSVP
==================================================*/

if(
    WEDDING.rsvp &&
    WEDDING.rsvp.enabled
){

    const btn=document.getElementById("rsvpButton");

    btn.href=WEDDING.rsvp.url;

    btn.textContent="XÁC NHẬN THAM DỰ";

}else{

    document.getElementById("rsvp").style.display="none";

}



/*==================================================
    READY
==================================================*/

console.log("Wedding Website Ready");
