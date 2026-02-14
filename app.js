let button = document.querySelector(".button");
let icon = document.querySelector("i");
let text = document.querySelector(".button-text");

button.addEventListener("click", () => {
    if (button.classList.contains("active")) return;

    button.classList.add("active");

    setTimeout(() => {
        button.classList.remove("active");
        icon.classList.replace("bx-arrow-to-bottom", "bx-check-circle");
        text.innerText = "Completed";

        setTimeout(() => {
            icon.classList.replace("bx-check-circle", "bx-arrow-to-bottom");
            text.innerText = "Download";
        }, 2000);

    }, 6000);
});


