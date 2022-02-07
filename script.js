const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const mid = document.querySelector(".mid-section");
const play = document.querySelector(".mid-section.play");

const row1 = document.querySelector(".row1");

rock.addEventListener("click",function(e){
    mid.classList.add("hidden");
    play.classList.remove("hidden");

    const yourpick = e.currentTarget.className;
    var row = row1.children[0];
    row.className = yourpick;
    row.innerHTML = "<img src=\"images/icon-"+yourpick+".svg\" alt=\"\">"
})

