
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


// Dark Mode Light Mode
const root = document.documentElement;
const togglebtn = document.getElementById('dn');
togglebtn.addEventListener('change', function () {
  if (togglebtn.checked) {
    root.style.setProperty('--text-color','white');
    root.style.setProperty('--bg-color','#0e1116');
    root.style.setProperty('--work-bg','rgba(22, 21, 21, 0.836)');
    root.style.setProperty('--border-color','rgb(146, 146, 146)');
    root.style.setProperty('--link-color','black');
  } else {
    root.style.setProperty('--text-color','black');
    root.style.setProperty('--bg-color','#F1EEE9');
    root.style.setProperty('--work-bg','rgba(233, 234, 234, 0.836)');
    root.style.setProperty('--border-color','rgb(109, 109, 109)');
    root.style.setProperty('--link-color','white');
  }  
})
submitBtn = document.getElementById('submit');
const homeDesc = document.getElementsByClassName('home-desc');
function applyResponsiveStyles() {
  if (window.innerWidth <= 1120) {
    submitBtn.value = 'Send';
  }
  else{
    submitBtn.value = 'Send Message';
  }
}
function updateHomeDesc() {
  const homeDesc = document.querySelector('.home-desc');
  if (window.innerWidth <= 640) {
    homeDesc.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
  }
}

// Call the function initially and on window resize
window.addEventListener('resize', updateHomeDesc);
updateHomeDesc();
// Call the function initially and on window resize
window.addEventListener('resize', applyResponsiveStyles);
applyResponsiveStyles();

window.onload = ()=> {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    togglebtn.checked = true;
    console.log('Dark mode is enabled');
  } else {
    togglebtn.checked = false;
    console.log('Light mode is enabled');
  }
}


function toggleMenu() {
  const menu = document.getElementById('respmenu');
  menu.style.right = (menu.style.right === '-100vw') ? '0vw' : '-100vw';
}

function closeMenu() {
  const menu = document.getElementById('respmenu');
  menu.style.right = '-100vw';
}

// Add event listeners for menu links
const menuLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', closeMenu);
}

