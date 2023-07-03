// const toggleButtons = document.querySelectorAll(".toggle-button");

// console.log(toggleButtons);

// toggleButtons.forEach((button) => {
//   button.addEventListener("click", handleToggle);
// });

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
  const projects = [
    {
      title: "Objectively Funny",
      image: "objectively-funny.gif",
      alt: "objectively-funny",
      description: "An NLP project made by four Data Science students. We sourced and processed a wide range of stand-up scripts to analyse comedians and make our own comedy with GPT-2.",
      github: "https://github.com/yuqingwwang/streamlit_objective_funny",
      website: "https://objectively-funny.streamlit.app/"
    },
    {
      title: "Monster Inc.",
      image: "monster.png",
      alt: "monster-inc",
      description: "Have an unsolved mystery in your life? Things feeling a little too spooky? Contact our monster detective agency today and we might have the solution for you.",
      github: "https://github.com/fac28/monster-inc",
      website: "https://nichgalzin.github.io/monster-inc/"
    },
    {
      title:"Trainspotting",
      image: "train.png",
      alt: "trainspotting",
      description: "A sleek display that brings you stunning visuals and live departure times for all Victoria Line stations.",
      github: "https://github.com/fac28/trainspotting-api",
      website: "https://fac28.github.io/trainspotting-api/"
    },
    {
      title: "Hobby Page",
      image: "hobby-page.gif",
      alt: "hobby-page",
      description: "Check the page to learn more about my Guinea pigs.",
      github: "https://github.com/yuqingwwang/hobby-page",
      website: "https://yuqingwwang.github.io/hobby-page/"
    },
    {
      title: "Rock Paper Scissors",
      image: "rps.gif",
      alt: "game",
      description: "Play this classic game against the computer.",
      github: "https://github.com/yuqingwwang/rock-paper-scissors",
      website: "https://yuqingwwang.github.io/rock-paper-scissors/"
    },
    {
      title: "Etch a Sketch",
      image: "draw.gif",
      alt: "sketch",
      description: "Sketch anything! Play with random colors and explore your creativity.",
      github: "https://github.com/yuqingwwang/Etch-A-Sketch",
      website: "https://yuqingwwang.github.io/Etch-A-Sketch/"
    },
    {
      title: "Movie Data",
      image: "movie.gif",
      alt: "movie-data",
      description: "Discover some Wes Anderson films, and add new film's information to the page.",
      github: "https://github.com/yuqingwwang/movie-data",
      website: "https://yuqingwwang.github.io/movie-data/"
    }
  ];

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
