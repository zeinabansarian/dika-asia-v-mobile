
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