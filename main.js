const roles = ["Frontend Developer", "YouTuber", "Web Developer", "Full Stack Developer"];
let index = 0;

function changeText() {
    document.getElementById("dynamic-text").textContent = roles[index];
    index = (index + 1) % roles.length;
}

setInterval(changeText, 2000);
