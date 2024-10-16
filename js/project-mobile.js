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
   loop:false,
   spaceBetween: 40,
   centeredSlides:true,
  });

  const relProduct = new Swiper('.relProduct', {
   speed:1000,
   slidesPerView:1.2,
   loop:false,
   spaceBetween: 20,
   
  });



    let loadMore = document.querySelector(".loadMore");
    let currentItems = 3;
    const elementList = [...document.querySelectorAll(".projectGalleryBox")];
    console.log(elementList[currentItems-1]);
    if (elementList[currentItems-1]) {

        elementList[currentItems-1].insertAdjacentElement("beforeend",loadMore)
    }
    if (currentItems < elementList.length) {
      loadMore.addEventListener("click", function (e) {
        const elementList = [...document.querySelectorAll(".projectGalleryBox")];
        loadMore.classList.add("show-loader");

        if (elementList[currentItems+2]) {
            
            elementList[currentItems+2].insertAdjacentElement("beforeend",loadMore)
        }

        for (let i = currentItems; i < currentItems + 3; i++) {
            
          setTimeout(() => {
            e.target.classList.remove("show-loader");
            if (elementList[i]) {
              elementList[i].style.display = "block";
            }
          }, 0);
        }
        currentItems += 3;
        if (currentItems >= elementList.length) {
          loadMore.classList.add("loaded");
        }
      });
    } else {
      loadMore.classList.add("loaded");
    }
    
    
