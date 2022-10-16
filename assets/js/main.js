const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll('.nav__link')
console.log(navLink)

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

navLink.forEach(element => {
    element.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    })
});

const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {

    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionheight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + "]")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionheight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

const scrollup = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data,.footer__content,.footer__logo,.footer__description`)
sr.reveal(`.home__tree-1`, { origin: 'left', delay: 800 })
sr.reveal(`.home__tree-2`, { origin: 'right', delay: 800 })
sr.reveal(`.home__img`, { origin:'bottom',delay:800 })
sr.reveal(`.category__card,.items__card`,{interval:100})
sr.reveal(`.about__img,.footer__tree-2`,{origin:'left'})
sr.reveal(`.about__data,.footer__tree-1`,{origin:'right'})
sr.reveal(`.party__images,.party__data`,{origin:'right'})