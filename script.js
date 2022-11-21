'use strict';
/**********************************************************************/
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

btnsOpenModalWindow.forEach(button =>
  button.addEventListener('click', openModalWindow)
);
// for (let i = 0; i < btnsOpenModalWindow.length; i++)
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});
/**********************************************************************/
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));
// const sections = document.querySelectorAll('.sections');
// console.log(sections);
// console.log(document.getElementById('section--1'));
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);
// const btn = document.getElementsByClassName('btn');
// console.log(btn);

/**********************************************************************/
// Создание и вставка элементов!
// .insertAdjaceHTML()
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
// 'Мы используем на этом сайте cookie для улучшения функциональности.';

message.innerHTML =
  'Мы используем на этом сайте cookie для улучшения функциональности. <button class="btn btn-close-cookie">ok!</button>';

const header = document.querySelector('.header');
header.prepend(message);
// header.append(message);

// Удаление элементов
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Стили
message.style.backgroundColor = '#076785';
// message.style.width = '120%';
// console.log(message.style.width);
// console.log(message.style.color);
// console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(
  getComputedStyle(message).height + 50 + 'px'
);
// console.log(message.style.height);

// Атрибуты
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const section1Coords = section1.getBoundingClientRect();
  // console.log(section1Coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log(
  //   'Текущее прокручивание: х, у',
  //   window.pageXOffset,
  //   window.pageYOffset
  // );
  // console.log(
  //   'Ширина и высота viewport',
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );
  // window.scrollTo({
  //   left: section1Coords.left + window.pageXOffset,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// smooth page navigation
/*** 
document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
  htmlElement.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});
*/
// 1. Добавляем event listener для ОБЩЕГО родителя
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Определить target элемент
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});
// Вкладки

tabContainer.addEventListener('click', function (e) {
  const clickedButton = e.target.closest('.operations__tab');
  console.log(clickedButton);
  // Guard clause
  if (!clickedButton) return;
  // Активная вкладка
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedButton.classList.add('operations__tab--active');
  // Активный контент
  tabContents.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Анимации потускнения на панели навигации
const navLinksHoverAnimation = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoText = linkOver.closest('.nav').querySelector('.nav__text');

    siblingLinks.forEach(el => {
      if (el !== linkOver) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
    logoText.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', function (e) {
  navLinksHoverAnimation(e, 0.4);
});
nav.addEventListener('mouseout', function (e) {
  navLinksHoverAnimation(e, 1);
});

// Sticky navigation
// const section1Coords = section1.getBoundingClientRect();
// console.log(section1Coords);
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > section1Coords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky navigation - Intersection Observer API
// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null,
//   threshold: 0.2,
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const getStickyNav = function (entries) {
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
// const header = document.querySelector('.header');
headerObserver.observe(header);

// Появление ччастей сайта
const allSections = document.querySelectorAll('.section');
const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.18,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Имплементация lazy loading для изображений
const lazyImages = document.querySelectorAll('img[data-src]');
// console.log(lazyImages);

const loadImages = function (entries, observer) {
  const entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // Меняем изображение на с высоким разрешением

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const lazImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.8,
});
lazyImages.forEach(image => lazImagesObserver.observe(image));

// create slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.7) translateX(1300px)';
// slider.style.overflow = 'visible';
let currentSlide = 0;
const slidesNumber = slides.length;
const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach(function (_, index) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};
createDots();
const activateCurrentDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateCurrentDot(0);
const moveToSlide = function (slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};
moveToSlide(0);
const nexSlide = function () {
  if (currentSlide === slidesNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveToSlide(currentSlide);
  activateCurrentDot(currentSlide);
};
const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slidesNumber - 1;
  } else {
    currentSlide--;
  }
  moveToSlide(currentSlide);
  activateCurrentDot(currentSlide);
};
btnRight.addEventListener('click', nexSlide);
btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowRight') nexSlide();
  if (e.key === 'ArrowLeft') previousSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    moveToSlide(slide);
    activateCurrentDot(slide);
  }
});

// DOM Events
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('DOM: ', e);
// });
// window.addEventListener('load', function (e) {
//   console.log('Window load', e);
// });
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log('window beforeunloaded', e);
//   e.returnValue = '';
// });

/*********************************************** */
// Виды Событий и Обработчиков Событий
// const alertMouseEnterH1 = function (e) {
//   alert('addEventListener: You are now at the h1 element!');
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertMouseEnterH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: You aare now aat the h1 element!');
// };
// Event Propagation
/*** 
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
// const getRandomColor = () =>
//   `rgb(${getRandomIntInclusive(0, 255)},
//   ${getRandomIntInclusive(0, 255)},
//   ${getRandomIntInclusive(0, 255)})`;

// console.log(getRandomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link:', e.target, e.currentTarget);
  this.style.backgroundColor = getRandomColor();
  // Stop Propagation
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('Links:', e.target, e.currentTarget);
  this.style.backgroundColor = getRandomColor();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('Nav:', e.target, e.currentTarget);
  this.style.backgroundColor = getRandomColor();
});
// document.querySelector('body').addEventListener('click', function (e) {
//   console.log('Body:', e.target, e.currentTarget);
//   this.style.backgroundColor = getRandomColor();
// });

*/
/** *******************************************
// DOM traversing
// Перемещение вниз (к потомокам)
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'yellow';
h1.lastElementChild.style.color = 'yellow';

// Перемещение вверх (к родителям)
console.log(h1.parentNode);
console.log(h1.parentElement);

const h2 = document.querySelector('h2');
// console.log(h2);
// h2.closest('.section').style.backgroundColor = 'blue';
// h2.closest('h2').style.backgroundColor = 'yellow';

// Перемещение в стороны
console.log(h2.previousElementSibling);
console.log(h2.nextElementSibling);
console.log(h1.parentElement.children);
 */
