const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

document.addEventListener('DOMContentLoaded', () => {

  const radios = [
    document.getElementById('slide1'),
    document.getElementById('slide2'),
    document.getElementById('slide3'),
    document.getElementById('slide4'),
    document.getElementById('slide5'),
    document.getElementById('slide6'),
    document.getElementById('slide7'),
    document.getElementById('slide8'),
    document.getElementById('slide9'),
    document.getElementById('slide10'),
  ];

  const btnNext = document.getElementById('next');
  const btnPrev = document.getElementById('prev');

  let index = 0;
  const total = radios.length;

  btnNext.addEventListener('click', () => {
    index++;
    if (index >= total) index = 0;
    radios[index].checked = true;
  });

  btnPrev.addEventListener('click', () => {
    index--;
    if (index < 0) index = total - 1;
    radios[index].checked = true;
  });

});


AOS.init({
  easing: "ease-out-cubiq",
});