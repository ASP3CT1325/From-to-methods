gsap.from(".box", {
    y: -200,
    duration: 3,
    ease: "linear",
    repeat: -1,
    yoyo: true,
})

gsap.fromTo(".box", {
    y: 200, 
    opacity: 0,
}, 
{
    opacity: 1,
    y:-200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
})