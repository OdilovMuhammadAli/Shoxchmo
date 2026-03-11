const lenis = new Lenis({ duration: 1.8 });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main-scroller",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

tl.to("#s-hero", {
  y: -100,
  opacity: 0,
  filter: "blur(40px)",
  duration: 2,
});

tl.to("#s-explode", { opacity: 1, filter: "blur(0px)", duration: 1.5 })
  .from("#lay-1", { z: -1500, duration: 3 }, "-=1")
  .from("#lay-2", { z: -800, duration: 3 }, "-=2.5")
  .from("#lay-3", { z: 800, duration: 3 }, "-=2.5")
  .to("#lay-1", { x: -200, rotateY: -20, duration: 3 }, "+=0.5")
  .to("#lay-3", { x: 200, rotateY: 20, duration: 3 }, "-=3")
  .to("#s-explode", {
    scale: 0.5,
    opacity: 0,
    filter: "blur(30px)",
    duration: 2.5,
  });

tl.to("#s-chip", { opacity: 1, filter: "blur(0px)", duration: 1 })
  .from("#chip-model", { scale: 0.2, rotateY: 180, duration: 2 })
  .to("#s-chip", {
    scale: 10,
    opacity: 0,
    filter: "blur(20px)",
    duration: 2.5,
  });

tl.to("#s-gallery", { opacity: 1, filter: "blur(0px)", duration: 1.5 })
  .from("#gallery-grid div", {
    z: -5000,
    stagger: 0.1,
    duration: 4,
    ease: "back.out(1)",
  })
  .to("#gallery-grid", {
    scale: 4,
    opacity: 0,
    filter: "blur(40px)",
    duration: 3.5,
  });

tl.to("#s-mac", { opacity: 1, filter: "blur(0px)", duration: 1.5 })
  .to("#mac-lid", { rotateX: 0, duration: 3 })
  .to("#s-mac", {
    scale: 0.8,
    opacity: 0,
    filter: "blur(20px)",
    duration: 2,
  });

tl.to("#s-form", { opacity: 1, filter: "blur(0px)", duration: 1.5 }).from(
  "#s-form .glass-card",
  { y: 200, opacity: 0, duration: 2 }
);

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  gsap.to(".section-container", { x: x, y: y, duration: 1.5 });
});
