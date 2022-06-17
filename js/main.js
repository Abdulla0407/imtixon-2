var Burgerbtn = document.querySelector(".header__burger")
var menu = document.querySelector(".header")


Burgerbtn.addEventListener("click", (evt) => {
    menu.classList.toggle("burger--menu")
})