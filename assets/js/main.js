// Making Sticky Navigation Bar

window.onscroll = function() {myFunction() , scrollfunction()};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Get The Button

let myscroll = document.getElementById("myscroll");

// When User Scroll Down 20px from the top of the document, show the button


function scrollfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myscroll.style.display = "block";
  } else {
    myscroll.style.display = "none";
  }
}

// When users click on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Preloader

let loader = document.getElementById("preloader");
              
window.addEventListener("load", function(){
    loader.style.display = "none";
})