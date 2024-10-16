
const memberSlider = new Swiper('.memberSlider', {
    // Optional parameters
  
    // spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextMember',
      prevEl: '.prevMember',
    },
    speed:1000,
    slidesPerView: 1,
    // And if we need scrollbar
   
  });
const viewGallery = new Swiper('.viewGallery', {
    // Optional parameters
  
    // spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextView',
      prevEl: '.prevView',
    },
    pagination:{
        el:".viewPagination",
        clickable:true,
    },
    speed:1000,
    slidesPerView: 1,
    // And if we need scrollbar
   
  });



  const partnerSlider = new Swiper('.partnerSlider', {
    // Optional parameters
  
    // spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextpartner',
      prevEl: '.prevpartner',
    },
    speed:1000,
    slidesPerView: 1,
    // And if we need scrollbar
   
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
  
  
