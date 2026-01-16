window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script47 = function()
{
  const button = object('6MNunmFx90z'); // Get reference to the button

// Add hover effect
button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#3B5D75'; // Change to a lighter shade
});

// Revert hover effect
button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#2B475C'; // Revert to the original color
});
}

window.Script48 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script49 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script50 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script51 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script52 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script53 = function()
{
  const fade = document.querySelector(`[data-model-id='6YhgczL1AQi']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 0.75, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script54 = function()
{
  const fade = document.querySelector(`[data-model-id='5qQr6SfB2Uw']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 0.75, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script55 = function()
{
  const fade = document.querySelector(`[data-model-id='61njBoMV2yz']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 0.75, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script56 = function()
{
  const fade = document.querySelector(`[data-model-id='6cgpknogSI0']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 0.75, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script57 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script58 = function()
{
  const fade = document.querySelector(`[data-model-id='68Ulj2gHrr4']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 0.75, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script59 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script60 = function()
{
  const fade = document.querySelector(`[data-model-id='664wX6laj9x']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 0.75, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script61 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script62 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

window.Script63 = function()
{
  const slide1 = document.querySelector(`[data-model-id='5qPnjk80KD4']`);
const slide2 = document.querySelector(`[data-model-id='5XjYo3aPHAp']`);
const slide3 = document.querySelector(`[data-model-id='5yCUpAChX1U']`);

const slides = [slide1, slide2, slide3];

currentStep = getVar("slideStep");

slides.forEach((slide, index) => {
	if(index == currentStep - 1){
		slide.style.zIndex = "3";
	}else{
		slide.style.zIndex = "2";
	}
});
}

window.Script64 = function()
{
  const fade = document.querySelector(`[data-model-id='6CuL98gaxmT']`);

gsap.set(fade, {opacity: 0});
gsap.to(fade, 1, {opacity: 1, ease: "power2.out"});

fade.style.backdropFilter = 'blur(5px)';
}

};
