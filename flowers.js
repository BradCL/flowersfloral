const mybutton = document.getElementById("myBtn");
const toggleMenu = document.querySelector(".menuListSmall")
let total = 0;

document.querySelector(".toggleMenu").addEventListener('click', menuOpen)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
function goRight(){
        total = total + 1;
    }
function goLeft(){
        total = total - 1;
    }
function menuOpen(){
    toggleMenu.classList.toggle("hidden")
    }

