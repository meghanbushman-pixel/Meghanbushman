const projects = [
  {
    title: "Project One, Title",
    description: "One or two sentences describing the problem, your approach, and the outcome.",
    link: "https://example.com"
  },
  {
    title: "Project Two, Title",
    description: "Call out tools used and what makes it interesting.",
    link: "https://example.com"
  }
];

function renderProjects() {
  const el = document.getElementById("projectList");
  if (!el) return;

  el.innerHTML = projects.map(p => `
    <article class="project card">
      <h3><a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a></h3>
      <p>${p.description}</p>
    </article>
  `).join("");
}

renderProjects();

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "Sending...";

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        statusEl.textContent = "Message sent, thank you.";
      } else {
        statusEl.textContent = "Something went wrong, please try again.";
      }
    } catch {
      statusEl.textContent = "Something went wrong, please try again.";
    }
  });
}
