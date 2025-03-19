import exit from "./exit.js";
import aboutImg from "../assets/about.jpg";

const about = function() {
    const backgroundElements = document.querySelectorAll(".background-element");

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

    const aboutPage = document.createElement("div");
    aboutPage.id = "popup";
    content.appendChild(aboutPage);
    
    const exitBtn = document.createElement("button");
    exitBtn.classList.add("exit-btn");
    exitBtn.innerHTML = "X";
    aboutPage.appendChild(exitBtn);

    exitBtn.addEventListener("click", function(){
        exit();
    });

    const aboutHeader = document.createElement("p");
    aboutHeader.classList.add("popup-header")
    aboutHeader.innerHTML = "ABOUT";
    aboutPage.appendChild(aboutHeader);

    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    aboutPage.appendChild(aboutContainer)

    const aboutInfo = document.createElement("p");
    aboutInfo.id = "about-info";
    aboutInfo.innerHTML = "OS Restaurant, Chef Hirono's bold debut restaurant, opened its doors in October 2021. Our cuisine is characterized by constant transformation, and centered on three key elements of Asian culture - fresh fish, aromatic herbs, and bright fruits. Chef Hirono combines techniques from his global training, from the bustling streets of Taiwan to the kitchens of Napoli, with a contemporary, imaginative perspective to bring you an exploration of flavors and textures. At OS, we work with the highest quality producers and artisans while staying committed to sustainability in every ingredient in choice, all while providing you a unique hospitality experience."
    aboutContainer.appendChild(aboutInfo);

    const aboutImage = document.createElement("img");
    aboutImage.src = aboutImg;
    aboutImage.alt = "About Image";
    aboutImage.id = "about-img";
    aboutContainer.appendChild(aboutImage);


};

export default about;