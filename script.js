// window.addEventListener('scroll', function() {
//     let show = pageYOffset;
//     if (show > 2000) {
//         window.onload;
//     }
//     console.log(show);
// });

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('spec__card');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}

function check() {
    document.getElementById('toggler').checked = false;
    }

