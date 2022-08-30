import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.wrapper-galeria');
slide.init();

let foto = 1;
setInterval(function () {
  if (foto <= 4) {
    slide.changeSlide(foto);
    foto++;
  } else {
    foto = 0;
  }
}, 4000);

function onScrool() {
  showNavOnScroll();
  activateMenu(home);
  activateMenu(sobre);
  activateMenu(galeria);
  activateMenu(palestrantes);
}

const btnOpen = document.querySelector('.open-menu');
const btnClose = document.querySelector('.close-menu');
const menuServices = document.querySelectorAll('.item-menu');
const imgLogo = document.querySelector('.logo');

btnOpen.addEventListener('click', openMenu);

Array.from(menuServices).forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', onScrool);

function openMenu() {
  document.body.classList.add('menu-mobile');
  btnClose.addEventListener('click', closeMenu);
  imgLogo.addEventListener('click', closeMenu);
}

function closeMenu() {
  document.body.classList.remove('menu-mobile');
}

function showNavOnScroll() {
  const menuMobile = document.querySelector('#navigation');
  if (scrollY > 5) {
    menuMobile.classList.add('scroll');
  } else {
    menuMobile.classList.remove('scroll');
  }
}

function activateMenu(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReach = targetLine >= sectionTop;
  const sectionEnd = sectionTop + sectionHeight;

  const sectionEndPassed = sectionEnd <= targetLine;

  const sectionBoundaries = sectionTopReach && !sectionEndPassed;

  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute('id')}]`,
  );

  menuElement.classList.remove('active');

  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}
