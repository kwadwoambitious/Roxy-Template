const testimonials = document.getElementById('testimonials');
const control1 = document.getElementById('control1');
const control2 = document.getElementById('control2');
const control3 = document.getElementById('control3');

control1.onclick = function(){
  testimonials.style.transform = "translateX(870px)";
  control1.classList.add("active");
  control2.classList.remove("active");
  control3.classList.remove("active");
}

control2.onclick = function(){
  testimonials.style.transform = "translateX(0px)";
  control1.classList.remove("active");
  control2.classList.add("active");
  control3.classList.remove("active");
}

control3.onclick = function(){
  testimonials.style.transform = "translateX(-870px)";
  control1.classList.remove("active");
  control2.classList.remove("active");
  control3.classList.add("active");
}

const img = document.querySelector('#img');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#close');
img.addEventListener('click', () => {
   modal.style.visibility = 'visible';
})

closeModal.addEventListener('click', () => {
  modal.style.visibility = 'collapse';
})