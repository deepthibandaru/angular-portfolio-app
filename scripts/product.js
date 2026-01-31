document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactStatus");

  // smooth scroll for header nav anchors
  document.querySelectorAll('header .nav a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // simple hero carousel (rotates a few local hero assets)
  const heroImg = document.querySelector(".hero-media .laptop-shell img");
  const heroSlides = [
    "assets/images/aurora/hero-kv.webp",
    "assets/images/aurora/hero.jpg",
    "assets/images/aurora/design.webp",
  ];
  let heroIndex = 0;
  if (heroImg) {
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroImg.style.opacity = 0;
      setTimeout(() => {
        heroImg.src = heroSlides[heroIndex];
        heroImg.style.opacity = 1;
      }, 300);
    }, 6000);
  }

  // contact form handler (logs to console and shows status)
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const payload = {
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
      };
      console.log("Contact form submitted", payload);
      if (contactStatus)
        contactStatus.textContent = "Message sent — thank you!";
      contactForm.reset();
      setTimeout(() => {
        if (contactStatus) contactStatus.textContent = "";
      }, 4000);
    });
  }
});
