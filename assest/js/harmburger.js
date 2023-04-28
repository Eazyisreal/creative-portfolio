// Saving HTML classes as Constant
const harmburger = document.querySelector('.harmburger');
const navLinks = document.querySelector('.nav__links');
const cta = document.querySelector('#cta')

// Adding Event Listener to Harmburger, navlinks and cta
harmburger.addEventListener('click', () => {
    harmburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    cta.classList.toggle('active');

})

// Removing active class for nav items with a event listener
document.querySelectorAll('.nav__item').forEach(i => i.addEventListener('click', ()=> {
    harmburger.classList.remove('active');
    navLinks.classList.remove('active');
    cta.classList.remove('active');
}))


// Removing active class for cta with a event listener
document.querySelectorAll('#cta').forEach(i => i.addEventListener('click', ()=> {
    harmburger.classList.remove('active');
    navLinks.classList.remove('active');
    cta.classList.remove('active');
}))

