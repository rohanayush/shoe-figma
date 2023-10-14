const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

if (slides.length > 0) {
    slides[0].style.display = 'none';
    if(slides.length === 2){
        document.body.style.backgroundColor = '#FFB800';
    }
  }



// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.style.display = i === index ? 'block' : 'none';
//   });
//   // Set body background based on the active slide
//   if (index === 0) {
//     document.body.style.backgroundColor = '#222'; // Set body background to #222 for the first slide
//   } else if (index === 1) {
//     document.body.style.backgroundColor = '#FFB800'; // Set body background to #FFB800 for the second slide
//   }
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// // Display the first slide
// showSlide(currentSlide);

// // Automatically transition to the next slide every 3 seconds
// setInterval(nextSlide, 1000);

// ----------------------------------------------------------------------------------------------------------------

//  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// for shoes



let currentShoe = 0;
const shoeBoxes = document.querySelectorAll('.box-shoe');

function showShoe(index) {
  shoeBoxes.forEach((box, i) => {
    box.classList.toggle('selected', i === index);
  });
}

function selectShoe(index) {
  showShoe(index);
}

function nextShoe() {
  currentShoe = (currentShoe + 1) % shoeBoxes.length;
  showShoe(currentShoe);
}

function prevShoe() {
  currentShoe = (currentShoe - 1 + shoeBoxes.length) % shoeBoxes.length;
  showShoe(currentShoe);
}
