var slideIndex = 0;
const timeout = 3000;
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slide = document.getElementsByClassName('slides');
const dot = document.getElementsByClassName('dotlist');

// Gọi hàm lần đầu
nextSlide(slideIndex);

// Gọi hàm sau mỗi 3s
let interval = setInterval(nextSlide, timeout);

// Định nghĩa hàm trình chiếu slideshow
function nextSlide() {
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    if(slideIndex == slide.length) {
        slideIndex = 0;
    }
    slideIndex++;
    slide[slideIndex - 1].style.display = "block";
    for(let j = 0; j < dot.length; j++) {
        dot[j].classList.remove("active");
    }
    dot[slideIndex - 1].classList.add("active");
}

function prevSlide() {
  slideIndex--;
  if(slideIndex == 0) {
    slideIndex = slide.length;
  }
  for(let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";
  for(let j = 0; j < dot.length; j++) {
    dot[j].classList.remove("active");
  }
  dot[slideIndex - 1].classList.add("active");
}

// Hàm chuyển slide khi người dùng click vào nút chấm tròn
function currentSlide(n) {
  clearInterval(interval);
  slideIndex = n;
  nextSlide();   
  interval = setInterval(nextSlide, timeout);
}

next.addEventListener('click', () => {
  clearInterval(interval);
  nextSlide();
  interval = setInterval(nextSlide, timeout);
})
  

prev.addEventListener('click', () => {
  clearInterval(interval);
  prevSlide();
  interval = setInterval(nextSlide, timeout);
})