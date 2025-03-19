const exit = function() {
    const popup = document.getElementById("popup");
    popup.remove();

    const backgroundElements = document.querySelectorAll(".background-element");
    backgroundElements.forEach(bg => {
            bg.classList.remove("blur-background");
    });

    const tabs = document.getElementsByClassName("tab");
    for (let i=0; i<tabs.length; i++){
        tabs[i].classList.remove("hidden");
    };

    const welcome = document.getElementById("welcome");
    welcome.classList.remove("hidden");

};

export default exit;