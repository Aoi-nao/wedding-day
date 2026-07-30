/*======================================
    CHUN & DAM
    Wedding Website
    Script
======================================*/

const $ = (id) => document.getElementById(id);



/*==============================
    OPENING
==============================*/

$("openingTitle").textContent =
WEDDING.opening.title;

$("openingButton").textContent =
WEDDING.opening.buttonText;



if(WEDDING.opening.showCoupleNames){

    $("openingNames").innerHTML =

        `${WEDDING.couple.bride.name}
        <br>
        &
        <br>
        ${WEDDING.couple.groom.name}`;

}



$("openingDate").textContent =
WEDDING.hero.date;



/*==============================
    HERO
==============================*/

$("heroQuote").textContent =
WEDDING.hero.quote;

$("heroNames").textContent =
`${WEDDING.couple.bride.name} & ${WEDDING.couple.groom.name}`;

$("heroDate").textContent =
WEDDING.hero.date;



/*==============================
    COUPLE
==============================*/

$("leftRole").textContent =
WEDDING.couple.bride.role;

$("leftName").textContent =
WEDDING.couple.bride.name;

$("leftImage").src =
WEDDING.couple.bride.image;



$("rightRole").textContent =
WEDDING.couple.groom.role;

$("rightName").textContent =
WEDDING.couple.groom.name;

$("rightImage").src =
WEDDING.couple.groom.image;



/*==============================
    MUSIC
==============================*/

const music =
$("bgMusic");

music.src =
WEDDING.music.src;

music.loop =
WEDDING.music.loop;



let playing = false;



$("openButton").onclick = ()=>{

    $("opening").classList.add("hide");

    music.play();

    $("musicWrapper").classList.add("show");

    $("musicButton").textContent =
    WEDDING.music.iconPlay;

    $("musicWrapper").classList.add("playing");

    playing = true;

};



$("musicButton").onclick = ()=>{

    if(playing){

        music.pause();

        $("musicButton").textContent =
        WEDDING.music.iconPause;

        $("musicWrapper").classList.remove("playing");

    }

    else{

        music.play();

        $("musicButton").textContent =
        WEDDING.music.iconPlay;

        $("musicWrapper").classList.add("playing");

    }

    playing = !playing;

};
