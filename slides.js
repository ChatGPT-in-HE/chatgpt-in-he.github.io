let slideIndex = 1;

// Next/previous controls
function plusSlides(n, name) {
  showSlides(slideIndex += n, name);
}

function showSlides(n, name) {
  let i;
  let slides = document.getElementsByClassName(name);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slidesIndex)
  slides[slideIndex-1].style.display = "block";
} 