let items = Array.from(document.querySelectorAll(".slider .slider-item"));
;
let brnNext01 = document.getElementById("btnNext01");
let brnPrev02 = document.getElementById("btnPrev02");

brnNext01.addEventListener('click',e=>{
    items[0].style.transform = "translateX(-100%)";
    items[1].style.transform = "translateX(calc(-100% - .4em))";
});

brnPrev02.addEventListener('click',e=>{
    items[0].style.transform = "translateX(0%)";
    items[1].style.transform = "translateX(0%)";
});