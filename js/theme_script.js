$(document).ready(function () {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', () => {
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });



    if (window.matchMedia('(min-width: 990px)').matches) {
        //scroll
        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".front-page",
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    duration: 0.1,
                    delay: 0.1,
                    ease: "power1.inOut"
                },
                end: () => "+=" + document.querySelector(".front-page").offsetWidth
            }
        });

        // Start midnight
        $(document).ready(function () {
            // Change this to the correct selector.
            $('.site-header').midnight();
        });

    }





});