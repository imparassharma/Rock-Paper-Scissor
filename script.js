const mid = document.querySelector(".mid-section");
const play = document.querySelector(".mid-section.play");

const row1 = document.querySelector(".row");

const result = document.getElementById("result");
const score = document.getElementById("score");
let points =0;

const rps = document.querySelectorAll(".rps");

const rule_button = document.querySelector(".button");

/*FUNCTION*/
rps.forEach(function(r){
    r.addEventListener("click",function(e){
        mid.classList.add("hidden");
        play.classList.remove("hidden");
    
        const yourpick = e.currentTarget.className;
        var player = row1.children[0];
        console.log(row1);
        player.className = yourpick;
        player.innerHTML = "<img src=\"images/icon-"+yourpick+".svg\" alt=\"\">";
    
        var computer = row1.children[1];
        const random= ["paper","rock","scissors"] ;
        const random_no =  Math.floor(Math.random()*3);
        console.log(random_no);
        const computerpick = random[random_no];
        computer.className = computerpick;
        computer.innerHTML = "<img src=\"images/icon-rps "+computerpick+".svg\" alt=\"\">"
       
        if(yourpick=="rps rock" && computerpick =="paper")
        {
            result.innerHTML="YOU LOST!";
            points--;
            if(points<0)
            {
                points =0;
            }
            score.innerHTML=points;
        }

        else if(yourpick=="rps rock" && computerpick =="rock")
        {
            result.innerHTML="DRAW!";
        }

        else if(yourpick=="rps rock" && computerpick =="scissors"){
            result.innerHTML="YOU WON!";
            points++;
            score.innerHTML=points;
        }

        else if(yourpick=="rps scissors" && computerpick =="rock")
        {
            result.innerHTML="YOU LOST!";
            points--;
            if(points<0)
            {
                points =0;
            }
            score.innerHTML=points;
        }

        else if(yourpick=="rps scissors" && computerpick =="scissors")
        {
            result.innerHTML="DRAW!";
        }

        else if(yourpick=="rps scissors" && computerpick =="paper"){
            result.innerHTML="YOU WON!";
            points++;
            score.innerHTML=points;
        }

        else if(yourpick=="rps paper" && computerpick =="scissors")
        {
            result.innerHTML="YOU LOST!";
            points--;
            if(points<0)
            {
                points =0;
            }
            score.innerHTML=points;
        }

        else if(yourpick=="rps paper" && computerpick =="paper")
        {
            result.innerHTML="DRAW!";
        }

        else if(yourpick=="rps paper" && computerpick =="rock"){
            result.innerHTML="YOU WON!";
            points++;
            score.innerHTML=points;
        }
        
    
        rule_button.innerHTML="B A C K";
        rule_button.addEventListener("click",function(){
            play.classList.add("hidden");
            mid.classList.remove("hidden");
            rule_button.innerHTML="<a href=\"rules.html\">RULES</a>";
        })  
    })
    
})
