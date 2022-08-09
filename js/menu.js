// Меню гамбургер
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    //  disableScroll();
    //   e.currentTarget.style.pointerEvents = 'none';
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".mobile-nav-link").forEach(n => n.addEventListener("click", () => {
    // enableScroll();
    // e.currentTarget.style.pointerEvents = 'none';
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// прелоадер
document.body.onload = () => {
    setTimeout(() => {
        var preloader = document.getElementById("preloader-block");
        if (!preloader.classList.add('done')) {
            preloader.classList.add('done');
        }
        var bodyBlock = document.getElementById("BodyBlock");
        if (!bodyBlock.classList.add('active-block')) {
            preloader.classList.add('active-block');
        }
    }, 1000);
}