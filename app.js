const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", handleToggle);
});

function handleToggle(event) {
  const button = event.target;
  const detailsDiv = button.nextElementSibling;

  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
  } else {
    detailsDiv.style.display = "none";
  }
}
