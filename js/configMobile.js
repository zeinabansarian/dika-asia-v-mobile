//header hover bottom Menu
let bottomMenu
let header = document.querySelector('header')
let menuInners = [...document.querySelectorAll('.menuInner')]
let headerItems = [...document.querySelectorAll('header .hover-item')]
let mainIMG
let catInnerItems
let bg
let toggle = document.querySelector('header .toggle-inner')
let toggleMenu = document.querySelector('.RightFixed-Menu')
let otherItem =document.querySelectorAll('.Header .Right > .Items .Item')
let searchP = document.querySelector('.Search-popup')
let searchPBTN = document.querySelector('header .searchIconHeader')
let closeSBTN = document.querySelector('.MobileHeader .Close')
let searchIcon2 = document.querySelector('.searchIcon2')
header.addEventListener('mouseleave',()=>{
    headerItems.map(menu=>{
        return menu.classList.remove('active')
    })
})
otherItem.forEach(u=>{
    u.addEventListener('mouseenter',(e)=>{
      
        headerItems.map(menu=>{
            return menu.classList.remove('active')
        })
    })
})

headerItems.forEach(item=>{
  
    item.addEventListener('mouseenter',(e)=>{
    headerItems.map(menu=>{
        return menu.classList.remove('active')
    })
    e.currentTarget.classList.add('active')

    menuInners.map(menu=>{
        return menu.classList.remove('show')
    })
    })
})
let isopen = false
let h= false
toggle.addEventListener('click',()=>{
  if(!isopen){
    lenis.stop()
    if(header.classList.contains('activeHeader')){
      toggleMenu.classList.add('openMenu')
      toggle.classList.add('openMenu')
      header.classList.add('activeHeader')
      document.querySelector('.toggle-menu').classList.add('active')
      isopen = true
      h = true
    }
      toggleMenu.classList.add('openMenu')
      toggle.classList.add('openMenu')
      header.classList.add('activeHeader')
      document.querySelector('.toggle-menu').classList.add('active')
      isopen = true
  }
else{
  lenis.start()
  if(h){
    console.log('has activeheader');
    toggleMenu.classList.remove('openMenu')
    toggle.classList.remove('openMenu')
    header.classList.add('activeHeader')
    document.querySelector('.toggle-menu').classList.remove('active')
    h = false
    isopen = false
  }
  else{
    toggleMenu.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
  header.classList.remove('activeHeader')
  document.querySelector('.toggle-menu').classList.remove('active')
  h = true
  }

  isopen = false
}
})



var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
    // console.log("over");

    $("header").addClass("goDown");
    $("header").removeClass("goTop");
    $(".Search-popup").addClass("goDown");
    
    if(document.querySelector('main.ProductList-C')){
      document.querySelector('.Right-Fixed').classList.add('goDown')
    }
    
} else if (st < lastScrollTop) {
    // upscroll code
    $("header").addClass("goTop");
    $("header").removeClass("goDown");
    $(".Search-popup").removeClass("goDown");
        // console.log("less");
        if(document.querySelector('main.ProductList-C')){
          document.querySelector('.Right-Fixed').classList.remove('goDown')
  
        }
   
   } 
   lastScrollTop = st <= 0 ? 0 : st;
}, false);

