var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  autoplay:true,
  clickable: true,
  // spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const InputFormBtn = document.querySelector('.input-form-btn')
const FooterBtn = document.querySelector('.footer-input-btn')
// const footerInputForm = document.querySelector('.footer-input-form')

InputFormBtn.addEventListener('click', () => {
  InputFormBtn.innerHTML= "You Booked"
    alert("You Booked a Table")
})

FooterBtn.addEventListener('click', () => {
  FooterBtn.innerHTML= "Subcribed"
  alert("You subscribed \n\Thank you for supporting")
})
