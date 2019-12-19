let header = document.querySelector("header");

const printNumbers = (elem, from, to, speed) => {
  let current = from;

  let timerId = setInterval(function(){
    elem.textContent = current;
    if (current == to) clearInterval(timerId)
    current++
  }, (to-from)/speed)
}

const startCount = counters => {
  for (let i=0; i < counters.length; i++){
      eventEnd++
      let counterFrom = counters[i].getAttribute('data-from');
      let counterTo = counters[i].getAttribute('data-to');
      let counterSpeed = counters[i].getAttribute('data-speed'); 
      printNumbers(counters[i],counterFrom, counterTo, counterSpeed)
  }
}
let eventEnd = 0;
const counters = document.querySelectorAll('.counter');
counters.forEach(function(counter){
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex +=n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");

  if(n > slides.length){
    slideIndex = 1;
  }

  if(n < 1){
    slideIndex = slides.length;
  }

  for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "")
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className = "active dot"
}

setInterval(function(){
  plusSlides(1)
},5000);

const anchors = [].slice.call(document.querySelectorAll('.navMenu')),
      animationTime = 500,
      framesCount = 25;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset - 106;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

const menuBtn = document.querySelector(".menu-btn");
const screenOpacityOff = document.querySelector(".screenOpacityOff");
const menuRight= document.querySelector(".menuRight");

menuBtn.onclick = () => {
  screenOpacityOff.classList.add('screenOpacity');
  menuRight.classList.add('activeMenu')
}

screenOpacityOff.onclick = () => {
  screenOpacityOff.classList.remove('screenOpacity');
  menuRight.classList.remove('activeMenu')
}

const pageMenuRight = document.querySelectorAll(".pageMenuRight");
pageMenuRight.forEach(item=>{
  item.addEventListener('click', function() {
    screenOpacityOff.classList.remove('screenOpacity');
    menuRight.classList.remove('activeMenu')
  })
})

const textOnImg = document.querySelector(".textOnImg");
let textOnImgCounter = 0;

let firstImgEnd = 0;
let secondImgEnd = 0;
let thirdImgEnd = 0;

const firstImg = document.querySelector(".firstImg") ;
const secondImg = document.querySelector(".secondImg") ;
const thirdImg = document.querySelector(".thirdImg") ;

let clientHeight = document.documentElement.clientHeight;
console.log(textOnImg.getBoundingClientRect().y - clientHeight)
if(textOnImgCounter < 1){
  if(textOnImg.getBoundingClientRect().y - clientHeight + 65 <=0){
    textOnImg.classList.add("activeTextOnImg");
    textOnImgCounter++
  }
}

window.onscroll = () => {

  if(window.scrollY > 96){
    header.classList.add('fixedHeader')
  } else{
    header.classList.remove('fixedHeader')
  }
  if (eventEnd < 1){
    if (counters[0].getBoundingClientRect().y - clientHeight <= 0){
      startCount(counters);
    }
  }

  if(textOnImgCounter < 1){
    if(textOnImg.getBoundingClientRect().y - clientHeight + 65 <=0){
      textOnImg.classList.add("activeTextOnImg");
      textOnImgCounter++
    }
  }

  if(firstImgEnd < 1){
    if(firstImg.getBoundingClientRect().y - clientHeight + 150 <=0){
      firstImg.classList.add("activeImgLeft")
      firstImgEnd++
    }
  }

  if(secondImgEnd < 1){
    if(secondImg.getBoundingClientRect().y - clientHeight + 150 <=0){
      secondImg.classList.add("activeImgRight")
      secondImgEnd++
    }
  }

  if(thirdImgEnd < 1){
    if(thirdImg.getBoundingClientRect().y - clientHeight + 150 <=0){
      thirdImg.classList.add("activeImgLeft")
      thirdImgEnd++
    }
  }
};

function initMap(){
  var pos = {lat:  52.237420, lng: 20.983282};
  var opt = {
    center: pos,
    zoom: 15,
  }

  var myMap = new google.maps.Map(document.getElementById('map'), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: "our company",
  })
}