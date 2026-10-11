/* Renders everything from data.js and runs the hero chart. */

/* ---------- Links and photo ---------- */
document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  if (key === "email") el.href = "mailto:" + SITE.email;
  else if (SITE[key]) el.href = SITE[key];
});
document.querySelectorAll("[data-photo]").forEach((img) => { img.src = SITE.photo; });
document.getElementById("year").textContent = "© " + new Date().getFullYear();

/* ---------- Render sections ---------- */
const chips = (items, learning) =>
  `<div class="chips">${items.map((t) => `<span class="chip${learning ? " learning" : ""}">${t}</span>`).join("")}</div>`;

document.getElementById("skillsGrid").innerHTML = SKILLS.map(
  (s) => `<div class="skill-group"><h3>${s.group}</h3>${chips(s.items, s.learning)}</div>`
).join("");

document.getElementById("experienceList").innerHTML = EXPERIENCE.map(
  (e) => `
  <div class="tl-item">
    <h3>${e.role}</h3>
    <p class="tl-meta">${e.org} | ${e.period}</p>
    <ul>${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
  </div>`
).join("");

document.getElementById("certList").innerHTML = CERTIFICATIONS.map((c) => `<li>${c}</li>`).join("");
document.getElementById("activityList").innerHTML = ACTIVITIES.map((a) => `<li>${a}</li>`).join("");

const initials = (t) => t.split(" ").map((w) => w[0]).join("").slice(0, 2);
document.getElementById("projectGrid").innerHTML = PROJECTS.map((p) => {
  const cover = p.image
    ? `<div class="cover" style="background-image:url('${p.image}')"></div>`
    : `<div class="cover pattern" style="--c:${p.color}"><span>${initials(p.title)}</span></div>`;
  const links = [
    p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : "",
    p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ""
  ].join("");
  return `
  <article class="project">
    ${cover}
    <div class="project-body">
      <h3>${p.title}</h3>
      <p class="project-meta">${p.meta}</p>
      <p class="desc">${p.description}</p>
      ${chips(p.tags)}
      <div class="project-links">${links}</div>
    </div>
  </article>`;
}).join("");

/* Posters */
const posterGrid = document.getElementById("posterGrid");
if (POSTERS.length) {
  posterGrid.innerHTML = POSTERS.map(
    (p, i) => `<button class="poster" data-i="${i}" aria-label="Open ${p.title}"><img src="${p.image}" alt="${p.title}" loading="lazy"></button>`
  ).join("");
}
const canvaBtn = document.getElementById("canvaBtn");
if (SITE.canva) { canvaBtn.href = SITE.canva; canvaBtn.hidden = false; }

const box = document.getElementById("lightbox");
const boxImg = document.getElementById("lightboxImg");
posterGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".poster");
  if (!btn) return;
  const p = POSTERS[btn.dataset.i];
  boxImg.src = p.image;
  boxImg.alt = p.title;
  box.showModal();
});
box.addEventListener("click", (e) => { if (e.target === box) box.close(); });

/* ---------- Mobile menu + active link ---------- */
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

const links = [...nav.querySelectorAll("a")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
