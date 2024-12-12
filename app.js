gsap.registerPlugin(ScrollTrigger)

const lineOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-one",
        start: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

lineOne
    .from('.line-one span', { y: '100vh', opacity: 0, stagger: .3, duration: 2 })
    .to('.line-one', { backgroundColor: 'yellow', duration: 1 })
    .from('.sun', { x: '100vw', duration: 1 })
    .to('.sun', { x: '-100vw', opacity: 0, duration: 1, delay: 3 })
    .to('.line-one span', { x: '100vw', duration: 1 }, '<')


const lineTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-two",
        start: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

lineTwo
    .from('.line-two span:first-child', { x: '-100vw', opacity: 0, scale: 20, duration: 1 })
    .from('.line-two span:last-child', { x: '100vw', opacity: 0, scale: 20, duration: 1 }, '<')
    .to('.line-two span:first-child', {
        duration: 2, ease: "bounce.out", y: -50, onComplete: () => {
            gsap.to('.line-two span:first-child', { y: 0, duration: 0.5 })
        }
    })
    .to('.line-two span:last-child', {
        duration: 2, ease: "bounce.out", y: -50, onComplete: () => {
            gsap.to('.line-two span:last-child', { y: 0, duration: 0.5 })
        }
    })

const lineThree = gsap.timeline({
    scrollTrigger:{
        trigger:'.line-three',
        start:'top top',
        pin:true,
        scrub:true,
        // markers:true
    }
})    

lineThree
.from('.line-three span',{y:'100vh',duration:1,stagger:0.2})
.to('.line-three',{backgroundPositionX: '0',color:'white',duration:1})