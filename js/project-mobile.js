gsap.registerPlugin(ScrollTrigger);
let scrollTop = document.querySelectorAll(".scrollTop")
            
scrollTop.forEach(element => {
    gsap.from(element,{
        scrollTrigger: {
            trigger: element,
            start: "top 190%",
            // end: "top 10%",

            // markers: true,
          },
          y:"50vw",
          opacity:0,
          duration:1,

    })
});


$('.section1').imagesLoaded( function() {
    document.querySelector(".section1 img").style.transform="scale(1)"
    document.querySelector(".section1 .overTitle h1").style.transform="translateY(0)"
  });





  const relProject = new Swiper('.relProject', {
   speed:1000,
   slidesPerView:1,
   loop:true,
   spaceBetween: 40,
   centeredSlides:true,
  });

  const relProduct = new Swiper('.relProduct', {
   speed:1000,
   slidesPerView:1.2,
   loop:false,
   spaceBetween: 20,
   
  });