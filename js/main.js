const projectsGrid = document.getElementById("projects-grid");
const projectCount = document.getElementById("project-count");

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const top = document.createElement("div");
  top.className = "project-top";

  const badge = document.createElement("span");
  badge.className = "project-badge";
  badge.textContent = project.status || "Tutorial";

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.name;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  top.appendChild(badge);
  top.appendChild(title);
  top.appendChild(description);

  const links = document.createElement("div");
  links.className = "project-links";

  const repoLink = document.createElement("a");
  repoLink.className = "project-link project-link-primary";
  repoLink.href = project.repoUrl;
  repoLink.target = "_blank";
  repoLink.rel = "noreferrer";
  repoLink.textContent = "GitHub Repository";
  links.appendChild(repoLink);

  if (project.demoUrl && project.demoUrl.trim() !== "") {
    const demoLink = document.createElement("a");
    demoLink.className = "project-link";
    demoLink.href = project.demoUrl;
    demoLink.target = "_blank";
    demoLink.rel = "noreferrer";
    demoLink.textContent = "Live Demo";
    links.appendChild(demoLink);
  }

  article.appendChild(top);
  article.appendChild(links);

  return article;
}

function renderProjects() {
  projectCount.textContent = projects.length;

  if (!projects.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "project-empty";
    emptyState.textContent = "No tutorial projects added yet.";
    projectsGrid.appendChild(emptyState);
    return;
  }

  projects.forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project));
  });
}

renderProjects();
