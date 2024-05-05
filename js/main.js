// count down timer 

let countDownDate = new Date("July 30,2024 00:00:00").getTime();
let x = setInterval(function(){
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours ;
  document.getElementById("minutes").innerHTML = minutes ;
  document.getElementById("seconds").innerHTML = seconds ;
},1000);

//slider section
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//a popup is open when we access the website
//popup section

window.onload = function() {
  showPopup();
}

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  var closeBtn = document.querySelector(".close-btn");
  closeBtn.onclick = function() {
      popup.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  }
}