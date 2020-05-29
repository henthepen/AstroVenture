let Presi = document.getElementById("Pres");
let PresText = document.getElementById("PText");
let LArrow = document.getElementById("LA");
let RArrow = document.getElementById("RA");
let slides = ["Slide1", "Slide2", "Slide3"];
let i = 0;
let text=[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse felis purus, eleifend sit amet consequat et, mattis eget quam. Praesent pulvinar tellus in ultrices ullamcorper. Ut mattis lacus eget lorem ornare blandit. Integer efficitur efficitur mi, nec pharetra odio. Sed congue suscipit magna sed auctor.",
    "Fusce fringilla ante ac nisl sodales, sit amet rutrum tellus pulvinar. In mattis sollicitudin massa, elementum rhoncus leo iaculis eget. In tellus dui, convallis pulvinar cursus eu, aliquam non libero. Etiam sit amet erat a ipsum sollicitudin faucibus. Sed eu nulla hendrerit, efficitur ipsum porttitor, vehicula tortor.",
    "Curabitur hendrerit et nunc eu volutpat. Donec at sodales ligula. Nullam condimentum feugiat gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam iaculis dapibus ex. Donec eget mollis nulla. Vestibulum mattis sem vel massa bibendum aliquet. Morbi lacinia quam leo, vel iaculis erat euismod sit amet.",
]
LArrow.addEventListener('click', function(){
    Presi.classList.remove(slides[i]);
    i--;
    if (i < 0){
        i = 2;
    }
    Presi.classList.add(slides[i]);
    PresText.innerHTML = text[i];
})

RArrow.addEventListener('click', function(){
    Presi.classList.remove(slides[i]);
    i++;
    if (i > 2){
        i = 0;
    }
    Presi.classList.add(slides[i]);
    PresText.innerHTML = text[i];

})


let Fold = document.getElementsByClassName("Fold");

for (let i = 0; i < Fold.length; i++){
    Fold[i].addEventListener('click', function(){
        let c = Fold[i].children;
        c[1].classList.toggle("hidden");
        Fold[i].classList.toggle("NewFold");
    })
}

let Loading = document.getElementById("LWheel");
let TML = document.getElementsByClassName("TopMenuLink");
for (let i = 2; i < TML.length - 1; i++){
    TML[i].addEventListener('click', function(){
        setTimeout(function(){
            Loading.classList.remove("hidden");
        }, 500);
        setTimeout(function(){
            window.location.href = "intro.html"
        }, Math.random() * 3000 + 3000);
    })
}

let SubButton = document.getElementById("SubBut")
let Form = document.getElementsByClassName("Form");
let TYT = document.getElementById("TYMessage");
let FormButt = document.getElementById("FormButton");
let FName = document.getElementById("fname");
let LName = document.getElementById("lname");
let Email = document.getElementById("email");
let Problem = document.getElementById("problem");

SubButton.addEventListener('click', function(){
    Form[0].classList.add("hidden");
    FormButt.classList.remove("hidden");
    TYT.classList.remove("hidden");
})

FormButt.addEventListener('click', function(){
    Form[0].classList.remove("hidden");
    FormButt.classList.add("hidden");
    TYT.classList.add("hidden");
    FName.value = "John";
    LName.value = "Doe";
    Email.value = "123@example.com";
    Problem.value = "Check out our \"Location\" on Google Maps. It might have an Easter Egg.";
})


let TourThings = document.getElementsByClassName("TourThing");
let TTI = document.getElementsByClassName("TourThingImage")
let TTD = document.getElementsByClassName("TourThingImageDiv");
let TTR = document.getElementsByClassName("TourThingRow");
let shade = document.getElementsByClassName("Shade");
let TTHeader = document.getElementsByClassName("TourThingHeader");
let TourSec = document.getElementById("TourSec");


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
        TourSec.style.height = "90vh";
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
        TourSec.style.height = "60vh";
    })
}