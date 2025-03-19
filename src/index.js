import "./styles/main.css";
import "./styles/popup.css";
import main from "./pages/main.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

document.querySelectorAll("*").forEach(element => {
    element.style.fontFamily = "Arial";
  });

const body = document.body;
const backgroundImg = document.createElement("div");
backgroundImg.id = "background-image";
backgroundImg.classList.add("background-element");
body.appendChild(backgroundImg);

main();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

homeButton.addEventListener('click', function(){
    window.location.reload();
});

menuButton.addEventListener('click', function(){
    menu();
});

aboutButton.addEventListener('click', function(){
    about();
});
