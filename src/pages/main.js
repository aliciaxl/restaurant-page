const home = function() {
    const content = document.getElementById("content");
    const headerButtons = document.createElement("h1");
    headerButtons.classList.add('background-element');
    content.appendChild(headerButtons);

    const homeButton = document.createElement("button");
    homeButton.id = "home-button";
    homeButton.classList.add("tab");
    homeButton.textContent = 'HOME';
    headerButtons.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.classList.add("tab");
    menuButton.textContent = 'MENU';
    headerButtons.appendChild(menuButton);

    const aboutButton = document.createElement("button");
    aboutButton.id = "about-button";
    aboutButton.classList.add("tab");
    aboutButton.textContent = 'ABOUT';
    headerButtons.appendChild(aboutButton);

    const welcome = document.createElement("div");
    welcome.id = "welcome";
    welcome.innerHTML = "WELCOME TO OS RESTAURANT";
    content.appendChild(welcome);
};

export default home;