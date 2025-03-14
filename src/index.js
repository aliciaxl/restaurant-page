import "./styles/main.css";
import "./styles/menu.css";
import main from "./pages/main.js";
import menu from "./pages/menu.js"

const body = document.body;
body.id = "backgroundImage";

main();

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");

homeButton.addEventListener('click', function(){
    window.location.reload();
});

menuButton.addEventListener('click', function(){
    menu();
})
