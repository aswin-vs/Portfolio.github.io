// Toggle Icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


// Scroll Progressbar
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});


// About popup control
document.querySelector(".about-btn").addEventListener("click", function () {
  let aboutPopup = document.querySelector('#about-popup');
  aboutPopup.classList.remove('hide');

  document.getElementById("about").scrollIntoView();
});

document.querySelector(".ap-close").addEventListener("click", function () {
  let aboutPopup = document.querySelector('#about-popup');
  aboutPopup.classList.add('hide');

  document.getElementById("about").scrollIntoView();
});


// Services popup control

// Services popup 1
document.querySelector(".services-btn1").addEventListener("click", function () {
  let sp1 = document.querySelector('#sp1');
  sp1.classList.remove('hide');

  document.querySelector(".services").scrollIntoView();
});

document.querySelector(".sp-close1").addEventListener("click", function () {
  let sp1 = document.querySelector('#sp1');
  sp1.classList.add('hide');

  document.querySelector(".services").scrollIntoView();
});

// Services popup 2
document.querySelector(".services-btn2").addEventListener("click", function () {
  let sp2 = document.querySelector('#sp2');
  sp2.classList.remove('hide');

  document.querySelector(".services").scrollIntoView();
});

document.querySelector(".sp-close2").addEventListener("click", function () {
  let sp2 = document.querySelector('#sp2');
  sp2.classList.add('hide');

  document.querySelector(".services").scrollIntoView();
});

// Services popup 3
document.querySelector(".services-btn3").addEventListener("click", function () {
  let sp3 = document.querySelector('#sp3');
  sp3.classList.remove('hide');

  document.querySelector(".services").scrollIntoView();
});

document.querySelector(".sp-close3").addEventListener("click", function () {
  let sp3 = document.querySelector('#sp3');
  sp3.classList.add('hide');

  document.querySelector(".services").scrollIntoView();
});


// Portfolio popup Control

// Portfolio popup 1
document.querySelector(".portfolio-btn1").addEventListener("click", function () {
  let pp1 = document.querySelector('#pp1');
  pp1.classList.remove('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

document.querySelector(".pp-close1").addEventListener("click", function () {
  let pp1 = document.querySelector('#pp1');
  pp1.classList.add('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

// Portfolio popup 2
document.querySelector(".portfolio-btn2").addEventListener("click", function () {
  let pp2 = document.querySelector('#pp2');
  pp2.classList.remove('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

document.querySelector(".pp-close2").addEventListener("click", function () {
  let pp2 = document.querySelector('#pp2');
  pp2.classList.add('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

// Portfolio popup 3
document.querySelector(".portfolio-btn3").addEventListener("click", function () {
  let pp3 = document.querySelector('#pp3');
  pp3.classList.remove('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

document.querySelector(".pp-close3").addEventListener("click", function () {
  let pp3 = document.querySelector('#pp3');
  pp3.classList.add('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

// Portfolio popup 4
document.querySelector(".portfolio-btn4").addEventListener("click", function () {
  let pp4 = document.querySelector('#pp4');
  pp4.classList.remove('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

document.querySelector(".pp-close4").addEventListener("click", function () {
  let pp4 = document.querySelector('#pp4');
  pp4.classList.add('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

// Portfolio popup 5
document.querySelector(".portfolio-btn5").addEventListener("click", function () {
  let pp5 = document.querySelector('#pp5');
  pp5.classList.remove('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

document.querySelector(".pp-close5").addEventListener("click", function () {
  let pp5 = document.querySelector('#pp5');
  pp5.classList.add('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

// Portfolio popup 6
document.querySelector(".portfolio-btn6").addEventListener("click", function () {
  let pp6 = document.querySelector('#pp6');
  pp6.classList.remove('hide');

  document.querySelector(".portfolio").scrollIntoView();
});

document.querySelector(".pp-close6").addEventListener("click", function () {
  let pp6 = document.querySelector('#pp6');
  pp6.classList.add('hide');

  document.querySelector(".portfolio").scrollIntoView();
});


// Form to Mail EndPoint - FormSubmit.co AJAX
jQuery('#contact-form').on('submit', function (e) {
  contactMsgOn();
  jQuery('#contact-btn').attr('disabled', true);

  jQuery.ajax({
    url: 'https://formsubmit.co/ajax/ddb86bdf94c93e817981c8ffd9020d52',
    type: 'POST',
    dataType: 'json',
    accepts: 'application/json',
    data: jQuery('#contact-form').serialize(),

    success: function (result) {
      contactMsgOff();
      contactMsgSuccess();
      jQuery('#contact-form')['0'].reset();
      jQuery('#contact-btn').attr('disabled', false);
    },

    error: function (err) {
      contactMsgOff();
      contactMsgFail();
      jQuery('#contact-btn').attr('disabled', false);
    }
  });

  e.preventDefault();
});


// Contact message transmit status
function contactMsgOn() {
  let contactBtnState1 = document.querySelector(".contact-btn-state1");
  let contactBtnState2 = document.querySelector(".contact-btn-state2");

  contactBtnState1.classList.add('hide');
  contactBtnState2.classList.remove('hide');
}

function contactMsgOff() {
  let contactBtnState1 = document.querySelector(".contact-btn-state1");
  let contactBtnState2 = document.querySelector(".contact-btn-state2");

  contactBtnState2.classList.add('hide');
  contactBtnState1.classList.remove('hide');
}

function contactMsgSuccess() {
  let y = document.getElementById("contact-msg-fail");
  y.style.display = "none";

  let x = document.getElementById("contact-msg-success");
  x.style.display = "block";
  setTimeout(() => {
    x.style.opacity = "0";
    x.style.transition = "opacity 3s";
    setTimeout(() => {
      x.style.display = "none";
      x.style.opacity = "1";
      x.style.transition = "opacity 0s";
    }, 1000);
  }, 3500);
}

function contactMsgFail() {
  let x = document.getElementById("contact-msg-success");
  x.style.display = "none";

  let y = document.getElementById("contact-msg-fail");
  y.style.display = "block";
  setTimeout(() => {
    y.style.opacity = "0";
    y.style.transition = "opacity 3s";
    setTimeout(() => {
      y.style.display = "none";
      y.style.opacity = "1";
      y.style.transition = "opacity 0s";
    }, 1000);
  }, 3500);
}


// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-description', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

ScrollReveal().reveal('.about-box', {
  interval: 4,
  reset: true
});

ScrollReveal().reveal('.skills-box', {
  interval: 4,
  reset: true
});

ScrollReveal().reveal('.contact-card', {
  interval: 4,
  reset: false
});