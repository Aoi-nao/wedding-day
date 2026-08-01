/*==================================================
    WEDDING WEBSITE
==================================================*/

console.log("Wedding Website Ready");

/*==================================================
    ELEMENTS
==================================================*/

// Opening
const opening=document.getElementById("opening");
const openingBackground=document.getElementById("openingBackground");
const openingTitle=document.getElementById("openingTitle");
const openingNames=document.getElementById("openingNames");
const openingDate=document.getElementById("openingDate");
const openingHeading=document.getElementById("openingHeading");
const openingMessage=document.getElementById("openingMessage");
const openingFamily=document.getElementById("openingFamily");
const openingButton=document.getElementById("openingButton");

// Website
const website=document.getElementById("website");

// Hero
const heroImage=document.getElementById("heroImage");
const heroQuote=document.getElementById("heroQuote");
const heroNames=document.getElementById("heroNames");
const heroDate=document.getElementById("heroDate");

// Invitation
const inviteHeading=document.getElementById("inviteHeading");
const inviteMessage=document.getElementById("inviteMessage");
const inviteFamily=document.getElementById("inviteFamily");

// Couple
const leftRole=document.getElementById("leftRole");
const leftName=document.getElementById("leftName");
const leftImage=document.getElementById("leftImage");

const rightRole=document.getElementById("rightRole");
const rightName=document.getElementById("rightName");
const rightImage=document.getElementById("rightImage");

// Music
const bgMusic=document.getElementById("bgMusic");
const musicButton=document.getElementById("musicButton");

/*==================================================
    INIT
==================================================*/

function initWebsite(){

    loadOpening();

    loadHero();

    loadInvitation();

    loadCouple();

}

document.addEventListener("DOMContentLoaded",initWebsite);

/*==================================================
    OPENING
==================================================*/

function loadOpening(){

    openingBackground.src=WEDDING.opening.background;

    openingTitle.textContent=WEDDING.opening.title;

    openingNames.textContent=WEDDING.opening.names;

    openingDate.textContent=WEDDING.opening.date;

    openingHeading.innerHTML=
    WEDDING.invitation.heading.replace(/\n/g,"<br>");

    openingMessage.innerHTML=
    WEDDING.invitation.message.replace(/\n/g,"<br>");

    openingFamily.innerHTML=
    WEDDING.invitation.family.replace(/\n/g,"<br>");

}

openingButton.addEventListener("click",()=>{

    opening.style.transition="opacity .9s ease";

    opening.style.opacity="0";

    website.style.display="block";

    bgMusic.play().catch(()=>{});

    musicButton.classList.add("playing");

    setTimeout(()=>{

        opening.style.display="none";

    },900);

});

/*==================================================
    MUSIC
==================================================*/

musicButton.addEventListener("click",()=>{

    if(bgMusic.paused){

        bgMusic.play();

        musicButton.classList.add("playing");

    }else{

        bgMusic.pause();

        musicButton.classList.remove("playing");

    }

});
