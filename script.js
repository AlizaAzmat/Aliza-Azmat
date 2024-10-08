let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentwordIndex = 0;
let maxwordIndex = words.length - 1;
words[currentwordIndex].style.opacity = "1";

let changeText = () => {
    let currentword = words[currentwordIndex];
    let nextword = currentwordIndex === maxwordIndex ? words[0] : words[currentwordIndex + 1];

    Array.from(currentword.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter-out";
        }, i * 80);
    });

    nextword.style.opacity = "1";
    Array.from(nextword.children).forEach((letter, i) => {
        letter.className = "letter-behind";
        setTimeout(() => {
            letter.className = "letter-in";
        }, 340 + i * 80);
    });

    currentwordIndex = currentwordIndex === maxwordIndex ? 0 : currentwordIndex + 1;
}

changeText();
setInterval(changeText, 3000);

// Circle skill animation
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

// Mixitup section animation
var mixer = mixitup('.portfolio-gallery');

// Active menu section
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    // Check if the navlist is currently open
    if (navlist.classList.contains("open")) {
        menuIcon.classList.remove("bx-x"); // Remove close icon class
        menuIcon.classList.add("bx-menu"); // Add open icon class
    } else {
        menuIcon.classList.remove("bx-menu"); // Remove open icon class
        menuIcon.classList.add("bx-x"); // Add close icon class
    }
    
    navlist.classList.toggle("open"); // Toggle navlist open class
};

window.onscroll = () => {
    menuIcon.classList.remove("bx-x"); // Remove close icon class
    menuIcon.classList.add("bx-menu"); // Add open icon class
    navlist.classList.remove("open"); // Hide navlist on scroll
};


// Parallax navbar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
