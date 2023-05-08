
//SKILL TOGGLE
const textContainer = document.getElementById('skilltoggle');
const designer = document.getElementById('designer');
const developer = document.getElementById('developer');
let currentIndex = 0;

function showText() {
  // hide current text
  if (currentIndex === 0) {
    designer.classList.remove('show');
  } else {
    developer.classList.remove('show');
  }
  
  // select next text
  currentIndex = (currentIndex === 0) ? 1 : 0;
  let nextText = (currentIndex === 0) ? designer : developer;
  
  // show next text
  nextText.classList.add('show');
}

setInterval(() => {
  showText();
}, 3000); // shuffle every 3 seconds

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("navbar").classList.add("navbar-scrolled");
} else {
  document.getElementById("navbar").classList.remove("navbar-scrolled");
}
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// const timeOfDay = document.getElementById('hello');
// function updateTime() {
//   let currentTime = new Date();
//   let currentHour = currentIndex.getHours();
//   if(currentHour<12){
//     timeOfDay.innerHTML = "Good Morning! I am Aviral";
//   }
//   else if (currentHour<18) {
//     timeOfDay.innerHTML = "Good Afternoon! I am Aviral";
//   }
//   else{
//     timeOfDay.innerHTML = "Good Evening! I am Aviral";
//   }
// }
// setInterval(updateTime(),1000)


var works = document.querySelectorAll(".tilt-effect");

works.forEach(function(work) {
  work.addEventListener("mousemove", tilt);
  work.addEventListener("mouseleave", resetTilt);
});

function tilt(event) {
  var workItem = this,
    rect = workItem.getBoundingClientRect(),
    x = event.clientX - rect.left,
    y = event.clientY - rect.top,
    centerX = rect.width / 2,
    centerY = rect.height / 2,
    deltaX = x - centerX,
    deltaY = y - centerY,
    percentageX = deltaX / (rect.width / 2),
    percentageY = deltaY / (rect.height / 2),
    maxTilt = 10;

  workItem.style.transform = "perspective(1000px) rotateX(" + -percentageY * maxTilt + "deg) rotateY(" + percentageX * maxTilt + "deg)";
}

function resetTilt() {
  this.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
}


// TILT SHINE
