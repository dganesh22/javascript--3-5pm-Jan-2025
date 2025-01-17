
let cmenu = document.querySelector(".context-menu")
let pageBody = document.querySelector("body")
let cBtn = document.querySelector(".closeBtn")

// menu event
pageBody.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log(`x =${event.clientX}px and y=${event.clientY}px`)

    // cursor position assign to the contextmenu
    cmenu.style.left = `${event.clientX}px`; // x axis
    cmenu.style.top = `${event.clientY}px`; // y axis

    // add active class to the menu
    cmenu.classList.add("active");
});

// to close the menu
cBtn.addEventListener("click", function () {
    // remove active class from the menu
    cmenu.classList.remove("active");
});