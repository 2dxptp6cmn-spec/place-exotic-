const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger?.addEventListener("click", () => {
  if (!mobileNav) return;
  const open = !mobileNav.hidden;
  mobileNav.hidden = open;
  burger.setAttribute("aria-expanded", String(!open));
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    burger?.setAttribute("aria-expanded", "false");
  });
});
