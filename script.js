console.log("JS Linked");

const container = document.querySelector(".container");
const projectBoxSize = document.querySelector(".project").offsetWidth - 100;
const projectBoxCount = 10;
var currentProjectIndex = 0;

container.scrollLeft = -container.offsetWidth - projectBoxSize;

var projects = document.querySelectorAll(".project");
for(let i = 1; i < projectBoxCount; i++)
{
  projects[i].classList.toggle('fadeOut');
}

// Center the first project on load
window.addEventListener("load", () => {
  projects[currentProjectIndex].scrollIntoView({
    inline: "center",
    block: "nearest",
    behavior: "auto" // instant on load, no animation
  });
});

function moveLeft() {
  if(currentProjectIndex <= 0) return;
    var elStyle = window.getComputedStyle(container);

    projects[currentProjectIndex].classList.toggle('fadeOut');
    currentProjectIndex--;
    projects[currentProjectIndex].classList.toggle('fadeOut');
    
    projects[currentProjectIndex].scrollIntoView({
    inline: "center",
    block: "nearest",
    behavior: "smooth"
  });
}

function moveRight() {
  if(currentProjectIndex + 1 >= projectBoxCount) return;
    var elStyle = window.getComputedStyle(container);

    projects[currentProjectIndex].classList.toggle('fadeOut');
    currentProjectIndex++;
    projects[currentProjectIndex].classList.toggle('fadeOut');

    projects[currentProjectIndex].scrollIntoView({
    inline: "center",
    block: "nearest",
    behavior: "smooth"
  });
}

const left_button = document.querySelector("#left_button");
left_button.addEventListener("click", (event) => {
  moveLeft();
});
const right_button = document.querySelector("#right_button");
right_button.addEventListener("click", (event) => {
  moveRight();
});
// const project_buttons = document.querySelectorAll(".project_button");
// project_buttons.forEach(function (button) {
//   button.togglePopover();
// });