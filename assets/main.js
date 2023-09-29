/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: true
});

/*SCROLL HOME*/

/*sr.reveal('.card',{delay: 100}); 
sr.reveal('.home__img',{delay: 200}); 
sr.reveal('.home__social-icon',{ interval: 100}); */

/*SCROLL ABOUT*/
sr.reveal('.card',{interval: 100}); 
sr.reveal('.about-icon',{ interval: 100}); 
sr.reveal('.about__subtitle',{delay: 200}); 
sr.reveal('.about__text',{delay: 200}); 

/*SERVICE*/
sr.reveal('.service-card',{delay: 100}); 
sr.reveal('.service-icon',{interval: 100}); 


/*SCROLL SKILLS*/
sr.reveal('.event-card',{interval: 100}); 
sr.reveal('.event-img',{delay: 50}); 


/*SCROLL TEAM*/
sr.reveal('.team-card',{interval: 100}); 
sr.reveal('.team-img',{delay: 50}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 100}); 
