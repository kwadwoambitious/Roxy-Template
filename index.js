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
    const progress1 = document.querySelector('.progress1');
    const progress2 = document.querySelector('.progress2');
    const progress3 = document.querySelector('.progress3');
    const progress4 = document.querySelector('.progress4');
    const progress5 = document.querySelector('.progress5');
    const progress6 = document.querySelector('.progress6');
    if(scroll > 1000){
        progress1.classList.add("progress-length1");
        progress2.classList.add("progress-length2");
        progress3.classList.add("progress-length3");
        progress4.classList.add("progress-length4");
        progress5.classList.add("progress-length5");
        progress6.classList.add("progress-length6");
    }
}
function backToTop(){
    const scrollLength = window.scrollY;
    const topButton = document.querySelector('.top-button');
    if(scrollLength > 100){
        topButton.classList.add('active');
    }
    else{
        topButton.classList.remove('active');
    }
}