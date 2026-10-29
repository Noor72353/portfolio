// =========================================================
// PORTFOLIO WEBSITE JAVASCRIPT
// =========================================================


// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

if (menuToggle && navLinks) {

    function closeMenu() {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        document.body.style.overflow = "";
    }

    function openMenu() {
        navLinks.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

        document.body.style.overflow = "hidden";
    }

    // Open and close the mobile navigation menu
    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (navLinks.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu when a navigation link is clicked
    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // Close the menu when clicking outside it
    document.addEventListener("click", (event) => {
        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close the menu when Escape is pressed
    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            navLinks.classList.contains("active")
        ) {
            closeMenu();
            menuToggle.focus();
        }
    });

}


// =========================================================
// ACTIVE NAVIGATION SECTION
// =========================================================

const sections = document.querySelectorAll("main section");

function updateActiveNavigation() {
    let currentSection = "";

    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach((link) => {
        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".about-content, " +
    ".skill-category, " +
    ".project-card, " +
    ".education-item, " +
    ".certificate-card, " +
    ".achievement-card, " +
    ".contact-content"
);

// Add the reveal class to selected elements
revealElements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


// =========================================================
// BACK TO TOP BUTTON
// =========================================================

const backToTop = document.querySelector("#backToTop");

if (backToTop) {

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    // Smoothly scroll to the top when clicked
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}


// =========================================================
// PAGE LOADING SCREEN
// =========================================================

function hidePageLoader() {
    const pageLoader = document.querySelector("#pageLoader");

    if (pageLoader) {
        pageLoader.classList.add("hidden");
    }
}

// Hide the loader when the page finishes loading
window.addEventListener("load", hidePageLoader);

// Safety fallback in case another resource loads slowly
setTimeout(hidePageLoader, 2000);
