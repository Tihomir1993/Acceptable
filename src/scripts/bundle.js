window.addEventListener('load', (event) => {

    const mobileMenu = document.getElementById("mobile-button");
    const nav = document.querySelector(".site-header .list-wrapper");
    const iconClose = document.querySelector(".site-header .menu-close-icon");
    const iconOpen = document.querySelector(".site-header .menu-open-icon");



    mobileMenu.addEventListener('click', function (e) {
        let current = e.target.classList;

        if (current.contains("menu-open")) {
            current.remove("menu-open");
            nav.style.display = "block";
            iconOpen.style.display = "none";
            iconClose.style.display = "inline-block";
        } else {
            current.add("menu-open");
            nav.style.display = "none";
            iconClose.style.display = "none";
            iconOpen.style.display = "inline-block";
        }
    });

});