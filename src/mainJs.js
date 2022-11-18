var hamburgerToggler = document.querySelector('.hamburger');
var NavLinks = document.querySelector('.navlinks-container');
var links = document.getElementsByClassName('navlink');
const currentLocation = location.href;



function toggleNav() {
    hamburgerToggler.classList.toggle('open');
    NavLinks.classList.toggle('visible');
    // console.log(NavLinks);
}
hamburgerToggler.addEventListener('click', toggleNav);

function activeLink() {
    for (let i = 0; i < links.length; i++) {
        if (links[i].href === currentLocation) {
            links[i].classList.add('active');
        }
    }
}
activeLink();


