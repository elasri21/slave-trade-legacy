const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
openMenu.addEventListener("click", function() {
    nav.style.display  = "block";
});
closeMenu.addEventListener("click", function() {
    nav.style.display  = "none";
});

// slider
const slides = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
bullets.forEach(function (bullet) {
    bullet.addEventListener("click", function(e) {
        slides.forEach(slide => {
            if(e.target.id === slide.dataset.id) {
                slide.classList.remove("d-none");
            } else {
                slide.classList.add("d-none");
            }
        });
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active-bullet");
        }
        this.classList.add("active-bullet");
    });
});

// pannel
const buttons = Array.from(document.querySelectorAll(".titles p"));
const boxes = Array.from(document.querySelectorAll(".content .box"));

buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        boxes.forEach(box => {
            if(e.target.id == box.dataset.id) {
                box.classList.remove("d-none");
            } else {
                box.classList.add("d-none");
            }
        });
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});
