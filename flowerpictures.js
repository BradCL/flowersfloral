const toggleMenu = document.querySelector(".menuListSmall")
const mybutton = document.getElementById("myBtn");
let total = 0;

document.querySelector('.arrowlf').addEventListener('click', goRight)
document.querySelector('.arrowrh').addEventListener('click', goLeft)
document.querySelector(".toggleMenu").addEventListener('click', menuOpen)
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
function menuOpen(){
    toggleMenu.classList.toggle("hidden")
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

if (window.matchMedia("(max-width: 750px)").matches){
    hasRefreshed = false
    document.querySelector("#thumbnail3").style.display = "none";
    document.querySelector("#thumbnail4").style.display = "none";
    document.querySelector('.arrowlf').addEventListener('click', altScrollThumbnails)
    document.querySelector('.arrowrh').addEventListener('click', altScrollThumbnails)

    
    function goRight(){
        total = total + 1;
    }
    function goLeft(){
        total = total - 1;
    }
    function altScrollThumbnails(){
        if (total <= 0){
            total = 0;
            document.querySelector("#thumbnail1").style.display = "inline";
            document.querySelector("#thumbnail2").style.display = "inline";
            document.querySelector("#thumbnail3").style.display = "none";
            document.querySelector("#thumbnail4").style.display = "none";
            document.querySelector("#thumbnail5").style.display = "none";
            document.querySelector("#thumbnail6").style.display = "none";     
            document.querySelector("#thumbnail7").style.display = "none";
            document.querySelector("#thumbnail8").style.display = "none";
        }else if (total === 1){
            document.querySelector("#thumbnail1").style.display = "none";
            document.querySelector("#thumbnail2").style.display = "none";
            document.querySelector("#thumbnail3").style.display = "inline";
            document.querySelector("#thumbnail4").style.display = "inline";
            document.querySelector("#thumbnail5").style.display = "none";
            document.querySelector("#thumbnail6").style.display = "none";     
            document.querySelector("#thumbnail7").style.display = "none";
            document.querySelector("#thumbnail8").style.display = "none";
        }else if (total === 2){
            document.querySelector("#thumbnail1").style.display = "none";
            document.querySelector("#thumbnail2").style.display = "none";
            document.querySelector("#thumbnail3").style.display = "none";
            document.querySelector("#thumbnail4").style.display = "none";
            document.querySelector("#thumbnail5").style.display = "inline";
            document.querySelector("#thumbnail6").style.display = "inline";     
            document.querySelector("#thumbnail7").style.display = "none";
            document.querySelector("#thumbnail8").style.display = "none";
        }else if (total >= 3){
            total =3;
            document.querySelector("#thumbnail1").style.display = "none";
            document.querySelector("#thumbnail2").style.display = "none";
            document.querySelector("#thumbnail3").style.display = "none";
            document.querySelector("#thumbnail4").style.display = "none";
            document.querySelector("#thumbnail5").style.display = "none";
            document.querySelector("#thumbnail6").style.display = "none";     
            document.querySelector("#thumbnail7").style.display = "inline";
            document.querySelector("#thumbnail8").style.display = "inline";
        }
    }
} else {
    document.querySelector('.arrowlf').addEventListener('click', goRight)
    document.querySelector('.arrowrh').addEventListener('click', goLeft)
    document.querySelector('.arrowlf').addEventListener('click', scrollThumbnails)
    document.querySelector('.arrowrh').addEventListener('click', scrollThumbnails)


    function scrollThumbnails (){
        if (total <= 0){
            total = 0;
            document.querySelector("#thumbnail1").classList.remove('hidden');
            document.querySelector("#thumbnail2").classList.remove('hidden');     
            document.querySelector("#thumbnail3").classList.remove('hidden');
            document.querySelector("#thumbnail4").classList.remove('hidden');
            document.querySelector("#thumbnail5").classList.add('hidden');
            document.querySelector("#thumbnail6").classList.add('hidden');     
            document.querySelector("#thumbnail7").classList.add('hidden');
            document.querySelector("#thumbnail8").classList.add('hidden');
        }else if (total >= 1){
            total = 1;
            document.querySelector("#thumbnail1").classList.add('hidden');
            document.querySelector("#thumbnail2").classList.add('hidden');
            document.querySelector("#thumbnail3").classList.add('hidden');
            document.querySelector("#thumbnail4").classList.add('hidden');
            document.querySelector("#thumbnail5").classList.remove('hidden');
            document.querySelector("#thumbnail6").classList.remove('hidden');     
            document.querySelector("#thumbnail7").classList.remove('hidden');
            document.querySelector("#thumbnail8").classList.remove('hidden');
        }
    }
}

