var tl = gsap.timeline();

tl.from("nav .left , nav .right ul li", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.3,
  stagger: 0.1,
});

tl.from(".leftMain h1, .leftMain p , .leftMain button, .scroll", {
  opacity: 0,
  x: -100,
  duraton: 0.5,
  stagger: 0.1,
});

tl.from(
  ".rightMain img",
  {
    opacity: 0,
    duration: 0.2,
  },
  "-=0.2"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container2",
    scroller: "body",
    start: "top 50%",
    end: "top -50%",
    scrub: 1,
  },
});
tl2.from(
  ".twoCards .leftCard",
  {
    x: -300,
    opacity: 0,
    stagger: 0.5,
  },
  "line1"
);
tl2.from(
  ".twoCards .rightCard",
  {
    x: 300,
    opacity: 0,
    stagger: 0.5,
  },
  "line1"
);
