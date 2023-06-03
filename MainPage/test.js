console.clear();
var demo = document.querySelector("#demo");
var tl = new TimelineMax();
TweenMax.set ("#demo", {xPercent:-50, yPercent:-50});
tl.to("#reveal", 0.1, {attr:{r:900}, ease:Linear.easeNone}).reversed(true);

demo.addEventListener("mouseenter", crackIt);
demo.addEventListener("mouseleave", crackIt);

function crackIt() {
	tl.reversed(!tl.reversed());
}