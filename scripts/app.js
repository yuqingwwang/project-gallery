import { projects } from "./constants.js";

function handleToggle(event) {
  const button = event.target;
  const detailsDiv = button.nextElementSibling;

  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
  } else {
    detailsDiv.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const template = document.getElementById("project-template");
  const container = document.querySelector(".container");

  projects.forEach((project) => {
    const projectElement = document.importNode(template.content, true).querySelector(".project");
    const toggleButton = projectElement.querySelector(".toggle-button");
    const detailsElement = projectElement.querySelector(".details");

    toggleButton.addEventListener("click", function(event){
      handleToggle(event);
      detailsElement.classList.toggle("show");
      toggleButton.textContent = detailsElement.classList.contains("show") ? "Read Less" : "Read More";});

    projectElement.querySelector("h2").textContent = project.title;
    projectElement.querySelector(".cover").src = `images/${project.image}`;
    projectElement.querySelector(".cover").alt = project.alt;
    projectElement.querySelector(".details p").textContent = project.description;
    projectElement.querySelector(".details li:nth-child(1) a").href = project.github;
    projectElement.querySelector(".details li:nth-child(1) a").textContent = "Github";
    projectElement.querySelector(".details li:nth-child(2) a").href = project.website;
    projectElement.querySelector(".details li:nth-child(2) a").textContent = "Website";
    container.appendChild(projectElement);
  });
});
