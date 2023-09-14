const mainMenu = document.querySelector("ul");
const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    mainMenu.classList.toggle("active");
});
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    mainMenu.classList.remove("active"); 
}));


function getScrollPosition(){
    const scroll = window.scrollY;
    var progress1 = document.querySelector('.progress1');
    var progress2 = document.querySelector('.progress2');
    var progress3 = document.querySelector('.progress3');
    var progress4 = document.querySelector('.progress4');
    var progress5 = document.querySelector('.progress5');
    var progress6 = document.querySelector('.progress6');
    if(scroll > 1000){
        progress1.classList.add("progress-length1");
        progress2.classList.add("progress-length2");
        progress3.classList.add("progress-length3");
        progress4.classList.add("progress-length4");
        progress5.classList.add("progress-length5");
        progress6.classList.add("progress-length6");
    }
}