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
        const sections = document.querySelectorAll(".panel");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".front-page",
                pin: true,
                scrub: 1,
                // snap: {
                //     snapTo: 1 / (sections.length - 1),
                //     duration: 0.1,
                //     delay: 0.1,
                //     ease: "power1.inOut"
                // },
                end: () => "+=" + document.querySelector(".front-page").offsetWidth
            }
        });



        let img_txt = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-2", // elemento oggetto dello scrolltrigger
                start: "left 50%",
                end: () => "+=" + (document.querySelector("#section-2").offsetWidth),
                containerAnimation: scrollTween,
                toggleActions: "play none none reverse",
                // markers: true,
                id: "img-left",
            },
        });


        img_txt
            .from(".sect2-left-img", { xPercent: -100 * (sections.length - 1), opacity: 0, ease: "none" }, "<")
            .from(".bg-text", { xPercent: -100 * (sections.length - 1), opacity: 0, duration: 1, ease: "none" })
            .to(".bg-text", {
                duration: 2,
                text: {
                    value: "business",
                    delimiter: ""
                },
                ease: "none"
            })



        let img_top = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2-content", // elemento oggetto dello scrolltrigger
                start: "left 50%",
                end: () => "+=" + (document.querySelector("#section-2").offsetWidth / (sections.length - 1) * 1),
                containerAnimation: scrollTween,
                toggleActions: "play none none reverse",
                // markers: true,
                id: "img-top",
            },
        });

        img_top.from(".sect2-right-img", { yPercent: -100 * (sections.length - 1), opacity: 0, ease: "none" }, "<")


        let sec3_txt_right = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-3", //  
                start: "left center",
                end: "center 40%",
                containerAnimation: scrollTween,
                toggleActions: "play none none reverse",
                // markers: true,
                id: "sec3-txt-right",
            },
        });

        sec3_txt_right.from(".head-top", { xPercent: 100 * ("#section-3".length - 1), duration: 1, opacity: 0, ease: "none" }, ">")


        let sec3_txt_left = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-3", //  
                start: "left 50%",
                end: () => "center 40%",
                containerAnimation: scrollTween,
                toggleActions: "play none none reverse",
                // markers: true,
                id: "sec3-txt-left",
            },
        });
        sec3_txt_left.from(".head-bottom", { xPercent: -100 * (sections.length - 1), opacity: 0, duration: 1, ease: "none" }, "<")

    }
    $('header').midnight();


});