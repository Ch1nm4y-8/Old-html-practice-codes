function page1Animation() {
  var tl2 = gsap.timeline();
  tl2.from("nav a", {
    y: -100,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    delay: 1,
    ease: "elastic.out(1,0.3)",
  });

  tl2.from(".green-stroke", {
    opacity: 0,
  });

  tl2.from(".p1leftcontent>img", {
    opacity: 0,
    duration: 0.1,
  });

  tl2.from(".p1leftcontent .bottlecontainer img", {
    opacity: 0,
    scale: 0,
    duration: 1,
  });

  tl2.from(
    [".p1rightcontent p", ".p1rightcontent button"],
    {
      opacity: 0,
      x: 100,
      stagger: 0.2,
    },
    "side"
  );
  tl2.from(
    ".p1centercontent h1",
    {
      opacity: 0,
      x: -100,
    },
    "side"
  );
}
page1Animation();

function page2Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scrub: 2,
      scroller: "body",
      start: "top 60%",
      end: "top -80%",
    },
  });

  tl3.from(".page2 h1", {
    opacity: 0,
    y: -100,
  });

  tl3.from(".cardleft", {
    x: -1300,
    opacity: 0,
    duration: 0.5,
  });
  tl3.from(".cardright", {
    x: 1300,
    opacity: 0,
    duration: 1,
  });
}

page2Animation();

function canvasAnimation() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  const frames = {
    currentIndex: 0,
    maxIndex: 100,
  };

  let imagesLoaded = 0;
  const images = [];
  const preloadImages = () => {
    for (var i = 0; i <= frames.maxIndex; i++) {
      const imageUrl = `./images/canvas/md-canvas-frames/${i.toString().padStart(3, 0)}.jpg`;
      const img = new Image();
      img.src = imageUrl;
      images.push(img);
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded == frames.maxIndex) {
          loadImage(0);
          startAnimation();
        }
      };
    }
  };
  preloadImages();

  const loadImage = (index) => {
    if (index >= 0 && index < frames.maxIndex) {
      const img = images[index];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  };

  function startAnimation() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".canvascontainer",
        start: "top top",
        end: "85% top",
        scrub: true,
      },
    });

    tl.to(frames, {
      currentIndex: frames.maxIndex,
      onUpdate: () => {
        loadImage(Math.floor(frames.currentIndex));
      },
    });
  }
}
canvasAnimation();

gsap.from(".canvasele h1", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".canvasele",
    // markers:true,
    // scrub:true,
    start: "top -200%",
  },
});

function page3Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      duration: 2,
      start: "top 40%",
    },
  });

  tl4.from(".page3>h1", {
    y: -100,
    opacity: 0,
  });

  tl4.from(".p3leftcontent", {
    x: -200,
    opacity: 0,
    duration: 1,
  });
  tl4.from(".p3rightcontent", {
    x: 200,
    opacity: 0,
    duration: 1,
  });
}
page3Animation();

gsap.to(".slider h1", {
  transform: "TranslateX(calc(-100% - 3vmax))",
  duration: 1.5,
  repeat: -1,
  ease: "linear.out",
});

function LenisInit() {
  const lenis = new Lenis({
    duration: 5,
    lerp: 0.3,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    console.log("hi");
  }
  requestAnimationFrame(raf);
}
LenisInit();
