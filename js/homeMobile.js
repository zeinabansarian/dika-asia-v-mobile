
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("activeHeader");
        } else {
           $("header").removeClass("activeHeader");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // let lazyVideos = [...document.querySelectorAll("video.lazy")]
   
    // if ("IntersectionObserver" in window) {
    //   let lazyVideoObserver = new IntersectionObserver(function(entries) {
    //     entries.forEach(function(video) {
    //       if (video.isIntersecting) {
    //         for (let source in video.target.children) {
    //           let videoSource = video.target.children[source];
    //           if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
    //             videoSource.src = videoSource.dataset.src;
    //           }
    //         }
   
    //         video.target.load();
    //         video.target.classList.remove("lazy");
    //         lazyVideoObserver.unobserve(video.target);
    //       }
    //     });
    //    });
   
   
    //   lazyVideos.forEach(function(lazyVideo) {
    //     lazyVideoObserver.observe(lazyVideo);
    //   });
    //    gsap.to(".Loading-Container", {
    //       scale: 0,
    //       delay: 3,
    //       ease: "expo.in",
    //     });
    // }
    gsap.to(".Loading-Container", {
        scale: 0,
        delay: 3,
        ease: "expo.in",
      });
   });
   
// banner slider
let pagings = document.querySelectorAll('.paging p')
let paging = [ ]
pagings.forEach(p=>{
paging.push(p.innerHTML)
})
let SwiperBanner= new Swiper ('.swiper-banner', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect:'fade' ,
    loop:true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      // disableOnInteraction: false,
    },
   speed:2000,
    pagination: {
        el: '.Section-1 .swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
        return '<span class="' + className + '">'  +'<span class="text">'+paging[index]+'</span>'+'<span class="line"></span>'+ '</span>';
    
        }
      },
    }) 

// parallax images
let parallax1= $('.parallax-1');
let parallax2= $('.parallax-2');
let parallax3= $('.parallax-3');
let parallax4= $('.parallax-4');
let layer= $('.Parallax-Container');
layer.mousemove(function(e){
  var ivalueX= (e.pageX * -1 / 30);
  var ivalueY= (e.pageY * -1 / 50);
  var cvalueX= (e.pageX * 1 / 40);
  var cvalueY= (e.pageY * 1 / 60);
  parallax1.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
  parallax2.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
  parallax3.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
  parallax4.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');

});

// hover bg
let Sec3 = document.querySelector('.Section-3')
let bgSec = Sec3.getAttribute('data-bg')
Sec3.style.backgroundImage = `url('${bgSec}')`

// procat slider
let SwiperProcat= new Swiper ('.swiper-procats', {
    slidesPerView: 1.8,
    spaceBetween: 5,
    loop:true,
    centeredSlides: true,
    pagination: {
        el: '.Procats .swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
        return '<span class="' + className + '">'+ '</span>';
    
        }
    },
    navigation: {
        nextEl: ".Procats .swiper-button-next",
        prevEl: ".Procats .swiper-button-prev",
      }
})
let gridItems = document.querySelectorAll('.GridItem')
let Banners =[...document.querySelectorAll('.Section-3 .imgBanner')] 
let bannerimg
gridItems.forEach(grid=>{
    let img
    for(let i =0 ; i< gridItems.length ; i++){
        Banners[i].setAttribute('data-index',i)
        gridItems[i].setAttribute('data-index',i)
    }
    grid.addEventListener('mouseenter',(event)=>{
     img = event.currentTarget.getAttribute('data-IMG')
     let bannerimg 
     let bannerSrc
    for(let h = 0 ; h < gridItems.length ; h++){
        if( event.currentTarget.getAttribute('data-index') == Banners[h].getAttribute('data-index') ){
            console.log(Banners[h]);
            bannerimg = Banners[h]
            bannerSrc = Banners[h].getAttribute('src')
        }
    }
    Banners.map(banner=>{
        banner.classList.remove('show')
    })
    bannerimg.classList.add('show')
    })
})


let SwiperProject= new Swiper ('.swiper-Project ', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect:'fade' ,
    fadeEffect: {
      crossFade: true,
    },
   speed:2000,
    navigation: {
        nextEl: ".Section-4 .swiper-button-next",
        prevEl: ".Section-4 .swiper-button-prev",
      }
})