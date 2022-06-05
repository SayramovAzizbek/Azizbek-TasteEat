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
const footerInputForm = document.querySelector('.footer-input-form')
const nameInput = document.querySelector('.NameInput')
const emailInput = document.querySelector('.EmailInput')
const numberInput = document.querySelector('.NumberInput')
const phoneNumberInput = document.querySelector('.PhoneNumberInput')
const reserveTimeInput = document.querySelector('.ReserveTimeInput')
const FormInput = document.querySelector('.formInput')

InputFormBtn.addEventListener('click', () => {
    const NameInput = nameInput.value
    const EmailInput = emailInput.value
    const ReserveTimeInput = reserveTimeInput.value
    const PhoneNumberInput = phoneNumberInput.value
    const NumberInput = numberInput.value
  if( NameInput && EmailInput && PhoneNumberInput && ReserveTimeInput && NumberInput != '') {
    InputFormBtn.innerHTML= "You Booked"
    alert("You Booked a Table")
  }else{
    alert("If you want to reserve fill out the form till the end")
  }
})

FooterBtn.addEventListener('click', () => {
  const InputForm = footerInputForm.value
  if(InputForm != '') {
    FooterBtn.innerHTML= "Subcribed"
    alert("You subscribed")
  }
  else{
    alert("Enter Your Email For Subscribe")
  }
})
