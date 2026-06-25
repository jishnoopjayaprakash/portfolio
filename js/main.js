const projects = [
  {
    title: "Project One",
    desc: "A responsive web application built with React and Node.js.",
    link: "#"
  },
  {
    title: "Project Two",
    desc: "An e-commerce platform with payment integration and admin dashboard.",
    link: "#"
  },
  {
    title: "Project Three",
    desc: "A real-time chat application using WebSockets and Express.",
    link: "#"
  }
];

const grid = document.getElementById("projectsGrid");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href="${p.link}" target="_blank">View Project &rarr;</a>`;
  grid.appendChild(card);
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  e.target.reset();
});
