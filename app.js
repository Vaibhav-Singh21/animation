let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub:1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub:1,
    },
});

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub:1,
    },
});
let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub:1,
    },
});



tl.fromTo(".sliding-text", { y: 0}, { y: -400 });
tl2.fromTo(".logo", {scale: 6}, {scale: 1, top: '2rem', left: '3rem', x:'50%', y:'50%'});

tl4.fromTo(".square1", {left:'70%'}, {left:'0%', opacity:'0', rotation: '360'});

tl5.fromTo(".square2", {top: '50%'} ,{top: '0%', opacity:'0', rotation: '360'});





let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "0%",
        end: "200%",
        scrub:1,
        pin: true,
        pinSpacing: false, 
    },
});