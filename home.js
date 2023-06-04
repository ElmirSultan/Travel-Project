// İ made some changes ?!

$(document).ready(function () {
  /// manshet slider ///
  var galleryThumbs = new Swiper('div.manshet_appartment .gallery-thumbs', {
    spaceBetween: 16,
    slidesPerView: 4,
    loop: true,
    allowTouchMove: true,
    freeMode: false,
    loopedSlides: 40, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: 'div.manshet_appartment .swiper-button-next',
      prevEl: 'div.manshet_appartment .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      slideSpeed: 3000,
      disableOnInteraction: false,
    },
  });
  var galleryTop = new Swiper('div.manshet_appartment .gallery-top', {
    spaceBetween: 16,
    loop: true,
    loopedSlides: 40, //looped slides should be the same
    thumbs: {
      swiper: galleryThumbs,
    },
    effect: 'fade',
  });
  $('div.manshet_appartment .swiper-slide').on('click', function (e) {
    e.preventDefault();
    galleryTop.slideTo($(this).index());
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});



var swiper = new Swiper(".test", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
  autoplay: {
    delay: 1000,
    slideSpeed: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetweenSlides: 20
    },
    990:{
      slidesPerView: 2,
      spaceBetweenSlides: 20
    },
    1200:{
      slidesPerView: 3,
      spaceBetweenSlides: 20
    }
  }
});

const header = document.querySelector(".hdr")

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("sticky")
  }
  else {
    header.className = "hdr"
  }
}

const openHeader = document.querySelector(".open-header");
const solHeader = document.querySelector(".sol-header");
const sagHeader = document.querySelector(".sag-header");
const menuYazisi = document.querySelector(".menu-yazisi");
$('div.logos .menu-text').on('click', function () {
   

    openHeader.classList.toggle("active")
    solHeader.classList.toggle("active")
    sagHeader.classList.toggle("active")
    menuYazisi.classList.toggle("aktivlessin")

    if (openHeader.className == "open-header active") {
        menuYazisi.classList.add("aktivlessin")
    }
   
})





$('.menu-text').mouseenter(function () {
  $(".menu-text .menu-yazisi").removeClass("goster")
  $(".menu-text .yazilar .open-yazisi").addClass("goster")
})
$('.menu-text').mouseleave(function () {
  $(".menu-text .yazilar .open-yazisi").removeClass("goster")
  $(".menu-text .menu-yazisi").addClass("goster")
})





const navLink = document.querySelectorAll(".nav-link")
navLink.forEach(link => {
  link.addEventListener('click', function () {
    navLink.forEach(link => link.classList.remove("active"));
    this.classList.add("active")

    
    openHeader.classList.toggle("active")
    solHeader.classList.toggle("active")
    sagHeader.classList.toggle("active")
    menuYazisi.classList.toggle("aktivlessin")
  })
})



const goDown = document.querySelector(".bottom-arrow")

goDown.addEventListener('click', function () {
  window.scrollTo(0, 550)
})


const gotoUp = document.getElementById("goto-up")

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        gotoUp.style.display = "block"
    }
    else {
        gotoUp.style.display = "none"
    }
}

gotoUp.addEventListener('click', function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

const gotoDestination = document.getElementById("gotoDestination")

gotoDestination.addEventListener("click",function(e){
  e.preventDefault();
  window.location.href = "destination.html"
})