// DESKTOP
function switchScroll() {
    if (flag != true){
      enable_scroll();
    } else {
      disable_scroll();
    }
  }
    function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
  function keydown(e) {
    var keys = [32,33,34,35,36,37,38,39,40];
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }
  function wheel(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  function disable_scroll() {
    if (document.addEventListener) {
      document.addEventListener('wheel', wheel, false);
      document.addEventListener('mousewheel', wheel, false);
      document.addEventListener('DOMMouseScroll', wheel, false);
    }
    else {
      document.attachEvent('onmousewheel', wheel);
    }
    document.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    
    x = window.pageXOffset || document.documentElement.scrollLeft,
    y = window.pageYOffset || document.documentElement.scrollTop,
    window.onscroll = function() {
      window.scrollTo(x, y);
    };
    // document.body.style.overflow = 'hidden'; // CSS
    disable_scroll_mobile();
  }
  function enable_scroll() {
    if (document.removeEventListener) {
      document.removeEventListener('wheel', wheel, false);
      document.removeEventListener('mousewheel', wheel, false);
      document.removeEventListener('DOMMouseScroll', wheel, false);
    }
    document.onmousewheel = document.onmousewheel = document.onkeydown = null;
    window.onscroll = function() {};
    // document.body.style.overflow = 'auto'; // CSS
    enable_scroll_mobile();
  }
  
  // MOBILE
  function disable_scroll_mobile(){
    document.addEventListener('touchmove', preventDefault, false);
  }
  function enable_scroll_mobile(){
    document.removeEventListener('touchmove', preventDefault, false);
  }
  const lenis =  new Lenis({
    smoothWheel: true,
    wheelMultiplier:2
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  // search popup
let sIs = false
let has = false
  searchPBTN.addEventListener('click',()=>{
  
    if(!sIs){
      if(header.classList.contains('activeHeader')){
        has = true
        console.log(searchP);
        closeSBTN.classList.add('show')
        searchIcon2.classList.add('show')
        searchP.classList.add('openSearch')
        header.classList.add('activeHeader')
        let innerBtn = document.querySelector('.SearchIcon-1')
        innerBtn.addEventListener('click',()=>{
          let input = document.querySelector('.Search-popup input#inputHeader')
          console.log('val',input.value);
          if(input.value == ''){
              return
               }
             else{
                 console.log('val',input.value);
                 setTimeout(()=>{
                window.location.href = `/search.bc?q=${input.value}`
                 },1000)}
                 input.addEventListener("keypress", function(event) {
                  // If the user presses the "Enter" key on the keyboard
                  if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    if(input.value != ''){
                      event.preventDefault();
                    console.log('clicked');
                console.log('val',input );
                console.log('val',input.value);
                  window.location.href = `/search.bc?q=${input.value}`
                setTimeout(() => {
                 
                }, 1000);
                    }
                
                
                  }
                })
        })
        sIs = true
      }
      console.log(searchP);
      closeSBTN.classList.add('show')
      searchIcon2.classList.add('show')
      searchP.classList.add('openSearch')
      header.classList.add('activeHeader')
      let innerBtn = document.querySelector('.SearchIcon-1')
      innerBtn.addEventListener('click',()=>{
        let input = document.querySelector('.Search-popup input#inputHeader')
        console.log('val',input.value);
        if(input.value == ''){
            return
             }
           else{
               console.log('val',input.value);
               setTimeout(()=>{
              window.location.href = `/search.bc?q=${input.value}`
               },1000)}
               input.addEventListener("keypress", function(event) {
                // If the user presses the "Enter" key on the keyboard
                if (event.key === "Enter") {
                  // Cancel the default action, if needed
                  if(input.value != ''){
                    event.preventDefault();
                  console.log('clicked');
              console.log('val',input );
              console.log('val',input.value);
                window.location.href = `/search.bc?q=${input.value}`
              setTimeout(() => {
               
              }, 1000);
                  }
              
              
                }
              })
      })
      sIs = true
    }
    else{
      if(has){
        console.log('has activeheader');
        closeSBTN.classList.remove('show')
        searchIcon2.classList.remove('show')
        searchP.classList.remove('openSearch')
        has = false
        sIs = false
      }
      else{
        console.log('has not activeheader');
        header.classList.remove('activeHeader')
        closeSBTN.classList.remove('show')
        searchIcon2.classList.remove('show')
        searchP.classList.remove('openSearch')
        has = true
      }
  
      sIs = false
    }

  
  })

//DROPDOWN NAV
$(document).ready(function() {
  $('.Top-DropDowns .Bottom-S').slideUp();
  $(document.querySelector('.Top-DropDowns .Bottom-S')).slideUp();
  let navss = [...document.querySelectorAll('.header-dropItem')]
  let others = navss.filter(navv=>{
  if(navv.children[1].children[0].children[0] ==undefined){
    return navv
  }
  })
  others.map(m=>{
    console.log(m.children[0].children[1]);
    m.classList.remove('header-dropItem')
    m.children[0].children[1].classList.add('hide')
    m.children[1].classList.add('hide')
    let link = m.children[0].children[0].getAttribute('data-link')
    let tag = document.createElement('a')
    tag.setAttribute('href',link)
    tag.classList.add('header-font')
    let parent = m.children[0].children[0].children[0]
    let text = parent.innerText
    parent.innerText = ''
    tag.innerHTML = text
    parent.appendChild(tag)

  })
let navBtns = document.querySelectorAll('.header-dropItem')
for(let i=0 ; i<navBtns.length ; i++){
  navBtns[i].setAttribute('IS-OP',false)
}
navBtns.forEach(nav=>{
  let IsOpen = false;
nav.addEventListener('click',(e)=>{
  IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
if(e.currentTarget.getAttribute('IS-OP') == 'false'){
  console.log(e.currentTarget);
  e.currentTarget.classList.add('active')
 $(e.currentTarget.children[1]).slideDown();
  e.currentTarget.children[0].children[1].classList.add('rotate')
  IsOpen =false;
  e.currentTarget.setAttribute('IS-OP',true)
}
else{
  e.currentTarget.classList.remove('active')
  $(e.currentTarget.children[1]).slideUp();
  e.currentTarget.children[0].children[1].classList.remove('rotate')
  e.currentTarget.setAttribute('IS-OP',false)
  IsOpen =true;
}
    })
})

})
let wrapp = document.querySelector('.Top-DropDowns')
scrollbar = Scrollbar.init(wrapp);