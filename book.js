let Loading = document.getElementById("LWheel");
let TML = document.getElementsByClassName("TopMenuLink");
for (let i = 0; i < TML.length; i++){
    TML[i].addEventListener('click', function(){
        if (i != 1){
            setTimeout(function(){
                Loading.classList.remove("hidden");
            }, 500);
            setTimeout(function(){
                if (i == 0 || i == 3){
                    window.location.href = "index.html";
                } else if (i == 2){
                    window.location.href = "intro.html";
                }
            }, Math.random() * 3000 + 3000);
        }
    })
}

let TourThings = document.getElementsByClassName("TourThing");
let TTI = document.getElementsByClassName("TourThingImage")
let TTD = document.getElementsByClassName("TourThingImageDiv");
let TTR = document.getElementsByClassName("TourThingRow");
let shade = document.getElementsByClassName("Shade");
let TTHeader = document.getElementsByClassName("TourThingHeader");
for (let i = 0; i < TourThings.length; i++){
    TourThings[i].addEventListener('mouseover', function(){
        shade[0].classList.remove("hidden");
        TTR[i].style.display = "flex";
        TTD[i].style.width = "50%";
        if (i == 0){
            TTI[i].src = "Palais2.jpg";
        }
        if (i == 1){
            TTI[i].src = "MuseumThing2.jpg";
        }
        if (i == 2){
            TTI[i].src = "Memorial2.jpg";
        }
        TTHeader[i].style.fontSize = "2rem";
    })
    TourThings[i].addEventListener('mouseout', function(){
        shade[0].classList.add("hidden");
        TTR[i].style.display = "none";
        TTD[i].style.width = "100%";
        if (i == 0){
            TTI[i].src = "Palais1.jpg";
        }
        if (i == 1){
            TTI[i].src = "MuseumThing.jpg";
        }
        if (i == 2){
            TTI[i].src = "Memorial1.jpg";
        }
        TTHeader[i].style.fontSize = "1.4rem";
    })
}