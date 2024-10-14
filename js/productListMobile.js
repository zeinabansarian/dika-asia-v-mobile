
header.classList.add('activeHeader')
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st == 0) {
      $("header").addClass("activeHeader"); 
  }
   })
   let pros = document.querySelectorAll('.Products .Product')
   pros.forEach(pro=>{
    gsap.to(pro,{
        opacity:1,
        y:0,
        scrollTrigger:{
            trigger:pro,
            start:'top 70%',
            end:'bottom bottom',
            stagger:.3
        }
       })
   })
