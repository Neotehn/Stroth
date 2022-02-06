window.addEventListener('scroll', (event) => {
    var pictureHeight = document.querySelector('.imgIntro').offsetHeight;
    var navigationHeight = document.querySelector('.navigation-element').offsetHeight;
    var scrollHeight = document.documentElement.scrollTop;
    var navigationBar = document.getElementById("navigationBar");
    var hamburger = document.querySelector('.toggle-button');
    var dropDown = document.querySelector('.mobile');
    var menu = document.querySelectorAll('.nav-title-mobile');


    if (scrollHeight >= (pictureHeight - navigationHeight)) {
        navigationBar.className = "navigation-element navigation-nontransparent";
        dropDown.style.marginTop = "51px";
        hamburger.style.marginTop = "0px";
        hamburger.style.marginRight = "5px";

        for (i = 0; i < menu.length; i++) {
            menu[i].classList.add('.menu-dropdown-beige');
        }
    } else {
        navigationBar.className = "navigation-element navigation-transparent";
        dropDown.style.marginTop = "71px";
        hamburger.style.marginTop = "20px";
        hamburger.style.marginRight = "20px";

        for (i = 0; i < menu.length; i++) {
            menu[i].classList.remove('.menu-dropdown-beige');
        }
    }
});

function dropMenu () {
    var menu = document.querySelector('.mobile');

    if (menu.classList.contains('.active')) {
        menu.style.display = "none";
        menu.classList.remove('.active');
    } else {
        menu.style.display = "flex";
        menu.classList.add('.active');
    }
}

window.addEventListener('resize', function(event) {
    if (window.outerWidth > 1100) {
        document.querySelector('.mobile').style.display = "none";
        document.querySelector('.mobile').className = "mobile";
    }
}, true);