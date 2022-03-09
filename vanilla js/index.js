const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
let slides = document.querySelectorAll('.slide');
let index = slides.length;
let interval;
let clone1;
let clone2;

for (let i = 0; i < slides.length; i++) {
  clone1 = slides[i].cloneNode(true);
  clone2 = slides[slides.length - (i + 1)].cloneNode(true);
  slide.append(clone1);
  slide.prepend(clone2);
  if (i === 0) {
    clone1.id = 'first-clone';
    clone2.id = 'last-clone';
  }
}

const getSlides = () => document.querySelectorAll('.slide');

const slideWidth = slide.clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;
slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === 'first-clone') {
    slide.style.transition = 'none';
    index = (slides.length) / 3;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === 'last-clone') {
    slide.style.transition = 'none';
    index = (slides.length) / 3 * 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

function startSlide() {
  interval = setInterval(() => {
    moveToNextSlide();
  }, 3000);
};

function moveToNextSlide() {
  clearInterval(interval);
  slides = getSlides();
  if (index === slides.length - 1) {
    index = (slides.length) / 3 - 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = 'none';
  } else {
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `all 0.7s ease-in-out`;
  }
  startSlide();

}

function moveToPrevSlide() {
  clearInterval(interval);
  slides = getSlides();
  if (index === 0) {
    index = (slides.length) / 3;
    console.log(index);
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = 'none';
  } else {
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `all 0.7s ease-in-out`;
  }
  startSlide();
}

startSlide();