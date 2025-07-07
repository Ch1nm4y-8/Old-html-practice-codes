gsap.from(".image1", {
  y: 1,
  opacity: 0,
  duration: 0.5,
  delay: 0.4,
});

gsap.from(".image2", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  delay: 0.4,
});

gsap.from(".image3", {
  y: -50,
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
});

gsap.from(".centerContent", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondPage",
    scroller: "body",
    start: "top 70%",
  },
});

tl.from(".secondPage h4", {
  y: 30,
  opacity: 0,
  duration: 0.3,
});

tl.from(".secondPage h2", {
  y: 30,
  opacity: 0,
  duration: 0.5,
});

tl.from(".secondPage h3", {
  y: 30,
  opacity: 0,
  duration: 0.5,
});
