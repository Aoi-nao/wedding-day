/*==================================================
    Wedding Website
    Script
==================================================*/

"use strict";

/*==================================================
    ELEMENTS
==================================================*/

const opening = document.getElementById("opening");
const openingTitle = document.getElementById("openingTitle");
const openingNames = document.getElementById("openingNames");
const openingDate = document.getElementById("openingDate");
const openingButton = document.getElementById("openingButton");

const hero = document.querySelector(".hero");
const heroQuote = document.getElementById("heroQuote");
const heroNames = document.getElementById("heroNames");
const heroDate = document.getElementById("heroDate");

const leftRole = document.getElementById("leftRole");
const leftName = document.getElementById("leftName");
const leftImage = document.getElementById("leftImage");

const rightRole = document.getElementById("rightRole");
const rightName = document.getElementById("rightName");
const rightImage = document.getElementById("rightImage");

const music = document.getElementById("bgMusic");
const musicWrapper = document.getElementById("musicWrapper");
const musicButton = document.getElementById("musicButton");

/*==================================================
    OPENING
==================================================*/

openingTitle.textContent =
WEDDING.opening.title;

openingButton.textContent =
WEDDING.opening.buttonText;

openingDate.textContent =
WEDDING.hero.date;

if(WEDDING.opening.showCoupleNames){

    openingNames.innerHTML =

        WEDDING.couple.bride.name +

        "<br>&<br>" +

        WEDDING.couple.groom.name;

}else{

    openingNames.innerHTML = "";

}

/*==================================================
    HERO
==================================================*/

heroQuote.textContent =
WEDDING.hero.quote;

heroNames.textContent =

WEDDING.couple.bride.name +

" & " +

WEDDING.couple.groom.name;

heroDate.textContent =
WEDDING.hero.date;

/*==================================================
    BACKGROUND
==================================================*/

opening.style.backgroundImage =

`linear-gradient(rgba(248,245,241,.70),rgba(248,245,241,.70)),url("${WEDDING.opening.background}")`;

hero.style.backgroundImage =

`linear-gradient(rgba(248,245,241,.82),rgba(248,245,241,.82)),url("${WEDDING.hero.background}")`;
/*==================================================
    COUPLE
==================================================*/

leftRole.textContent =
WEDDING.couple.bride.role;

leftName.textContent =
WEDDING.couple.bride.name;

leftImage.src =
WEDDING.couple.bride.image;

leftImage.alt =
WEDDING.couple.bride.name;



rightRole.textContent =
WEDDING.couple.groom.role;

rightName.textContent =
WEDDING.couple.groom.name;

rightImage.src =
WEDDING.couple.groom.image;

rightImage.alt =
WEDDING.couple.groom.name;



/*==================================================
    MUSIC
==================================================*/

music.src =
WEDDING.music.src;

music.loop =
WEDDING.music.loop;

musicButton.textContent =
WEDDING.music.iconPlay;



let playing = false;



function playMusic(){

    music.play();

    playing = true;

    musicButton.textContent =
    WEDDING.music.iconPause;

    musicWrapper.classList.add("playing");

}



function pauseMusic(){

    music.pause();

    playing = false;

    musicButton.textContent =
    WEDDING.music.iconPlay;

    musicWrapper.classList.remove("playing");

}



musicButton.addEventListener("click",()=>{

    if(playing){

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

    if(WEDDING.music.autoplay){

        playMusic();

    }

});
/*==================================================
    TIMELINE
==================================================*/

const timelineList =
document.getElementById("timelineList");

if(
    timelineList &&
    Array.isArray(WEDDING.timeline)
){

    WEDDING.timeline.forEach(item=>{

        const card =
        document.createElement("div");

        card.className =
        "timeline-item";

        card.innerHTML = `

            <h3>${item.time}</h3>

            <h4>${item.title}</h4>

            <p>${item.description}</p>

        `;

        timelineList.appendChild(card);

    });

}



/*==================================================
    GALLERY
==================================================*/

const galleryGrid =
document.getElementById("galleryGrid");

if(
    galleryGrid &&
    Array.isArray(WEDDING.gallery)
){

    WEDDING.gallery.forEach(src=>{

        const img =
        document.createElement("img");

        img.src = src;

        img.alt = "";

        img.loading = "lazy";

        galleryGrid.appendChild(img);

    });

}



/*==================================================
    LOCATION
==================================================*/

if(WEDDING.location){

    document.getElementById("locationVenue").textContent =
    WEDDING.location.venue || "";

    document.getElementById("locationAddress").textContent =
    WEDDING.location.address || "";

    const map =
    document.getElementById("locationMap");

    if(WEDDING.location.map){

        map.href =
        WEDDING.location.map;

        map.textContent =
        "XEM BẢN ĐỒ";

    }else{

        map.style.display =
        "none";

    }

}



/*==================================================
    RSVP
==================================================*/

const rsvp =
document.getElementById("rsvp");

const rsvpButton =
document.getElementById("rsvpButton");

if(WEDDING.rsvp.enabled){

    rsvpButton.href =
    WEDDING.rsvp.url;

    rsvpButton.textContent =
    "XÁC NHẬN THAM DỰ";

}else{

    rsvp.style.display =
    "none";

}



/*==================================================
    DEFAULT SECTION TITLES
==================================================*/

const timelineTitle =
document.getElementById("timelineTitle");

if(timelineTitle){

    timelineTitle.textContent =
    "LỊCH TRÌNH";

}

const locationTitle =
document.getElementById("locationTitle");

if(locationTitle){

    locationTitle.textContent =
    "ĐỊA ĐIỂM";

}

const galleryTitle =
document.getElementById("galleryTitle");

if(galleryTitle){

    galleryTitle.textContent =
    "THƯ VIỆN ẢNH";

}

const rsvpTitle =
document.getElementById("rsvpTitle");

if(rsvpTitle){

    rsvpTitle.textContent =
    "RSVP";

}

console.log("Wedding website loaded.");
