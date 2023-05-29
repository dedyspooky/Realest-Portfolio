let date = new Date();
let hour = date.getHours();
let homeDescription = document.getElementById("description");
// console.log("Hour = " + hour);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!";
let i = 0;

function executeAnimation() {
  const targetElement = document.getElementById('hello');
  const interval = setInterval(() => {
    targetElement.innerText = targetElement.innerText.split("").map((letter, index) => {
      if (index < i) {
        return targetElement.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 63)];
    }).join("");
    if (i >= 18) {
      clearInterval(interval);
    }
    i++;
  }, 50);
};

// Execute the animation when the page finishes loading
window.addEventListener('load',executeAnimation());



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


// ALL NAVLINKS
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listeners to nav links
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove active class from all nav links
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });

    // Add active class to the clicked nav link
    this.classList.add('active');

    // Get the target section ID from the link's href attribute
    const targetSection = this.getAttribute('href').substring(1);

    // Scroll to the target section
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Function to update the active nav link based on scroll position
function updateActiveNavLink() {
  // Get the current scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Get the height of the viewport
  const viewportHeight = window.innerHeight;

  // Calculate the scroll positions of the sections
  const homeScrollPosition = 0;
  const aboutMeScrollPosition = document.getElementById('about-me').offsetTop;
  const projectsScrollPosition = document.getElementById('projects').offsetTop;
  const contactMeScrollPosition = document.getElementById('contact-me').offsetTop;

  // Determine the active section based on the scroll position
  let activeSection = 'home';
  if (scrollPosition >= aboutMeScrollPosition - viewportHeight / 2) {
    activeSection = 'about-me';
  }
  if (scrollPosition >= projectsScrollPosition - viewportHeight / 2) {
    activeSection = 'projects';
  }
  if (scrollPosition >= contactMeScrollPosition - viewportHeight / 2) {
    activeSection = 'contact-me';
  }

  // Update the active class and URL of the nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeSection}`) {
      link.classList.add('active');

      // Update the URL to match the active section
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  });
}

// Add scroll event listener to update active nav link
window.addEventListener('scroll', updateActiveNavLink);


// TILT EFFECT ON PROJECTS
let works = document.querySelectorAll(".tilt-effect");

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
  if (window.innerWidth <= 640) {
    homeDescription.innerHTML = '<span>&lt;p&gt;</span>Aviral Ale, an 18-year-old web designer and developer, crafts stunning and functional websites with expertise in modern web tools.<span>&lt;/p&gt;</span>';
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

const btn = document.getElementById("paragraph-btn-container");
const chevron = document.getElementById("chevron");
btn.addEventListener('click', () => {
  if (description.style.display == 'none') {
    description.style.display = 'block';
    btn.style.animation = 'none';
  } else {
    chevron.style.transform = 'rotate(0deg)';
    btn.style.animation = 'btn 2s ease 0s infinite';
  }
})
window.addEventListener('load', () => {
  chevron.style.transform = 'rotate(0deg)';
})


