window.addEventListener('load', (event) => {

    const mobileMenu = document.getElementById("mobile-button");
    const nav = document.querySelector(".site-header .list-wrapper");
    const iconClose = document.querySelector(".site-header .menu-close-icon");
    const iconOpen = document.querySelector(".site-header .menu-open-icon");



    mobileMenu.addEventListener('click', function (e) {
        let current = e.target.classList;

        if (nav.style.display === "block") {
            ;
            nav.style.display = "none";
            iconOpen.style.display = "inline-block";
            iconClose.style.display = "none";
        } else {
            nav.style.display = "block";
            iconClose.style.display = "inline-block";
            iconOpen.style.display = "none";
        }
    });

});