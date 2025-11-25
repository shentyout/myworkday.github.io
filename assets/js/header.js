// header.js
let lastScroll = 0;
const header = document.querySelector(".newheader");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // 往下隱藏
        header.classList.add("hide");
    } else {
        // 往上出現
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});