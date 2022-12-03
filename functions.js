
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

  
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel();
    });
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })