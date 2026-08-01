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

    startCountdown();

    loadTimeline();

    loadLocation();

    console.log("Website Initialized");

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



/*==================================================
    HERO
==================================================*/

function loadHero(){

    heroImage.src=
    WEDDING.hero.image;

    heroImage.alt=
    WEDDING.hero.names;

    heroQuote.textContent=
    WEDDING.hero.quote;

    heroNames.textContent=
    WEDDING.hero.names;

    heroDate.textContent=
    WEDDING.hero.date;

}


/*==================================================
    INVITATION
==================================================*/

function loadInvitation(){

    inviteHeading.innerHTML=
    WEDDING.invitation.heading.replace(/\n/g,"<br>");

    inviteMessage.innerHTML=
    WEDDING.invitation.message.replace(/\n/g,"<br>");

    inviteFamily.innerHTML=
    WEDDING.invitation.family.replace(/\n/g,"<br>");

}


/*==================================================
    COUPLE
==================================================*/

function loadCouple(){

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

}



/*==================================================
    COUNTDOWN
==================================================*/

const dayValue=document.getElementById("dayValue");
const hourValue=document.getElementById("hourValue");
const minuteValue=document.getElementById("minuteValue");
const secondValue=document.getElementById("secondValue");

function startCountdown(){

    const target=new Date(WEDDING.event.date).getTime();

    function update(){

        const now=Date.now();

        const distance=target-now;

        if(distance<=0){

            dayValue.textContent="0";
            hourValue.textContent="0";
            minuteValue.textContent="0";
            secondValue.textContent="0";

            return;

        }

        const day=Math.floor(distance/(1000*60*60*24));

        const hour=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

        const minute=Math.floor((distance%(1000*60*60))/(1000*60));

        const second=Math.floor((distance%(1000*60))/1000);

        dayValue.textContent=day;

        hourValue.textContent=hour.toString().padStart(2,"0");

        minuteValue.textContent=minute.toString().padStart(2,"0");

        secondValue.textContent=second.toString().padStart(2,"0");

    }

    update();

    setInterval(update,1000);

}



/*==================================================
    TIMELINE
==================================================*/

const timelineTitle=document.getElementById("timelineTitle");
const timelineContainer=document.getElementById("timelineContainer");

function loadTimeline(){

    timelineTitle.textContent=WEDDING.timeline.title;

    timelineContainer.innerHTML="";

    WEDDING.timeline.sections.forEach(section=>{

        const card=document.createElement("div");

        card.className="timeline-card";

        let eventsHTML="";

        section.events.forEach(event=>{

            eventsHTML+=`

            <div class="timeline-event">

                <div class="timeline-dot"></div>

                <div class="timeline-event-title">

                    ${event.title}

                </div>

                <div class="timeline-event-time">

                    Vào lúc ${event.time}<br>

                    ${event.weekday}<br>

                    ${event.solarDate}<br>

                    ${event.lunarDate}

                </div>

            </div>

            `;

        });

        card.innerHTML=`

            <div class="timeline-side">

                <div class="timeline-icon">

                    ${section.icon==="ring"?"💍":"🌸"}

                </div>

                <h3>${section.side}</h3>

            </div>

            ${eventsHTML}

        `;

        timelineContainer.appendChild(card);

    });

}



/*==================================================
    LOCATION
==================================================*/

const locationTitle=document.getElementById("locationTitle");
const locationSubtitle=document.getElementById("locationSubtitle");
const locationContainer=document.getElementById("locationContainer");

function loadLocation(){

    locationTitle.textContent=WEDDING.location.title;

    locationSubtitle.textContent=WEDDING.location.subtitle;

    locationContainer.innerHTML="";

    WEDDING.location.locations.forEach(location=>{

        const card=document.createElement("div");

        card.className="location-card";

        card.innerHTML=`

            <div class="location-header">

                <div class="location-header-icon">

                    ${location.icon==="ring"?"💍":"🌸"}

                </div>

                <h3>${location.side}</h3>

            </div>

            <div class="location-venue">

                ${location.venue}

            </div>

            <div class="location-address">

                ${location.address}

            </div>

            <div class="location-map">

                ${location.mapEmbed}

            </div>

            <a

                class="location-button"

                href="${location.mapLink}"

                target="_blank">

                Chỉ đường

            </a>

        `;

        locationContainer.appendChild(card);

    });

}
