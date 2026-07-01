// ================================
// Tax Academy
// Version 1.0
// ================================

// نمایش پیام در کنسول
console.log("Tax Academy Loaded Successfully");

// اسکرول نرم برای لینک‌های داخلی
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// نمایش انیمیشن هنگام اسکرول
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
// ================================
// Header Scroll Effect
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
// ================================
// Mobile Menu
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});
console.log("Tax Academy Loaded");


// ================================
// Statistics Counter
// ================================

const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

if (statsSection && counters.length > 0) {

    const runCounter = () => {

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            const update = () => {

                const current = +counter.innerText;
                const increment = target / 100;

                if (current < target) {

                    counter.innerText = Math.ceil(current + increment);

                    setTimeout(update, 20);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        });

    };

    const statsObserver = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            runCounter();

            statsObserver.disconnect();

        }

    });

    statsObserver.observe(statsSection);

}
// ================================
// Back To Top
// ================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}