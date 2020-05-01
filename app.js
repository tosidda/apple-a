const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
}).addIndicators().setPin(intro).addTo(controller);


const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0})
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnim).addTo(controller);

let speedAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
    console.log(scrollPos);
})

setInterval(() => {
    delay += (scrollPos - delay) * speedAmount; 
    console.log(delay, scrollPos);
    video.currentTime = delay;
}, 33.3)