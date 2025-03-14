const home = function() {
    const content = document.getElementById("content");
    const headerButtons = document.createElement("h1");
    content.appendChild(headerButtons)

    const homeButton = document.createElement("button");
    homeButton.id = "homeButton";
    homeButton.textContent = 'HOME';
    headerButtons.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.id = "menuButton";
    menuButton.textContent = 'MENU';
    headerButtons.appendChild(menuButton);

    const aboutButton = document.createElement("button");
    aboutButton.id = "aboutButton";
    aboutButton.textContent = 'ABOUT';
    headerButtons.appendChild(aboutButton);

}

export default home;