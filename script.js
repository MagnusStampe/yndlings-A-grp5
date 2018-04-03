//##########
//Variabler
//##########

//##########
//Start
//##########

document.addEventListener("DOMContentLoaded", start);

function start() {
    getSmiley("haha");
    getSmiley("love");
    getSmiley("wow");
    getSmiley("money");
    getUr();
}

//##########
//Burger menu
//##########


function toggleMenu() {
    document.querySelector("#burger").classList.toggle("change");
    document.querySelector("#nav_content").classList.toggle("show");
    document.querySelector("#close_burger").classList.toggle("show");

    console.log("toggleMenu()")
}

document.querySelector("#burger").addEventListener("click", toggleMenu);
document.querySelector("#close_burger").addEventListener("click", toggleMenu);

//##########
//Hvornar daekkes
//##########

//***** Indsæt og animer ur *****

async function getUr() {
    //Source
    let urSvg = await fetch("img/ur.svg");
    //SVG i tekstform
    let urText = await urSvg.text();

    console.log("getUr");
    document.querySelector("#hvornar .content").innerHTML = urText;
}

//***** Ændring af .content *****

//Fjern tekst og lav GIF igen, hvis der er tekst
document.querySelector("#hvornar .content").addEventListener("click", getUr);

//Erstat GIF med tekst
document.querySelector("#hvornar .mister").addEventListener("click", misterTxt);
document.querySelector("#hvornar .taber").addEventListener("click", taberTxt);
document.querySelector("#hvornar .virker_ikke").addEventListener("click", ikkeVirkerTxt);
document.querySelector("#hvornar .spilder").addEventListener("click", spilderTxt);
document.querySelector("#hvornar .med_mindre").addEventListener("click", medMindreTxt);

function misterTxt() {
    document.querySelector("#hvornar .content").innerHTML = "<p>Forsikringen dækker, hvis din mobil bliver stjålet. Både hvis den bliver stjålet fra din taske, og hvis en tyv tager den under et indbrud i dit hjem.<br>Vær opmærksom på, at forsikringen ikke dækker, hvis du har mistet din mobil, fordi du har glemt eller tabt den. </p>";
    hvornarTxtShown = true;
}

function taberTxt() {
    document.querySelector("#hvornar .content").innerHTML = "<p> Tekst til taber </p>";
    hvornarTxtShown = true;
}

function ikkeVirkerTxt() {
    document.querySelector("#hvornar .content").innerHTML = "<p> Tekst til ikke virker </p>";
    hvornarTxtShown = true;
}

function spilderTxt() {
    document.querySelector("#hvornar .content").innerHTML = "<p> Tekst til spilder </p>";
    hvornarTxtShown = true;
}

function medMindreTxt() {
    document.querySelector("#hvornar .content").innerHTML = "<p> Tekst til med mindre </p>";
    hvornarTxtShown = true;
}

//##########
//Smileys
//##########

async function getSmiley(emote) {
    let smileySvg = await fetch("img/" + emote + ".svg");
    let smileyText = await smileySvg.text();
    let smileyID = "#" + emote + "_container";

    console.log(smileyID);
    document.querySelector(smileyID).innerHTML = smileyText;
}
