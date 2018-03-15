document.addEventListener("DOMContentLoaded", start);


function start() {
    getSmiley("haha");
    getSmiley("love");
    getSmiley("wow");
    getSmiley("money");
}

async function getSmiley(emote) {
    let smileySvg = await fetch("/img/" + emote + ".svg");
    let smileyText = await smileySvg.text();
    let smileyID = "#" + emote + "_container";

    console.log(smileyID);
    document.querySelector(smileyID).innerHTML = smileyText;
}

function toggleMenu() {
    document.querySelector("#burger").classList.toggle("change");
    document.querySelector("#nav_content").classList.toggle("show");
}

document.querySelector("#burger").addEventListener("click", toggleMenu);
