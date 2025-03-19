import exit from "./exit.js";

const menu = function() {

    const backgroundElements = document.querySelectorAll(".background-element")
    backgroundElements.forEach(bg => {
        bg.classList.add("blur-background");
    });

    const tabs = document.getElementsByClassName("tab");
    for (let i=0; i<tabs.length; i++){
        tabs[i].classList.add("hidden");
    };

    const welcome = document.getElementById("welcome");
    welcome.classList.add("hidden");

    const content = document.getElementById("content");

    const menuPage = document.createElement("div");
    menuPage.id = "popup";
    content.appendChild(menuPage);
    
    const exitBtn = document.createElement("button");
    exitBtn.classList.add("exit-btn");
    exitBtn.innerHTML = "X";
    menuPage.appendChild(exitBtn);

    exitBtn.addEventListener("click", function(){
        exit();
    });

    const menuHeader = document.createElement("p");
    menuHeader.classList.add("popup-header");
    menuHeader.innerHTML = "MENU";
    menuPage.appendChild(menuHeader);

    const menuItems = [
        "Greetings from the kitchen", 
        "Hokkaido scallop - seaweed - brown butter",
        "Tuna - uni - toast",
        "Octopus - calamari ink - tortilla",
        "Oyster - orange - lemongrass",
        "Bone Marrow - gnocchetti - breadcrumbs",
        "Branzino - macadamia nut - herbs",
        "Uni - garlic butter - chili",
        "Dungeness crab - rice",
        "Coconut pandan - sticky rice - banana sorbet"
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement("p");
        menuItem.id = "menu-items";
        menuItem.innerHTML = item + "<br>֍֍֍֍";
        menuPage.appendChild(menuItem);
    });
};
    
export default menu;
