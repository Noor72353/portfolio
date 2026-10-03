// =========================================================
// PORTFOLIO WEBSITE JAVASCRIPT
// =========================================================


// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    const navigationLinks =
        document.querySelectorAll(".nav-links a");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


// =========================================================
// ACTIVE NAVIGATION SECTION
// =========================================================

const sections =
    document.querySelectorAll("main section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

window.addEventListener(
    "load",
    updateActiveNavigation
);


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const revealElements =
    document.querySelectorAll(
        ".about-content, " +
        ".skill-category, " +
        ".project-card, " +
        ".education-item, " +
        ".certificate-card, " +
        ".achievement-card, " +
        ".contact-content"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

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

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


// =========================================================
// BACK TO TOP BUTTON
// =========================================================

const backToTop =
    document.querySelector("#backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "visible"
                );

            } else {

                backToTop.classList.remove(
                    "visible"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// =========================================================
// PAGE LOADING SCREEN
// =========================================================

function hidePageLoader() {

    const pageLoader =
        document.querySelector("#pageLoader");


    if (pageLoader) {

        pageLoader.classList.add(
            "hidden"
        );

    }

}


// Hide loader when page finishes loading

window.addEventListener(
    "load",
    hidePageLoader
);


// Safety fallback:
// Hide it even if another page resource
// takes too long to load.

setTimeout(
    hidePageLoader,
    2000
);
