gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline()
const toTop = document.querySelector(".toTop")

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    })
})


tl.from(".hero-content", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: "Power4.easeOut"
})


tl.from(".stagger", {
    opacity: 0,
    stagger: 0.3,
    y: -100,
    duration: 2,
    ease: Power4.easeOut
}, "-=1.2")

tl.from(".hero-design", {
    opacity: 0,
    y: 50,
    ease: "Power4.easeOut",
    duration: 1
}, "-=2")


gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)
})

gsap.from(".trans2", {
    scrollTrigger: {
        trigger: ".trans2",
        start: "top bottom",
    },
    y: 50,
    stagger: 0.3,
    duration: 1.2,
    opacity: 0
})

gsap.from(".trans3", {
    scrollTrigger: {
        trigger: ".trans3",
        start: "top center",
    },
    y: 50,
    stagger: 0.5,
    duration: 0.85,
    opacity: 0
})






