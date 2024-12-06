// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Dynamic text for the introduction
const dynamicText = document.getElementById("dynamic-text");
const textOptions = ["Front-End Developer", "Back-End Developer", "Full Stack Developer", "Software Engineer"];
let textIndex = 0;

function changeText() {
    dynamicText.textContent = textOptions[textIndex];
    textIndex = (textIndex + 1) % textOptions.length;
}

setInterval(changeText, 2000); // Change every 2 seconds
